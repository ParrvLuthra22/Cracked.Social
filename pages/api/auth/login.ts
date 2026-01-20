import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'Missing fields' })
    }

    try {
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
            expiresIn: '7d',
        })

        res.setHeader(
            'Set-Cookie',
            serialize('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                sameSite: 'strict',
                path: '/',
            })
        )

        res.status(200).json({ user: { id: user.id, email: user.email, name: user.name } })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

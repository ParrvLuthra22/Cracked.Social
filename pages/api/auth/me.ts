import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/db'
import jwt from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ message: 'Not authenticated' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, email: true, name: true, createdAt: true }
        })

        if (!user) {
            return res.status(401).json({ message: 'User not found' })
        }

        res.status(200).json({ user })
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' })
    }
}

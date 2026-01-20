import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import ParticlesBackground from '../components/ParticlesBackground'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            })

            if (res.ok) {
                router.push('/')
            } else {
                const data = await res.json()
                setError(data.message || 'Something went wrong')
            }
        } catch (err) {
            setError('Failed to sign up')
        }
    }

    return (
        <>
            <Head>
                <title>Sign Up — cracked.social</title>
            </Head>
            <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
                <ParticlesBackground />

                <div className="relative z-10 w-full max-w-md p-8 glass rounded-2xl border border-white/10 shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl font-bold text-center mb-8">Join the Community</h1>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Satoshi Nakamoto"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="founder@cracked.social"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-bold py-3 rounded-lg hover:scale-[1.02] transition-transform"
                            >
                                Sign Up
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link href="/login" className="text-white hover:underline">
                                Log in
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

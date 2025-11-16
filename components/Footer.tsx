export default function Footer(){
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <div className="mb-4">cracked.social © {new Date().getFullYear()}</div>
        <div className="text-sm text-gray-500">Built for founders. Minimal, high-signal community.</div>
      </div>
    </footer>
  )
}

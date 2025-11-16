export default function Events(){
  return (
    <div id="events" className="grid gap-6 grid-cols-1 md:grid-cols-3">
      {[1,2,3].map((i)=> (
        <div key={i} className="p-6 rounded-lg bg-white/3 border border-white/6 backdrop-blur-md">
          <h4 className="font-semibold">Signature Event #{i}</h4>
          <p className="mt-2 text-gray-300 text-sm">Placeholder card — details coming soon.</p>
        </div>
      ))}
    </div>
  )
}

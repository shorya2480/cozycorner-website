import { Link } from 'react-router-dom'
import Button from './Button'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-white">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl">Cozy Corner</h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl">Your Daily Dose of Happiness.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/menu" className="inline-block"><Button>View Menu</Button></Link>
          <Link to="/contact" className="inline-block"><Button variant="ghost" className="text-white border border-white/30 hover:bg-white/10">Visit Us</Button></Link>
        </div>
      </div>
    </div>
  )
}



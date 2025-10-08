import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface mt-16 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg mb-2">Cozy Corner</h3>
          <p className="text-sm text-text/70">Let’s Brew Happiness Together.</p>
        </div>
        <div>
          <h4 className="font-medium">Visit Us</h4>
          <p className="text-sm text-text/70 mt-1">42 Katadanga Road, Kankinara Road 2,<br />Opposite to Aloo Kothi, Kankinara, West Bengal</p>
          <p className="text-sm text-text/70 mt-2">Opening Hours: 5:00 PM – 10:30 PM</p>
        </div>
        <div className="flex items-start md:justify-end gap-3">
          <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-accent/10 text-accent transition-colors"><Instagram /></a>
          <a href="#" aria-label="Facebook" className="p-2 rounded-full hover:bg-accent/10 text-accent transition-colors"><Facebook /></a>
        </div>
      </div>
      <div className="text-center text-xs text-text/60 pb-6">© {new Date().getFullYear()} Cozy Corner. All rights reserved.</div>
    </footer>
  )
}



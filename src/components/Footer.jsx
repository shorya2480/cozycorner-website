import { Instagram, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface mt-8 sm:mt-12 md:mt-16 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-base sm:text-lg mb-2">Cozy Corner</h3>
          <p className="text-xs sm:text-sm text-text/70">Let's Brew Happiness Together.</p>
        </div>
        <div>
          <h4 className="font-medium text-sm sm:text-base">Visit Us</h4>
          <p className="text-xs sm:text-sm text-text/70 mt-1">42 Katadanga Road, Kankinara Road 2,<br className="hidden sm:block" /> Opposite to Aloo Kothi, Kankinara, West Bengal</p>
          <p className="text-xs sm:text-sm text-text/70 mt-2">Opening Hours: 5:00 PM – 10:30 PM</p>
        </div>
        <div className="flex items-start md:justify-end gap-3">
          <a href="https://www.instagram.com/cozy_cornercafe99?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full hover:bg-accent/10 text-accent transition-colors"><Instagram size={20} /></a>
          <a href="https://maps.app.goo.gl/7J6UZWXbSDhEjvtW6" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="p-2 rounded-full hover:bg-accent/10 text-accent transition-colors"><MapPin size={20} /></a>
        </div>
      </div>
      <div className="text-center text-xs text-text/60 pb-4 sm:pb-6 px-4">© {new Date().getFullYear()} Cozy Corner. All rights reserved.</div>
    </footer>
  )
}



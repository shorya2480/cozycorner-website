import Hero from '../components/Hero'
import Section from '../components/Section'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { TESTIMONIALS } from '../data/testimonials'

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="about">
        <h2 className="font-display text-2xl sm:text-3xl">About Us</h2>
        <p className="mt-3 text-sm sm:text-base text-text/80 max-w-3xl">
          Cozy Corner began with a simple dream — to create a warm and welcoming space where people can slow down, share stories, and enjoy the simple joys of life. What started as a small café has grown into a community spot where comfort meets flavor.
        </p>
        <div className="mt-4 sm:mt-5">
          <Link to="/about"><Button variant="ghost">Read our story</Button></Link>
        </div>
      </Section>

      <Section id="highlights" className="bg-surface">
        <h2 className="font-display text-2xl sm:text-3xl">Why People Love Us</h2>
        <ul className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {TESTIMONIALS.slice(0, 2).map((t, i) => (
            <li key={i} className="p-4 sm:p-6 rounded-lg bg-white/70 shadow-subtle">
              <p className="text-sm sm:text-base italic">"{t.quote}"</p>
              <p className="mt-2 text-xs sm:text-sm text-text/70">— {t.author}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="text-center">
        <h2 className="font-display text-2xl sm:text-3xl">Ready to taste happiness?</h2>
        <div className="mt-4 sm:mt-5">
          <Link to="/menu"><Button>View Full Menu</Button></Link>
        </div>
      </Section>
    </>
  )
}



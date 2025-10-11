import Section from '../components/Section'
import Category from '../components/Menu/Category'
import { MENU } from '../data/menu'

export default function Menu() {
  return (
    <>
      <Section id="menu-top">
        <h1 className="font-display text-4xl">Menu</h1>
        <p className="text-text/70 mt-2">Discover our warm selections of coffee, tea, and bites.</p>
        <div className="mt-8 space-y-12">
          {MENU.map((cat) => (
            <Category key={cat.id} {...cat} />
          ))}
        </div>
      </Section>
    </>
  )
}
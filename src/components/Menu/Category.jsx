import ItemCard from './ItemCard'

export default function Category({ id, name, items }) {
  return (
    <div id={id} className="space-y-3 sm:space-y-4">
      <h3 className="font-display text-xl sm:text-2xl">{name}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
        {items.map((it) => (
          <ItemCard key={it.name} {...it} />
        ))}
      </div>
    </div>
  )
}



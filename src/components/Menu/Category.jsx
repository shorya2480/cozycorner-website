import ItemCard from './ItemCard'

export default function Category({ id, name, items }) {
  return (
    <div id={id} className="space-y-4">
      <h3 className="font-display text-2xl">{name}</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <ItemCard key={it.name} {...it} />
        ))}
      </div>
    </div>
  )
}



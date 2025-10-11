export default function ItemCard({ name, desc, price }) {
  return (
    <div className="p-4 rounded-lg bg-white/80 shadow-subtle hover:shadow-lg transition-transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-text/70 mt-1">{desc}</p>
        </div>
        <div className="text-accent font-semibold">₹{price}</div>
      </div>
    </div>
  )
}



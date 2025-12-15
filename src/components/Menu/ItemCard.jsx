export default function ItemCard({ name, desc, price }) {
  return (
    <div className="p-3 sm:p-4 rounded-lg bg-white/80 shadow-subtle hover:shadow-lg transition-transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm sm:text-base">{name}</h4>
          <p className="text-xs sm:text-sm text-text/70 mt-1">{desc}</p>
        </div>
        <div className="text-accent font-semibold text-sm sm:text-base whitespace-nowrap">₹{price}</div>
      </div>
    </div>
  )
}



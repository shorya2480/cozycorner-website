export default function Button({ variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2.5 sm:py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 touch-manipulation'
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-600 focus:ring-accent active:bg-accent-600',
    ghost: 'bg-transparent text-accent hover:bg-accent/10 focus:ring-accent active:bg-accent/15'
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}



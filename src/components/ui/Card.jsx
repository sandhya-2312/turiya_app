export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8 ${className}`}
    >
      {children}
    </div>
  )
}

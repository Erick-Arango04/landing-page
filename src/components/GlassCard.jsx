// Componente base para cards con efecto glassmorphism
function GlassCard({ children, className = '', hover = false }) {
  const baseClasses = "backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl shadow-glass"
  const hoverClasses = hover ? "hover:shadow-glass-lg hover:bg-white/50 transition-all duration-300" : ""

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

export default GlassCard

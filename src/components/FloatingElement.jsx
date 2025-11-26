// Elemento decorativo flotante para el background
function FloatingElement({ children, className = '', animationClass = 'animate-float' }) {
  return (
    <div className={`absolute ${animationClass} ${className}`}>
      {children}
    </div>
  )
}

export default FloatingElement

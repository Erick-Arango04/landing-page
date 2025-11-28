import { useState, useEffect } from 'react'

// Función para generar código único
const generateUniqueCode = () => {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `DESC-${randomStr}-${timestamp.substring(timestamp.length - 4)}`.toUpperCase()
}

function DiscountPopup({
  isVisible,
  onClose,
  discount = "$100",
  heading = "¿Listo para ahorrar tiempo y horas de trabajo?",
  subtext = "Conmigo lo puedes logar. 😉",
  description = "Copia el código de este anuncio y compártelo durante tu sesión para activar tu descuento exclusivo."
}) {
  const [copied, setCopied] = useState(false)
  const [uniqueCode, setUniqueCode] = useState('')

  // Generar o recuperar código único al montar
  useEffect(() => {
    if (isVisible) {
      const savedCode = localStorage.getItem('userDiscountCode')
      if (savedCode) {
        setUniqueCode(savedCode)
      } else {
        const newCode = generateUniqueCode()
        setUniqueCode(newCode)
        // NO guardar automáticamente - solo cuando el usuario copie
      }
    }
  }, [isVisible])

  // Handler para copiar código - SOLO aquí se guarda en localStorage
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(uniqueCode)
      // Guardar código en localStorage solo cuando se copia
      localStorage.setItem('userDiscountCode', uniqueCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Handler para cerrar al hacer click en overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // No renderizar si no es visible
  if (!isVisible) return null

  return (
    // Overlay
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleOverlayClick}
    >
      {/* Card del popup con gradient del hero */}
      <div className="relative bg-gradient-to-t from-white to-[#ace0f9] border border-white/30 rounded-2xl shadow-glass-lg w-full max-w-2xl animate-fade-in z-[70]">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-dark hover:text-primary hover:scale-110 transition-all duration-200 rounded-full hover:bg-white/30"
          aria-label="Cerrar popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido del ticket - Layout responsive */}
        <div className="flex flex-col lg:flex-row p-6 sm:p-8 lg:p-10 gap-6 lg:gap-8">
          {/* Sección izquierda - Descuento */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center lg:border-r-2 lg:border-dashed lg:border-gray-dark/30 lg:pr-8 pb-6 lg:pb-0 border-b-2 lg:border-b-0 border-dashed border-gray-dark/30">
            <div className="text-center">
              <div className="text-sm sm:text-base text-gray-dark mb-2 font-bold">DESCUENTO</div>
              {/* Icono de ticket/cupón al lado del precio */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-primary drop-shadow-md">
                  {discount}
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-dark font-semibold uppercase tracking-wide">Pesos</div>
            </div>
          </div>

          {/* Sección derecha - Contenido */}
          <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-5">
            {/* Título */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-dark leading-tight">
              {heading}
            </h2>

            {/* Subtexto */}
            <p className="text-lg sm:text-xl text-gray-dark">
              {subtext}
            </p>

            {/* Descripción */}
            <p className="text-sm sm:text-base text-gray-medium">
              {description}
            </p>

            {/* Código en caja destacada */}
            <div className="bg-white/80 border-2 border-dashed border-primary/60 rounded-lg p-4 sm:p-5 shadow-md">
              <div className="text-xs sm:text-sm text-gray-dark mb-2 font-bold uppercase tracking-wide">
                Tu código exclusivo:
              </div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-primary text-center break-all">
                {uniqueCode}
              </div>
            </div>

            {/* Botón copiar código */}
            <button
              onClick={handleCopyCode}
              className={`${
                copied
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-primary hover:bg-blue-700'
              } text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full`}
            >
              {copied ? '¡Copiado! ✓' : 'Copiar Código'}
            </button>

            {/* Botón "No lo quiero" */}
            <button
              onClick={onClose}
              className="text-gray-medium hover:text-gray-dark font-semibold text-sm sm:text-base underline hover:no-underline transition-all duration-200 text-center"
            >
              No lo quiero
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscountPopup

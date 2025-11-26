import GlassCard from './GlassCard'

// Componente para mockups flotantes con glassmorphism - Responsive
function MockupCard({ title, subtitle, icon, stats, animationClass = '' }) {
  return (
    <GlassCard className={`p-4 sm:p-5 lg:p-6 ${animationClass}`} hover={true}>
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="text-2xl sm:text-3xl lg:text-4xl">{icon}</div>
        {stats && (
          <div className="text-right">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">{stats.value}</div>
            <div className="text-[10px] sm:text-xs text-gray-medium">{stats.label}</div>
          </div>
        )}
      </div>

      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-dark mb-1 sm:mb-2">{title}</h3>
      {subtitle && (
        <p className="text-xs sm:text-sm text-gray-medium">{subtitle}</p>
      )}
    </GlassCard>
  )
}

export default MockupCard

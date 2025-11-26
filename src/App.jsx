import GlassCard from './components/GlassCard'
import MockupCard from './components/MockupCard'
import FloatingElement from './components/FloatingElement'

function App() {

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/eriar1235/validacion-ia'
      })
    }
    return false
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Rediseñado */}
      <section className="relative bg-gradient-to-t from-white to-[#ace0f9] py-12 sm:py-16 lg:py-20 px-6 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Elementos decorativos flotantes */}
        <FloatingElement className="top-20 left-10 opacity-20" animationClass="animate-float-slow">
          <div className="w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
        </FloatingElement>
        <FloatingElement className="bottom-20 right-20 opacity-20" animationClass="animate-float-delay">
          <div className="w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
        </FloatingElement>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lado izquierdo - Copy */}
            <div className="text-left space-y-5 sm:space-y-6 animate-fade-in z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-dark leading-[1.1]">
                ¿Y si empiezas a recuperar tiempo perdido cada semana?
              </h1>

              {/* Mockups para móvil - Collage */}
              <div className="relative my-4 lg:hidden h-[300px]">
                <div className="absolute top-0 right-0 w-[75%] z-30 -rotate-3 animate-float-delay">
                  <MockupCard
                    title="Productividad"
                    subtitle="Enfócate en lo importante"
                    icon="⚡"
                    stats={{ value: "10hrs", label: "Por semana" }}
                    animationClass=""
                  />
                </div>
                <div className="absolute top-24 left-0 w-[75%] z-20 -rotate-2 animate-float-slow">
                  <MockupCard
                    title="IA Assistant"
                    subtitle="Analiza y genera reportes"
                    icon="🤖"
                    stats={{ value: "3hrs", label: "Ahorro diario" }}
                    animationClass=""
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-[75%] z-10 -rotate-4 animate-float">
                  <MockupCard
                    title="Tarea Automatizada"
                    subtitle="Correo respondido en 30 segundos"
                    icon="✅"
                    stats={{ value: "90%", label: "Tiempo ahorrado" }}
                    animationClass=""
                  />
                </div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-dark max-w-2xl font-semibold leading-relaxed">
                No es magia. Se llama automatizar lo repetitivo.
              </p>

              <p className="text-base sm:text-lg lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                Cuéntame sobre tu trabajo. Quiero mostrarte algo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-4">
                <button
                  onClick={openCalendly}
                  className="bg-primary hover:bg-blue-700 text-white font-bold text-base sm:text-lg px-10 py-5 sm:px-8 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                >
                  Agenda 15 Minutos Gratis
                </button>
              </div>
            </div>

            {/* Lado derecho - Mockups flotantes */}
            <div className="relative lg:h-[500px] xl:h-[600px] hidden lg:block">
              <MockupCard
                title="Tarea Automatizada"
                subtitle="Correo respondido en 30 segundos"
                icon="✅"
                stats={{ value: "90%", label: "Tiempo ahorrado" }}
                animationClass="absolute top-0 right-0 w-60 lg:w-64 xl:w-72 animate-float"
              />

              <MockupCard
                title="IA Assistant"
                subtitle="Analiza y genera reportes"
                icon="🤖"
                stats={{ value: "3hrs", label: "Ahorro diario" }}
                animationClass="absolute top-24 lg:top-28 xl:top-32 left-0 w-52 lg:w-56 xl:w-64 animate-float-slow"
              />

              <MockupCard
                title="Productividad"
                subtitle="Enfócate en lo importante"
                icon="⚡"
                stats={{ value: "10hrs", label: "Por semana" }}
                animationClass="absolute bottom-16 lg:bottom-20 right-8 lg:right-12 w-48 lg:w-52 xl:w-56 animate-float-delay"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Problema - Grid de Cards */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-dark mb-4">
              Si trabajas en administración,
              <br />
              <span className="text-primary">probablemente...</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📧",
                title: "Respondes los mismos tipos de correos 50 veces",
                description: ""
              },
              {
                icon: "📊",
                title: "Haces reportes que toman horas",
                description: "(pero podrían tomar minutos)"
              },
              {
                icon: "📁",
                title: "Buscas información en 20 archivos diferentes",
                description: ""
              },
              {
                icon: "🔄",
                title: "Terminas cansado haciendo cosas repetitivas",
                description: ""
              }
            ].map((item, index) => (
              <GlassCard key={index} className="py-8 px-10 sm:px-12 mx-4 sm:mx-6" hover={true}>
                <div className="text-5xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-dark mb-2 text-center">{item.title}</h3>
                <p className="text-gray-medium text-center">{item.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl sm:text-3xl text-gray-dark font-bold">
              La IA puede automatizar mucho de eso.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Por Qué Cursos No Funcionan */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-dark mb-4">
              Pero la mayoría de los cursos y tutoriales son:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💻",
                text: "Para perfiles técnicos (Programadores)"
              },
              {
                icon: "📚",
                text: "Con ejemplos que no se parecen a tu trabajo real"
              },
              {
                icon: "❌",
                text: "O prometen mucho y no te enseñan lo práctico"
              }
            ].map((item, index) => (
              <GlassCard key={index} className="p-8 text-center" hover={true}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <p className="text-lg text-gray-dark">{item.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Para Quién Es - 2 Columnas */}
      <section className="bg-gradient-to-b from-white via-[#ace0f9] to-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-dark mb-8 text-center md:text-left">
            Esto te sirve si:
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Lado izquierdo - Lista y párrafos */}
            <div>
              <ul className="space-y-4 mb-8">
                {[
                  'Trabajas en administración, RH, contabilidad o back-office',
                  'Haces tareas repetitivas todos los días',
                  'Quieres trabajar más rápido sin perder calidad',
                  'Has escuchado de IA pero no sabes cómo aplicarla a TU trabajo'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-lg">
                    <span className="text-green-600 mr-3 text-2xl font-bold">✓</span>
                    <span className="text-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Card de perfil - Visible solo en móvil (< 768px) */}
              <div className="md:hidden mb-8">
                <GlassCard className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-3xl">
                      👤
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-gray-dark text-lg">Perfil Ideal</div>
                      <div className="text-gray-medium text-sm">Profesional Administrativo</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Administración', 'RH', 'Contabilidad', 'Back-office', 'Otros'].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-3xl font-bold text-primary">10hrs</div>
                      <div className="text-gray-medium text-sm">Ahorro semanal</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">50%</div>
                      <div className="text-gray-medium text-sm">Menos repetición</div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-dark font-semibold">
                  No necesitas saber de tecnología.
                </p>
                <p className="text-lg text-gray-dark">
                  Solo necesitas estar cansado de hacer lo mismo una y otra vez.
                </p>
              </div>

              <div className="text-center md:text-left">
                <button
                  onClick={openCalendly}
                  className="bg-primary hover:bg-blue-700 text-white font-bold text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                >
                  ¿No encajas? Agenda de todas formas
                </button>
                <p className="text-gray-medium text-sm mt-3">
                  Hablemos para ver si te puedo ayudar
                </p>
              </div>
            </div>

            {/* Lado derecho - Card de perfil visible solo en pantallas >= 768px */}
            <div className="hidden md:flex justify-end">
              <div className="w-full max-w-md">
                <GlassCard className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-3xl">
                      👤
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-gray-dark text-lg">Perfil Ideal</div>
                      <div className="text-gray-medium text-sm">Profesional Administrativo</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Administración', 'RH', 'Contabilidad', 'Back-office', 'Otros'].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-3xl font-bold text-primary">10hrs</div>
                      <div className="text-gray-medium text-sm">Ahorro semanal</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">50%</div>
                      <div className="text-gray-medium text-sm">Menos repetición</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Propuesta de Valor - Timeline 3 Pasos */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-dark mb-4">
              Dame <span className="text-primary">15 minutos</span> y:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                description: "Te muestro cómo automatizar algo que haces todos los días",
                subdescription: "(ejemplo: responder correos en 30 segundos)",
                icon: "⏱️"
              },
              {
                number: "2",
                description: "Me cuentas qué otras tareas te consumen tiempo",
                subdescription: "",
                icon: "💬"
              },
              {
                number: "3",
                description: "Vemos juntos si esto podría cambiar tu forma de trabajar",
                subdescription: "",
                icon: "🎯"
              }
            ].map((step, index) => (
              <GlassCard key={index} className="p-8 text-center relative" hover={true}>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="text-5xl mb-4 mt-4">{step.icon}</div>
                <p className={`${index === 2 ? 'text-xl sm:text-2xl font-bold' : 'text-lg font-semibold'} text-gray-dark mb-2`}>{step.description}</p>
                {step.subdescription && (
                  <p className="text-base text-gray-medium italic">{step.subdescription}</p>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Urgencia - Mejorada */}
      <section className="relative bg-gradient-to-t from-orange-600 via-red-500 to-yellow-500 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-float">
            <div className="text-6xl">⚠️</div>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Solo tengo espacio para las primeras 20 personas esta semana
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Si te interesa, agenda ahora.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <button
            onClick={openCalendly}
            className="bg-primary hover:bg-blue-700 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 mb-4"
          >
            Agenda tus 15 minutos ahora
          </button>
          <p className="text-gray-medium text-base font-bold">
            Te lleva directo a mi calendario - escoge el día y hora que te funcione
          </p>
        </div>
      </section>

      {/* Footer / Credibilidad */}
      <section className="bg-gray-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-lg text-gray-dark">
            Trabajo con IA todos los días y he encontrado formas de automatizar tareas repetitivas.
          </p>
          <p className="text-lg text-gray-dark">
            Quiero compartir esto con gente que realmente lo necesite.
          </p>
          <p className="text-xl font-semibold text-gray-dark">
            Nos vemos del otro lado.
          </p>
          <div className="border-t border-gray-300 mt-8 pt-6">
            <p className="text-base text-gray-medium italic">
              <strong>P.D.</strong> - Si ya usas IA, también quiero hablar contigo.
              <br />
              Cuéntame qué te ha funcionado (y qué no). 👍
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App

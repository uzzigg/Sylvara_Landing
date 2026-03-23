import { useEffect, useRef, useState } from 'react'

export default function IOS() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    nombre: '',
    appleId: ''
  })

  useEffect(() => {
    document.title = 'iOS - Sylvara'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.nombre || !formData.appleId) {
      alert('Por favor completa todos los campos')
      return
    }

    // Construir mailto link
    const subject = encodeURIComponent('Solicitud de Acceso Beta - Sylvara iOS')
    const body = encodeURIComponent(
      `Nombre Completo: ${formData.nombre}\n` +
      `Apple ID Email: ${formData.appleId}\n\n` +
      `Solicito acceso a la beta de Sylvara para iOS a través de TestFlight.\n\n` +
      `Gracias.`
    )
    
    window.location.href = `mailto:sylvarasupport@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 mb-24" aria-labelledby="hero-title">
          <div className="w-full lg:w-1/2 aspect-square rounded-xl bg-primary/5 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" aria-hidden="true"></div>
            <img 
              src="/assets/images/ms_1.jpg"
              alt="iPhone mostrando visualización de datos forestales"
              className="relative z-10 w-full h-full object-cover rounded-xl"
              loading="eager"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">verified</span> 
              Beta Abierta
            </div>
            <h1 id="hero-title" className="text-5xl lg:text-6xl font-black text-primary dark:text-white leading-tight">
              Sylvara para iOS
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Acceso beta a través de la plataforma oficial de Apple. Únete a nuestra red de monitoreo ambiental y 
              colabora con la comunidad científica directamente desde TestFlight.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:bg-primary-dark transition-smooth focus-visible:ring-4 focus-visible:ring-primary/30 active:scale-95"
                aria-label="Solicitar aplicación iOS"
              >
                <span className="material-symbols-outlined" aria-hidden="true">mail</span> 
                Solicitar Aplicación
              </button>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="mb-24" aria-labelledby="process-title">
          <h3 id="process-title" className="text-3xl font-bold text-primary dark:text-white mb-12 text-center">
            Proceso de Acceso
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-primary/5 shadow-sm text-center flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">alternate_email</span>
              </div>
              <h4 className="text-xl font-bold mb-2">1. Registra tu Email</h4>
              <p className="text-slate-500 text-sm">
                Envía tu Apple ID asociado a tu dispositivo iOS.
              </p>
            </article>

            <article className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-primary/5 shadow-sm text-center flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">mail</span>
              </div>
              <h4 className="text-xl font-bold mb-2">2. Recibe la Invitación</h4>
              <p className="text-slate-500 text-sm">
                Busca el correo oficial de TestFlight en tu bandeja.
              </p>
            </article>

            <article className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-primary/5 shadow-sm text-center flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">install_mobile</span>
              </div>
              <h4 className="text-xl font-bold mb-2">3. Instalar Sylvara</h4>
              <p className="text-slate-500 text-sm">
                Acepta la invitación y empieza a explorar.
              </p>
            </article>
          </div>
        </section>

        {/* Request Form */}
        <section 
          ref={formRef}
          className="bg-primary rounded-3xl p-8 md:p-16 text-white mb-24 relative overflow-hidden"
          aria-labelledby="request-title"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" aria-hidden="true"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 id="request-title" className="text-4xl font-bold mb-6">
                Solicitar Acceso Beta
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Completa el formulario para recibir tu invitación oficial. Las plazas son limitadas para 
                garantizar la estabilidad de los datos científicos recolectados durante esta fase.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span className="material-symbols-outlined" aria-hidden="true">security</span>
                Tus datos están protegidos bajo protocolos de investigación.
              </div>
            </div>
            <form 
              className="space-y-4 bg-white/10 p-8 rounded-2xl backdrop-blur-md"
              onSubmit={handleSubmit}
            >
              <div>
                <label 
                  htmlFor="nombre-completo"
                  className="block text-xs font-bold uppercase mb-2 opacity-70"
                >
                  Nombre Completo
                </label>
                <input 
                  id="nombre-completo"
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/40 placeholder:text-white/30 text-white"
                  placeholder="Ej. Ana Silva"
                  aria-required="true"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="apple-id"
                  className="block text-xs font-bold uppercase mb-2 opacity-70"
                >
                  Apple ID Email
                </label>
                <input 
                  id="apple-id"
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/40 placeholder:text-white/30 text-white"
                  placeholder="tu@email.com"
                  aria-required="true"
                  value={formData.appleId}
                  onChange={(e) => setFormData({...formData, appleId: e.target.value})}
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-primary font-bold py-4 rounded-lg hover:bg-slate-100 transition-smooth uppercase tracking-widest text-sm focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Solicitar Acceso
              </button>
            </form>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="mb-32" aria-labelledby="guide-title">
          <div className="max-w-3xl mx-auto">
            <h3 id="guide-title" className="text-3xl font-bold text-primary dark:text-white mb-8">
              Guía de Instalación TestFlight
            </h3>
            <div className="space-y-0 border-l-2 border-primary/20 ml-4">
              {/* Step 1 */}
              <div className="relative pl-12 pb-10">
                <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
                <h4 className="font-bold text-lg mb-2">1. Descarga TestFlight</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Busca "TestFlight" en la App Store de Apple e instálalo en tu dispositivo iOS o iPadOS.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-12 pb-10">
                <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
                <h4 className="font-bold text-lg mb-2">2. Abre el correo de invitación</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Una vez procesada tu solicitud, recibirás un email de "Apple TestFlight". Ábrelo en tu dispositivo.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-12 pb-10">
                <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
                <h4 className="font-bold text-lg mb-2">3. Acepta la Invitación</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Pulsa en "View in TestFlight" o "Start Testing". Esto vinculará Sylvara a tu Apple ID.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-12 pb-10">
                <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
                <h4 className="font-bold text-lg mb-2">4. Instala Sylvara Beta</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Dentro de la app TestFlight, aparecerá Sylvara. Pulsa el botón "Install" para descargar la versión de prueba.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative pl-12">
                <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
                <h4 className="font-bold text-lg mb-2">5. Envía Feedback</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Utiliza la herramienta integrada de TestFlight para reportar errores o sugerir mejoras científicas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom CTA */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-primary/10 p-4 md:p-6 z-40"
        role="complementary"
        aria-label="Acciones rápidas"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-bold text-primary dark:text-slate-100">¿Listo para comenzar?</p>
            <p className="text-xs text-slate-500 uppercase tracking-tighter">
              Únete a la expedición digital de Sylvara
            </p>
          </div>
          <div className="flex-1 sm:flex-none flex gap-3">
            <button 
              className="flex-1 sm:w-auto bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:bg-primary-dark transition-smooth focus-visible:ring-4 focus-visible:ring-primary/30"
              aria-label="Solicitar acceso beta iOS"
            >
              Solicitar Beta
            </button>
            <button 
              className="bg-primary/10 text-primary p-3 rounded-xl hover:bg-primary/20 transition-smooth focus-visible:ring-4 focus-visible:ring-primary/30"
              aria-label="Obtener ayuda y soporte"
            >
              <span className="material-symbols-outlined" aria-hidden="true">help</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

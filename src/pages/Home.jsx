import { useEffect } from 'react'

export default function Home() {
  
  useEffect(() => {
    // Set page title for SEO and accessibility
    document.title = 'Sylvara - Plataforma de Biodiversidad Agroforestal'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-[85vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient z-10" aria-hidden="true"></div>
          <img 
            alt="Vista aérea de bosque brumoso de coníferas"
            className="w-full h-full object-cover"
            src="/assets/images/fondoproject.jpg"
            loading="eager"
            decoding="async"
          />
        </div>
        
        <div className="relative z-20 text-center px-4">
          <h1 
            id="hero-title"
            className="font-serif italic text-white text-7xl md:text-9xl mb-6 drop-shadow-lg"
          >
            Sylvara
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-light tracking-widest uppercase">
            Plataforma de biodiversidad agroforestal
          </p>
          <div className="mt-12" aria-hidden="true">
            <span className="material-symbols-outlined text-white animate-bounce text-4xl">
              keyboard_double_arrow_down
            </span>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-primary rounded-xl p-8 shadow-xl border border-primary/5 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <span className="text-primary dark:text-white/60 text-sm font-bold uppercase tracking-widest mb-2">
             indices primarios
            </span>
            <span className="text-4xl font-bold text-primary dark:text-white">
              4 Indices de biodiversidad
            </span>
            <p className="text-slate-500 dark:text-white/40 mt-2 text-sm">
              Monitoreo exhaustivo en tiempo real
            </p>
          </div>

          <div className="bg-white dark:bg-primary rounded-xl p-8 shadow-xl border border-primary/5 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <span className="text-primary dark:text-white/60 text-sm font-bold uppercase tracking-widest mb-2">
              Precisión
            </span>
            <span className="text-4xl font-bold text-primary dark:text-white">
              Calculos Automaticos
            </span>
            <p className="text-slate-500 dark:text-white/40 mt-2 text-sm">
              Calculos automaticos de indices
            </p>
          </div>

          <div className="bg-white dark:bg-primary rounded-xl p-8 shadow-xl border border-primary/5 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <span className="text-primary dark:text-white/60 text-sm font-bold uppercase tracking-widest mb-2">
              Capacidad
            </span>
            <span className="text-4xl font-bold text-primary dark:text-white">
              Proyectos Ilimitados
            </span>
            <p className="text-slate-500 dark:text-white/40 mt-2 text-sm">
              Realiza todos los proyectos que necesites
            </p>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <section className="max-w-7xl mx-auto px-6 py-24" aria-labelledby="problem-title">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Diagnóstico Forestal
            </span>
            <h2 
              id="problem-title"
              className="text-4xl md:text-5xl font-serif italic text-primary dark:text-white mb-8"
            >
              El Problema: La ineficiencia del papel
            </h2>
            <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                La gestión tradicional en campo se enfrenta a un cuello de botella crítico: el registro manual. 
                La pérdida de libretas, errores de transcripción y el retraso de semanas entre la toma de datos 
                y el análisis frenan el progreso ambiental.
              </p>
              <p>
                Sylvara elimina este puente obsoleto, transformando el dispositivo móvil en un laboratorio de 
                datos instantáneo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/5 dark:bg-white/5 rounded-2xl p-6 border border-primary/10 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary dark:text-white mb-4 text-3xl" aria-hidden="true">
                error
              </span>
              <h4 className="font-bold mb-2">Datos Perdidos</h4>
              <p className="text-sm opacity-70">
                El 15% de los registros manuales sufren degradación o pérdida física.
              </p>
            </div>

            <div className="bg-primary/5 dark:bg-white/5 rounded-2xl p-6 border border-primary/10 mt-8 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary dark:text-white mb-4 text-3xl" aria-hidden="true">
                schedule
              </span>
              <h4 className="font-bold mb-2">Lentitud Operativa</h4>
              <p className="text-sm opacity-70">
                Semanas de espera para la digitalización y análisis estadístico.
              </p>
            </div>

            <div className="bg-primary/5 dark:bg-white/5 rounded-2xl p-6 border border-primary/10 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary dark:text-white mb-4 text-3xl" aria-hidden="true">
                psychiatry
              </span>
              <h4 className="font-bold mb-2">Impacto Ecológico</h4>
              <p className="text-sm opacity-70">
                Uso excesivo de recursos físicos en proyectos de conservación.
              </p>
            </div>

            <div className="bg-primary/5 dark:bg-white/5 rounded-2xl p-6 border border-primary/10 mt-8 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary dark:text-white mb-4 text-3xl" aria-hidden="true">
                analytics
              </span>
              <h4 className="font-bold mb-2">Falta de Visión</h4>
              <p className="text-sm opacity-70">
                Dificultad para comparar tendencias históricas en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-primary/5 dark:bg-white/5 py-24" aria-labelledby="features-title">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-primary dark:text-white">
              Solución Digital Integrada
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white dark:bg-background-dark p-10 rounded-2xl border border-primary/10 hover:shadow-2xl transition-medium">
              <div className="size-14 bg-primary/10 dark:bg-white/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary dark:text-white text-3xl" aria-hidden="true">
                  hub
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">Centralización</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Toda su red de proyectos agroforestales en un panel unificado. Gestión de usuarios y niveles de acceso.
              </p>
            </article>

            <article className="bg-white dark:bg-background-dark p-10 rounded-2xl border border-primary/10 hover:shadow-2xl transition-medium">
              <div className="size-14 bg-primary/10 dark:bg-white/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary dark:text-white text-3xl" aria-hidden="true">
                  functions
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">Cálculo Automático</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Algoritmos científicos pre-cargados que calculan índices de biodiversidad al instante tras el ingreso.
              </p>
            </article>

            <article className="bg-white dark:bg-background-dark p-10 rounded-2xl border border-primary/10 hover:shadow-2xl transition-medium">
              <div className="size-14 bg-primary/10 dark:bg-white/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary dark:text-white text-3xl" aria-hidden="true">
                  insights
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">Visualización Inteligente</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Reportes dinámicos con gráficos interactivos listos para presentaciones corporativas y científicas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Phone Mockups Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden" aria-labelledby="mockup-title">
        <div className="text-center mb-20">
          <h2 id="mockup-title" className="text-4xl md:text-5xl font-serif italic text-primary dark:text-white">
            La potencia de Sylvara en su mano
          </h2>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px] gap-8">
          {/* Left Mockup - Hidden on mobile */}
          <div 
            className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden transform -rotate-12 translate-y-12 hidden lg:block"
            aria-hidden="true"
          >
            <div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center">
              <div className="w-20 h-4 bg-slate-900 rounded-b-xl"></div>
            </div>
            <div className="p-4 pt-10 h-full bg-background-light">
              <div className="w-full h-32 bg-primary rounded-xl mb-4 p-4 text-white">
                <p className="text-[10px] uppercase font-bold opacity-60">Proyecto Actual</p>
                <p className="text-sm font-bold">Reserva El Cedro</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-white rounded-lg border border-primary/10 p-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">monitoring</span>
                  <div className="w-full h-1 bg-slate-100 rounded"></div>
                </div>
                <div className="h-12 bg-white rounded-lg border border-primary/10 p-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">monitoring</span>
                  <div className="w-full h-1 bg-slate-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Mockup - Main focus */}
          <div className="w-72 h-[550px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative z-20 overflow-hidden">
            <div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center">
              <div className="w-24 h-4 bg-slate-900 rounded-b-xl"></div>
            </div>
            <div className="p-6 pt-12 h-full bg-background-light">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">forest</span>
                </div>
                <h4 className="font-bold text-primary">Dashboard</h4>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white p-3 rounded-xl border border-primary/10">
                  <p className="text-[10px] font-bold opacity-50 uppercase">Biodiversidad</p>
                  <p className="text-xl font-bold text-primary">94.2%</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-primary/10">
                  <p className="text-[10px] font-bold opacity-50 uppercase">Humedad</p>
                  <p className="text-xl font-bold text-primary">68%</p>
                </div>
              </div>
              <div className="bg-primary/5 h-48 rounded-2xl flex flex-col items-center justify-center p-4 border border-primary/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">pie_chart</span>
                <p className="text-xs font-medium text-center opacity-70">
                  Distribución de especies registradas hoy
                </p>
              </div>
            </div>
          </div>

          {/* Right Mockup - Hidden on mobile */}
          <div 
            className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden transform rotate-12 translate-y-12 hidden lg:block"
            aria-hidden="true"
          >
            <div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center">
              <div className="w-20 h-4 bg-slate-900 rounded-b-xl"></div>
            </div>
            <div className="p-4 pt-10 h-full bg-background-light">
              <h5 className="text-xs font-bold mb-4">Reportes Generados</h5>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">picture_as_pdf</span>
                    <span className="text-[10px] font-medium">Informe_Q4.pdf</span>
                  </div>
                  <span className="material-symbols-outlined text-xs">download</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <span className="text-[10px] font-medium">Data_Export.csv</span>
                  </div>
                  <span className="material-symbols-outlined text-xs">download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/60 py-20 px-6" role="contentinfo">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 bg-white/10 rounded flex items-center justify-center text-white">
                <span className="material-symbols-outlined" aria-hidden="true">forest</span>
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight">Sylvara</h2>
            </div>
            <p className="max-w-md">
              Liderando la digitalización de la agroforestería para un futuro más verde y eficiente.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Plataforma</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Modo de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Seguridad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-sm text-center">
          © 2024 Sylvara Plataforma Agroforestal. Todos los derechos reservados.
        </div>
      </footer>


    </>
  )
}

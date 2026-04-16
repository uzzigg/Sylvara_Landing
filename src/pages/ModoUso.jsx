import { useEffect } from 'react'

export default function ModoUso() {
  
  useEffect(() => {
    document.title = 'Modo de Uso - Sylvara'
  }, [])

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Guía de Implementación
            </span>
            <h1 className="text-5xl font-bold mt-2 mb-4 tracking-tight text-primary dark:text-white">
              Protocolo de Operación
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Integre la inteligencia ecológica de Sylvara en su reserva forestal siguiendo nuestro 
              flujo de trabajo científico de 6 fases.
            </p>
          </div>
        </div>
      </header>

      {/* Timeline / Steps Container */}
      <div className="space-y-24 relative">
        {/* Timeline Vertical Line */}
        <div 
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -z-10 hidden md:block" 
          aria-hidden="true"
        ></div>

        {/* Step 1: Account Creation */}
        <section aria-labelledby="step-1-title">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2 md:pr-12 md:text-right">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Paso 01
              </span>
              <h2 id="step-1-title" className="text-3xl font-bold mt-4 mb-4">
                Crea tu Cuenta
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Regístrate para comenzar a monitorear la biodiversidad en tu área de interés.
              </p>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-primary/10 shadow-sm text-left">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label 
                      htmlFor="nombre"
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Nombre Completo
                    </label>
                    <input 
                      id="nombre"
                      type="text"
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary py-3 px-4"
                      placeholder="Tu nombre"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Correo Electrónico
                    </label>
                    <input 
                      id="email"
                      type="email"
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary py-3 px-4"
                      placeholder="tu@correo.com"
                      aria-required="true"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 rounded-lg mt-4 hover:bg-primary-dark transition-smooth focus-visible:ring-4 focus-visible:ring-primary/30"
                  >
                    Crear Cuenta
                  </button>
                </form>
              </div>
            </div>
            
            <div 
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold relative z-10 ring-8 ring-background-light dark:ring-background-dark"
              aria-label="Paso 1"
            >
              1
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-primary/5 border border-primary/10">
                <img 
                  src="/assets/images/ms_5_rg.jpg"
                  alt="Formulario de creación de cuenta en Sylvara"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Project Creation */}
        <section aria-labelledby="step-2-title">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2 md:pl-12">
              <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
                Paso 02
              </span>
              <h2 id="step-2-title" className="text-3xl font-bold mt-4 mb-4">
                Crea Proyectos
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Analice los diferentes proyectos de monitoreo que posea, gestionándolos de manera organizada 
                y eficiente dentro de la plataforma Sylvara.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">check_circle</span>
                  <span>Gestión multicapa de territorios</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">check_circle</span>
                  <span>Estadísticas comparativas entre áreas</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">check_circle</span>
                  <span>Métricas de biodiversidad en tiempo real</span>
                </div>
              </div>
            </div>
            
            <div 
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold relative z-10 ring-8 ring-background-light dark:ring-background-dark"
              aria-label="Paso 2"
            >
              2
            </div>
            
            <div className="w-full md:w-1/2 space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl" aria-hidden="true">forest</span>
                    <div>
                      <p className="font-bold text-lg">Reserva El Cedro</p>
                      <p className="text-white/70 text-xs">Activo · 450 ha</p>
                    </div>
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">Principal</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="text-2xl font-bold">342</p>
                    <p className="text-[10px] text-white/70 uppercase">Especies</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-[10px] text-white/70 uppercase">Zonas</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="text-2xl font-bold">H'=3.42</p>
                    <p className="text-[10px] text-white/70 uppercase">Shannon</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-primary/10 shadow-sm hover:shadow-lg transition-shadow flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">nature_people</span>
                <div className="flex-1">
                  <p className="font-bold">Bosque Secundario Norte</p>
                  <p className="text-slate-500 text-xs">En restauración · 180 ha</p>
                </div>
                <span className="material-symbols-outlined text-slate-400" aria-hidden="true">chevron_right</span>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Plot Definition */}
        <section aria-labelledby="step-3-title">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2 md:pr-12 md:text-right">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Paso 03
              </span>
              <h2 id="step-3-title" className="text-3xl font-bold mt-4 mb-4">
                Definición de Parcelas
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Divida el proyecto en diferentes parcelas territoriales personalizadas según las necesidades de su estudio, 
                definiendo áreas específicas en metros cuadrados o hectáreas.
              </p>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10 shadow-sm text-left">
                <p className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">Ejemplos de Parcelas</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="size-3 rounded-full bg-primary"></div>
                      <span className="text-sm font-bold">Parcela Norte</span>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-mono">200 m²/ha</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3">
                      <div className="size-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-bold">Parcela Central</span>
                    </div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-mono">550 m²/ha</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-3">
                      <div className="size-3 rounded-full bg-orange-500"></div>
                      <span className="text-sm font-bold">Parcela Sur</span>
                    </div>
                    <span className="text-sm text-orange-600 dark:text-orange-400 font-mono">228.5 m²/ha</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold relative z-10 ring-8 ring-background-light dark:ring-background-dark"
              aria-label="Paso 3"
            >
              3
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-primary/20 border border-primary/10 p-6 flex flex-col gap-3">
                <div className="flex gap-3 flex-1">
                  <div className="flex-1 rounded-xl bg-primary text-white p-4 flex flex-col justify-between hover:shadow-lg transition-shadow">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">crop_square</span>
                    <div>
                      <p className="font-bold text-sm">Parcela 1</p>
                      <p className="text-[10px] text-white/70">200 m²/ha</p>
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 flex flex-col justify-between">
                    <span className="material-symbols-outlined text-2xl text-blue-600" aria-hidden="true">grid_on</span>
                    <div>
                      <p className="font-bold text-sm text-blue-900 dark:text-blue-200">Parcela 2</p>
                      <p className="text-[10px] text-blue-600 dark:text-blue-400">550 m²/ha</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 flex-1">
                  <div className="flex-1 rounded-xl border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-4 flex flex-col justify-between">
                    <span className="material-symbols-outlined text-2xl text-orange-600" aria-hidden="true">view_module</span>
                    <div>
                      <p className="font-bold text-sm text-orange-900 dark:text-orange-200">Parcela 3</p>
                      <p className="text-[10px] text-orange-600 dark:text-orange-400">228.5 m²/ha</p>
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl bg-slate-100 dark:bg-slate-700 p-4 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600">
                    <span className="material-symbols-outlined text-4xl text-slate-400" aria-hidden="true">add</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Biological Inventory */}
        <section aria-labelledby="step-4-title">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
            <div className="w-full md:w-1/2 md:pl-12">
              <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
                Paso 04
              </span>
              <h2 id="step-4-title" className="text-3xl font-bold mt-4 mb-4">
                Inventario Biológico
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Catalogue especies de flora y fauna en base a las zonas de estudio de su proyecto, manteniendo el orden taxonómico 
                adecuado y registros georreferenciados vinculados a cada parcela definida.
              </p>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10 shadow-sm">
                <p className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">Registro Manual de Especies</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">add_circle</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Ingrese especies por taxonomía</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">location_on</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Vincule con zona de estudio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">photo_camera</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Anexe la foto de la especie</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold relative z-10 ring-8 ring-background-light dark:ring-background-dark"
              aria-label="Paso 4"
            >
              4
            </div>
            
            <div className="w-full md:w-1/2 space-y-3">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="size-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600" aria-hidden="true">psychiatry</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold"><em>Swietenia macrophylla</em></p>
                  <p className="text-xs text-slate-500">Caoba - Zona de Estudio 1</p>
                </div>
                <span className="material-symbols-outlined text-green-500" aria-hidden="true">verified</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600" aria-hidden="true">eco</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold"><em>Hevea brasiliensis</em></p>
                  <p className="text-xs text-slate-500">Caucho - Zona de Estudio 2</p>
                </div>
                <span className="material-symbols-outlined text-blue-500" aria-hidden="true">verified</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm flex items-center gap-4 opacity-60">
                <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-400" aria-hidden="true">spa</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold"><em>Bertholletia excelsa</em></p>
                  <p className="text-xs text-slate-500">Castaña - Zona de Estudio 1</p>
                </div>
                <span className="material-symbols-outlined text-slate-300" aria-hidden="true">pending</span>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5: Biodiversity Indices Visualization */}
        <section aria-labelledby="step-5-title">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
            <div className="w-full md:w-1/2 md:pl-12">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Paso 05
              </span>
              <h2 id="step-5-title" className="text-3xl font-bold mt-4 mb-4">
                Análisis de Índices
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Visualice en tiempo real los índices de biodiversidad calculados automáticamente: Shannon-Wiener, 
                Simpson, Margalef y Pielou para evaluación ecológica integral.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5" aria-hidden="true">analytics</span>
                  <div>
                    <p className="font-bold">Shannon-Wiener (H')</p>
                    <p className="text-xs text-slate-500">Diversidad considerando abundancia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5" aria-hidden="true">donut_small</span>
                  <div>
                    <p className="font-bold">Simpson (D)</p>
                    <p className="text-xs text-slate-500">Probabilidad de dominancia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5" aria-hidden="true">trending_up</span>
                  <div>
                    <p className="font-bold">Margalef (DMg)</p>
                    <p className="text-xs text-slate-500">Riqueza específica por muestra</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5" aria-hidden="true">balance</span>
                  <div>
                    <p className="font-bold">Pielou (J')</p>
                    <p className="text-xs text-slate-500">Equitatividad de la comunidad</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold relative z-10 ring-8 ring-background-light dark:ring-background-dark"
              aria-label="Paso 5"
            >
              5
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {/* Shannon-Wiener Card */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase">Shannon-Wiener</span>
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">show_chart</span>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">3.42</p>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-green-600 font-bold">+0.18</span>
                  <span className="text-slate-500">vs. mes anterior</span>
                </div>
                <div className="h-1 w-full bg-slate-100 dark:bg-slate-700 rounded-full mt-3">
                  <div className="bg-gradient-to-r from-primary to-accent h-full w-[85%] rounded-full"></div>
                </div>
              </div>

              {/* Simpson Card */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase">Simpson</span>
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">pie_chart</span>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">0.92</p>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-green-600 font-bold">+0.04</span>
                  <span className="text-slate-500">Índice alto</span>
                </div>
                <div className="mt-3 flex gap-1">
                  <div className="flex-1 h-1 bg-primary rounded-full"></div>
                  <div className="flex-1 h-1 bg-primary rounded-full"></div>
                  <div className="flex-1 h-1 bg-primary rounded-full"></div>
                  <div className="flex-1 h-1 bg-primary/30 rounded-full"></div>
                  <div className="flex-1 h-1 bg-primary/30 rounded-full"></div>
                </div>
              </div>

              {/* Margalef Card */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase">Margalef</span>
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">bar_chart</span>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">8.76</p>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-blue-600 font-bold">Estable</span>
                  <span className="text-slate-500">Riqueza alta</span>
                </div>
                <div className="h-12 w-full flex items-end gap-1 mt-2" aria-label="Evolución temporal Margalef">
                  <div className="flex-1 bg-primary/20 h-[45%] rounded-sm"></div>
                  <div className="flex-1 bg-primary/30 h-[60%] rounded-sm"></div>
                  <div className="flex-1 bg-primary/40 h-[55%] rounded-sm"></div>
                  <div className="flex-1 bg-primary/60 h-[75%] rounded-sm"></div>
                  <div className="flex-1 bg-primary h-[90%] rounded-sm"></div>
                </div>
              </div>

              {/* Pielou Card */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase">Pielou</span>
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">balance</span>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">0.87</p>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-green-600 font-bold">Óptimo</span>
                  <span className="text-slate-500">Equit. alta</span>
                </div>
                <div className="mt-3 flex items-center justify-center">
                  <div className="relative size-10">
                    <svg className="transform -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-slate-200 dark:stroke-slate-700"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-primary"
                        strokeWidth="3"
                        strokeDasharray="87, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 6: PDF Export */}
        <section aria-labelledby="step-6-title">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2 md:pr-12 md:text-right">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Paso 06
              </span>
              <h2 id="step-6-title" className="text-3xl font-bold mt-4 mb-4">
                Exportación de Métricas
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Genere reportes completos en formato PDF con todas las métricas de biodiversidad, 
                listados de especies, mapas de zonificación y análisis estadísticos de su proyecto.
              </p>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10 shadow-sm text-left">
                <p className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">Contenido del Reporte</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">analytics</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Índices de biodiversidad completos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">nature_people</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Inventario taxonómico detallado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">insert_chart</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Gráficos y análisis estadísticos</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold relative z-10 ring-8 ring-background-light dark:ring-background-dark"
              aria-label="Paso 6"
            >
              6
            </div>
            
            <div className="w-full md:w-1/2 space-y-4">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-100 dark:border-red-900 p-8 flex flex-col items-center justify-center">
                <div className="size-24 rounded-2xl bg-red-500 text-white flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-5xl" aria-hidden="true">picture_as_pdf</span>
                </div>
                <p className="text-center font-bold text-lg mb-2">Reporte_Sylvara_2026.pdf</p>
                <p className="text-center text-sm text-slate-500 dark:text-slate-400">45 páginas · 12.4 MB</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-primary/10">
                  <p className="font-bold text-primary">342</p>
                  <p className="text-slate-500">Registros</p>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-primary/10">
                  <p className="font-bold text-primary">12</p>
                  <p className="text-slate-500">Gráficos</p>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-primary/10">
                  <p className="font-bold text-primary">8</p>
                  <p className="text-slate-500">Mapas</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </main>
  )
}

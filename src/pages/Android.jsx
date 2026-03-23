import { useEffect } from 'react'

export default function Android() {
  useEffect(() => {
    document.title = 'Android - Sylvara'
  }, [])

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-12 lg:px-10">
        {/* Hero Section */}
        <section className="mb-12" aria-labelledby="hero-title">
          <div className="relative h-[320px] w-full overflow-hidden rounded-xl bg-primary shadow-2xl">
            <div className="absolute inset-0 opacity-40">
              <img 
                src="/assets/images/fondoauth.png"
                alt="Vista del dosel forestal denso verde desde abajo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 lg:p-12">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">android</span> 
                Investigación Móvil
              </div>
              <h1 id="hero-title" className="text-4xl font-bold text-white lg:text-5xl">
                Sylvara para Android
              </h1>
              <p className="mt-4 max-w-lg text-lg text-white/80">
                Despliegue el poder de la investigación botánica de campo directamente en su dispositivo móvil.
              </p>
            </div>
          </div>
        </section>

        {/* Download Card */}
        <section className="mb-16" aria-labelledby="download-title">
          <div className="flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm dark:bg-slate-900/50 md:flex-row">
            <div className="relative aspect-video w-full bg-primary/5 md:w-1/2 lg:w-2/5">
              <img 
                src="/assets/images/ms_6.jpg"
                alt="Smartphone mostrando la aplicación Sylvara"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 id="download-title" className="text-2xl font-bold text-primary dark:text-white">
                    Sylvara v1.0 Producción
                  </h2>
                  <p className="mt-1 text-slate-500">
                    Lanzamiento oficial del APK para dispositivos Android.
                  </p>
                </div>
                <div className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-bold text-primary dark:bg-primary/30 dark:text-white">
                  Android 8.0+
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-6 dark:border-white/5 sm:flex-row sm:items-center">
                <button 
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95 focus-visible:ring-4 focus-visible:ring-primary/30"
                  aria-label="Descargar archivo APK de Sylvara versión 1.0"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">download</span>
                  Descargar APK
                </button>
                <div className="text-sm text-slate-500">
                  <span className="block font-medium text-slate-900 dark:text-slate-200">
                    Tamaño del archivo: 48.2 MB
                  </span>
                  <span>MD5: 8f2b3c...e1a0</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Table */}
        <section className="mb-16" aria-labelledby="requirements-title">
          <h3 
            id="requirements-title"
            className="mb-6 text-xl font-bold text-primary dark:text-white flex items-center gap-2"
          >
            <span className="material-symbols-outlined" aria-hidden="true">settings_suggest</span>
            Requisitos del Sistema
          </h3>
          <div className="overflow-hidden rounded-xl border border-primary/10 bg-white dark:bg-slate-900/50">
            <table className="w-full text-left">
              <thead className="bg-primary/5 text-xs font-bold uppercase tracking-wider text-primary dark:text-slate-400">
                <tr>
                  <th scope="col" className="px-6 py-4">Especificación</th>
                  <th scope="col" className="px-6 py-4">Mínimo</th>
                  <th scope="col" className="px-6 py-4">Recomendado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                <tr>
                  <th scope="row" className="px-6 py-4 font-medium">Sistema Operativo</th>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Android 8.0 (Oreo)</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Android 12.0+</td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-4 font-medium">Memoria (RAM)</th>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">4 GB</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">8 GB+</td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-4 font-medium">Espacio de Almacenamiento</th>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">200 MB</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">1 GB (Datos sin conexión)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="mb-24" aria-labelledby="installation-title">
          <h3 id="installation-title" className="mb-8 text-2xl font-bold text-primary dark:text-white">
            Guía de Instalación
          </h3>
          <div className="space-y-0">
            {/* Step 1 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <span className="material-symbols-outlined" aria-hidden="true">download</span>
                </div>
                <div className="w-px grow bg-slate-200 group-last:hidden dark:bg-white/10" aria-hidden="true"></div>
              </div>
              <div className="pb-10 pt-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  1. Descargar APK
                </h4>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  Inicie la descarga haciendo clic en el botón de arriba. El paquete está firmado criptográficamente para mayor seguridad.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/30 dark:text-white">
                  <span className="material-symbols-outlined" aria-hidden="true">security</span>
                </div>
                <div className="w-px grow bg-slate-200 group-last:hidden dark:bg-white/10" aria-hidden="true"></div>
              </div>
              <div className="pb-10 pt-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  2. Habilitar Permisos
                </h4>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  Navegue a Ajustes &gt; Seguridad y habilite "Instalar desde fuentes desconocidas" para su navegador.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/30 dark:text-white">
                  <span className="material-symbols-outlined" aria-hidden="true">file_open</span>
                </div>
                <div className="w-px grow bg-slate-200 group-last:hidden dark:bg-white/10" aria-hidden="true"></div>
              </div>
              <div className="pb-10 pt-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  3. Abrir Archivo
                </h4>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  Acceda a la carpeta de Descargas de su dispositivo y toque en 'sylvara_v1.0.apk' para iniciar la extracción.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/30 dark:text-white">
                  <span className="material-symbols-outlined" aria-hidden="true">install_mobile</span>
                </div>
                <div className="w-px grow bg-slate-200 group-last:hidden dark:bg-white/10" aria-hidden="true"></div>
              </div>
              <div className="pb-10 pt-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  4. Instalar Aplicación
                </h4>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  Siga las indicaciones estándar del instalador de paquetes de Android y acepte los permisos necesarios para datos científicos.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/30 dark:text-white">
                  <span className="material-symbols-outlined" aria-hidden="true">forest</span>
                </div>
                <div className="w-px grow bg-slate-200 group-last:hidden dark:bg-white/10" aria-hidden="true"></div>
              </div>
              <div className="pb-10 pt-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  5. Listo para Explorar
                </h4>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  Lance Sylvara e inicie sesión con sus credenciales de investigador para comenzar su viaje de campo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom CTA */}
      <div 
        className="sticky bottom-0 z-40 w-full border-t border-primary/10 bg-white/90 p-4 backdrop-blur-md dark:bg-slate-900/90 dark:border-white/5 lg:p-6"
        role="complementary"
        aria-label="Acciones rápidas"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-primary dark:text-white">
              ¿Va al campo?
            </p>
            <p className="text-xs text-slate-500">
              Sylvara Android v1.0 es estable y está listo.
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-4 sm:w-auto">
            <button 
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-smooth sm:flex-none focus-visible:ring-4 focus-visible:ring-primary/30"
              aria-label="Obtener archivo APK ahora"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">download</span>
              Obtener APK Ahora
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary px-6 py-12 text-white/60" role="contentinfo">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl text-white" aria-hidden="true">forest</span>
              <span className="text-xl font-bold tracking-tight text-white">Sylvara</span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Acceso API</a>
            </div>
            <p className="text-xs">© 2024 Sylvara Científica. Solo para uso de investigación ecológica.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

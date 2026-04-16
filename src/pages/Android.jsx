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

        {/* Email Notice Card */}
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
              <div className="mt-6 border-t border-slate-100 pt-6 dark:border-white/5">
                <div className="flex items-start gap-4 rounded-xl bg-primary/5 border border-primary/20 p-5">
                  <span className="material-symbols-outlined text-primary text-3xl mt-0.5 shrink-0" aria-hidden="true">mark_email_read</span>
                  <div>
                    <p className="font-bold text-primary dark:text-white text-base">
                      El APK se enviará por correo electrónico
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Una vez registrado, recibirá el archivo de instalación directamente en su email. Siga los pasos de abajo para instalarlo correctamente.
                    </p>
                  </div>
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
                  <span className="material-symbols-outlined" aria-hidden="true">mark_email_read</span>
                </div>
                <div className="w-px grow bg-slate-200 group-last:hidden dark:bg-white/10" aria-hidden="true"></div>
              </div>
              <div className="pb-10 pt-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  1. Recibir APK por Email
                </h4>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  El archivo APK le será enviado directamente a su correo electrónico. Revise su bandeja de entrada y descargue el archivo adjunto.
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

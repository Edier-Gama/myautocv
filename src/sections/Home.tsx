import HeaaderServer from '@/components/HeaderServer'
import AuthButtonServer from '@/components/AuthButtonServer'

function Home (): any {
  return (
    <section className="max-w-7xl m-auto">
      <HeaaderServer/>
      <main className="">
        <section className="relative max-w-96 m-auto md:max-w-4xl flex flex-col justify-center p-5 mt-10">
          <div className='z-10 flex flex-col justify-center items-center'>

            <section className='home'>
              <h1 className="max-w-4xl text-3xl font-semibold text-left md:text-6xl">haz un CV gratis anti ATS usando Inteligencia Artificial</h1>
              <p className="mt-10 text-xl text-left max-w-3xl md:text-2xl">
                Crea y descarga en PDF tu CV con <b>ayuda de Inteligencia Artificial </b>
                o guarda el CV en tu perfil iniciando sesión
              </p>
            </section>
            <section className='relative max-w-96 md:max-w-4xl flex flex-col justify-centers p-5'>
              <div className=''>
                <AuthButtonServer/>
              </div>
            </section>
          </div>
        </section>
      </main>
    </section>
  )
}
export { Home }

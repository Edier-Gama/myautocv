import HeaaderServer from '@/components/HeaderServer'
import AuthButtonServer from '@/components/AuthButtonServer'

function Home (): any {
  return (
    <section className="max-w-7xl m-auto">
      <HeaaderServer/>
      <main className="">
        <section className="animate-in fade-in zoom-in duration-500 m-3 min-w-96 flex relative top-20 max-w-7xl flex-wrap mt-10 justify-center">
          <div className='z-10 flex flex-col justify-center items-center'>

            <section className='m-0 w-96 md:w-full home'>
              <h1 className="max-w-4xl text-3xl font-semibold text-left md:text-6xl">haz un CV gratis anti ATS usando Inteligencia Artificial</h1>
              <p className="mt-10 text-xl text-left max-w-3xl md:text-2xl">
                Crea y descarga en PDF tu CV con <b>ayuda de Inteligencia Artificial </b>
                o guarda el CV en tu perfil iniciando sesión
              </p>
            </section>
            <section className='flex flex-wrap mt-10 justify-left m-0 w-96 md:w-full'>
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

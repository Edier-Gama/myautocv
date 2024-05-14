import HeaaderServer from '@/components/HeaderServer'
import AuthButtonServer from '@/components/AuthButtonServer'

function Home (): any {
  return (
    <section className="max-w-7xl m-auto">
      <HeaaderServer/>
      <main className="">
        <section className="relative max-w-96 m-auto md:max-w-4xl flex flex-col justify-center p-5 mt-32">
          <div className='z-10 flex flex-col justify-center items-center'>
           <section className='home'>
              <h1 className="max-w-4xl text-3xl font-semibold text-left md:text-6xl">Welcome to MyAutoCV.</h1>
              <h1 className="max-w-4xl text-3xl font-semibold text-left md:text-6xl">Create your resume in 10 minutes</h1>
              <p className="mt-10 text-xl text-left max-w-3xl md:text-2xl">
              Craft your resume easily. <b>Download it for free as a PDF</b> or securely save it in your profile by logging into the app
              </p>
            </section>
          </div>
          <div className='flex justify-start max-w-4xl mt-10'>
            <AuthButtonServer/>
          </div>
          <div className='relative top-20 rounded-lg'>
           <h1 className="max-w-4xl text-3xl font-semibold text-left md:text-3xl">With a minimalistic style ...</h1>
           <img className='relative mt-5 rounded-lg' src='/cv.jpg' alt='CV example' width={800}/>
          </div>
        </section>
      </main>
    </section>
  )
}
export { Home }

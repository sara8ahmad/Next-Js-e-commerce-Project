import React from 'react'

const Categories = () => {
  return (

    <div className="container my-24 mx-auto md:px-6">
 
    <section className="mb-32">
  
      <h2 className="mb-12 text-center text-3xl font-bold tracking-wider">
       Our <span className='text-red-300 font-serif'>Categories </span>
      </h2>
  
      <div className="grid gap-6 lg:grid-cols-3">
        <div
          className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init data-te-ripple-color="dark">
          <img src="https://i.pinimg.com/originals/ba/6a/27/ba6a279efd139aa621acc1af9363594f.jpg"
            className="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
              <div className="flex h-full items-end justify-start">
                <h5 className="m-6 text-lg font-bold text-white">
                  Women's
                </h5>
              </div>
            </div>
            <div>
              <div
                className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
              </div>
            </div>
          </a>
        </div>
  
        <div
          className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init data-te-ripple-color="dark">
          <img src="https://i.pinimg.com/originals/31/41/76/314176b1cbb58c591fa0bcaf27c34003.jpg"
            className="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
              <div className="flex h-full items-end justify-start">
                <h5 className="m-6 text-lg font-bold text-white">Acsessories</h5>
              </div>
            </div>
            <div>
              <div
                className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
              </div>
            </div>
          </a>
        </div>
  
        <div
          className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init data-te-ripple-color="dark">
          <img src="https://stylevane.com/wp-content/uploads/2020/04/mens-clothes-70776.jpg"
            className="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
              <div className="flex h-full items-end justify-start">
                <h5 className="m-6 text-lg font-bold text-white">Men's</h5>
              </div>
            </div>
            <div>
              <div
                className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
              </div>
            </div>
          </a>
        </div>
  
        
      </div>
    </section>
    
  </div>
  )
}

export default Categories
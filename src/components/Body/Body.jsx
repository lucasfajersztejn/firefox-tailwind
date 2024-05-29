import React from 'react'

function Body({ img, order }) {
  return (
    <>
      {order === 1 ? (
        <section className='container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0'>
          <h1 className='sm:text-4xl text-3xl mb-4 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
          <p className='mb-8 leading-relaxed text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed feugiat massa. Sed vitae eleifend tortor. In eleifend erat non eleifend viverra. Fusce porttitor nisl ac erat ornare, non mollis nisl finibus. Class aptent taciti sociosqu ad.</p>
        </div>

        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img src={img} alt='' className='object-cover object-center rounded shadow-xl'/>
        </div>
        </section>
      ) : (
        <section className='container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 md:pl-16 flex flex-col items-start text-left mb-16 md:mb-0'>
            <h1 className='sm:text-4xl text-3xl mb-4 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
            <p className='mb-8 leading-relaxed text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed feugiat massa. Sed vitae eleifend tortor. In eleifend erat non eleifend viverra. Fusce porttitor nisl ac erat ornare, non mollis nisl finibus. Class aptent taciti sociosqu ad.</p>
          </div>

          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:order-first'>
            <img src={img} alt='' className='object-cover object-center rounded'/>
          </div>
        </section>
      )}
    </>   
  )
}

export default Body;
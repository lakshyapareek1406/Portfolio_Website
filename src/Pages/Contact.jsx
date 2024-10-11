import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 py-10 px-5' id="contact" data-aos="fade-in" data-aos-duration='1600'>

      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight text-white'>Contact Me</h2>
      </div>

      <div className='max-w-[800px] mx-auto mt-8'>
        <div className='bg-[#161616] rounded-xl'>
          <div className='p-6 sm:p-10'>
            <form action='https://getform.io/f/bpjmgrob' method='POST'>
              <div className='grid grid-cols-1 gap-y-4'>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder='Your name'
                    className='bg-[#161616] w-full px-4 py-3 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-600'
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder='Your Email'
                    className='bg-[#161616] w-full px-4 py-3 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-600'
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder='Your Message'
                    className='bg-[#161616] w-full px-4 py-3 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-600'
                    rows={4}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className='text-xl w-full p-4 mt-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700'
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

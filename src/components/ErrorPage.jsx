import Lottie from 'lottie-react'
import React from 'react'
import errorAnimation from '../assets/animation_lm3m6bkb.json'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (


    <section className='flex items-center h-fit p-16 bg-gray-100 text-gray-900'>



      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>


        <div className='max-w-md text-center'>
          {/* lottie animation */}
          <span className='w-full'>
            <Lottie animationData={errorAnimation} loop={true} />
          </span>

          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>

            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage

import { useState } from "react"
import MainLayout from "src/Layouts/MainLayout"

export function RatingPersonalConcert() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')

  const handleRatingChange = (event:any) => {
    setRating(parseInt(event.target.value, 10))
  }

  const handleFeedbackChange = (event:any) => {
    setFeedback(event.target.value)
  }

  const handleSubmit = (event:any) => {
    event.preventDefault()
    // Perform any necessary actions with the rating and feedback data
    console.log('Rating:', rating)
    console.log('Feedback:', feedback)
    // Reset form fields
    setRating(0)
    setFeedback('')
  }
  const renderStarRating = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <label key={i} className='cursor-pointer'>
          <input
            type='radio'
            name='rating'
            value={i}
            className='sr-only'
            onChange={handleRatingChange}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 30 30'
            fill={i <= rating ? '#FFD700' : 'none'}
            stroke='#FFD700'
            className='w-8 h-8 inline-block'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1}
              d='M19 9.55c-.06-.18-.24-.34-.43-.34l-6.25-.09L10 2.87c-.15-.36-.66-.36-.81 0L7.68 9.12l-6.25.09c-.19 0-.37.16-.43.34-.06.18-.01.38.14.51l4.51 3.48-1.68 6.16c-.05.2.05.41.26.52.09.05.19.08.3.08.09 0 .17-.02.25-.07L10 16.84l5.66 3.32c.18.1.39.1.57 0 .29-.1.44-.38.34-.64l-1.68-6.16 4.51-3.48c.15-.12.2-.32.14-.51z'
            />
          </svg>
        </label>
      )
    }
    return stars
  }
  return (
    <MainLayout>
        <div className='w-full h-full flex flex-col justify-center items-center bg-white'>
      {/* Ticket banner*/}
      <div className='w-full bg-gradient-to-b from-gray-500 to-white p-10'>
        <div className='bg-white h-[300px] rounded-xl grid grid-cols-4 overflow-hidden'>
          <div className='flex flex-col p-4 font-semibold'>
            <p className='text-xl text-black font-bold leading-none mb-3'>
              {'[TP Hồ Chí Minh] CAM GALA 2024'}
            </p>
            <div className='flex gap-3 items-center'>
              <svg
                className='h-3 h-3 fill-amber-500'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path d='M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z' />
              </svg>
              <p className='text-amber-500'>{'16:00 - 21:00, 06.04.2024'}</p>
            </div>
            <div className='flex gap-3 items-center'>
              <svg
                className='h-3 h-3 fill-amber-500'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 384 512'
              >
                <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
              </svg>
              <p className='text-amber-500'>{'Nhà thi đấu Nguyễn Du'}</p>
            </div>
          </div>
          <img
            src={
              'https://media.urbanistnetwork.com/saigoneer/xplr-images/event-iistings/2024/June/hatboi01h.webp'
            }
            alt='Placeholder'
            className='w-full h-full object-cover col-span-3'
          />
        </div>
      </div>
      {/* feedback form*/}
      <form
        className='w-full text-black max-w-md mx-auto'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
          <label
            htmlFor='rating'
            className='block text-gray-900 text-lg font-bold mb-2'
          >
            Đánh giá của bạn
          </label>
          <div className='flex items-center'>{renderStarRating()}</div>
        </div>
        <div className='mb-4'>
          <textarea
            id='feedback'
            placeholder='Viết đánh giá'
            className='appearance-none w-full bg-white border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:border-amber-500'
            rows={4}
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </MainLayout>
  )
}

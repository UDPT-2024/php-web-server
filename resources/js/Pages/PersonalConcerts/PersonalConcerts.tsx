import MainLayout from "src/Layouts/MainLayout"

export function PersonalConcerts() {
  const Card = ({ title, date, place, imageUrl, status }:{ title:any, date:any, place:any, imageUrl:any, status:any }) => {
    return (
      <div className='relative flex flex-col justify-end p-4 rounded-lg bg-gray-100 shadow-md h-[350px] w-full overflow-hidden'>
        <div className='absolute top-0 left-0 h-1/2 w-full'>
          <img
            src={imageUrl}
            alt='Placeholder'
            className='w-full h-full object-cover'
          />
        </div>
        <h3 className='text-lg text-black font-bold'>{title}</h3>
        <p className='text-gray-700'>{date}</p>
        <p className='text-gray-700'>{place}</p>
        {status ? (
          <button className='font-semibold mt-4 p-2 text-center bg-amber-500 text-white rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'>
            Xem Chi Tiết
          </button>
        ) : (
          <button className='font-semibold mt-4 p-2 text-center text-red-500 hover:text-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'>
            Đã Hủy Vé
          </button>
        )}
      </div>
    )
  }

  const data = [
    {
      title: 'Born Pink World',
      date: '21.12.2024',
      place: 'SVD Mỹ Đình',
      status: 1,
      imageUrl:
        'https://media.urbanistnetwork.com/saigoneer/xplr-images/event-iistings/2024/June/hatboi01h.webp',
    },
    {
      title: 'Born Pink World',
      date: '21.12.2024',
      place: 'SVD Mỹ Đình',
      status: 0,
      imageUrl:
        'https://media.urbanistnetwork.com/saigoneer/xplr-images/event-iistings/2024/June/hatboi01h.webp',
    },

    {
      title: 'Born Pink World',
      date: '21.12.2024',
      place: 'SVD Mỹ Đình',
      status: 1,
      imageUrl:
        'https://media.urbanistnetwork.com/saigoneer/xplr-images/event-iistings/2024/June/hatboi01h.webp',
    },
  ]
  return (
    <MainLayout>
        <div className='w-full h-full flex justify-center items-center p-4'>
      <div className='w-[600px] grid grid-cols-3 gap-3 '>
        {data.map((e, i) => (
          <Card {...e} key={i} />
        ))}
      </div>
    </div>
    </MainLayout>
  )
}

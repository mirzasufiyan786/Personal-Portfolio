import React from 'react'

export default function Fullimage({items}) {
  return (
<>
      <div className='w-[600px] h-[100%] bg-red-900 bg-cover'
      style={{ backgroundImage: `url(${items.img})` }}
      >
      </div>
      </>
  )
}

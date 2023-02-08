import React from 'react'
import { DocumentData } from 'firebase/firestore'

type Props = {
    message: DocumentData
}

export default function Message({message}:Props) {
  return (
    <div className={`py-5 text-white  ${isChatGPT && bg-[#434654]}`}>
    <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
        <img src={message.user.avatar} className="h-8 w-8" alt="no photo message.tsx"/>
        <p className='pt-1 text-sm'>
            {message.text}
        </p>
    </div>
    </div>
  )
}

import React from 'react'
import { DocumentData } from 'firebase/firestore'

type Props = {
    message: DocumentData
}

export default function Message({message}:Props) {
    //const isChatGPT = message.user.name === "ChatGPT"
  return (
    <div >
    <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
        <img src="" className="h-8 w-8" alt="no photo message.tsx"/>
        <p className='pt-1 text-sm'>
            {message.text}
        </p>
    </div>
    </div>
  )
}

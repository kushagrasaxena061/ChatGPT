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
        <img src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=300" className="h-8 w-8" alt="no photo message.tsx"/>
        <p className='pt-1 text-sm'>
            {message.text}
        </p>
    </div>
    </div>
  )
}

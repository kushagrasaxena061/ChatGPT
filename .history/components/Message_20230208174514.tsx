import React from 'react'
import { DocumentData } from 'firebase/firestore'

type Props = {
    message: DocumentData
}

export default function Message({message}:Props) {
  return (
    <div>Message</div>
  )
}

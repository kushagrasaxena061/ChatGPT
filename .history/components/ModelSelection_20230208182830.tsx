'use client'

import React from 'react'
import useSWR from "swr"
import Select from "react-select"



const fetchModels = () => fetch('api/getEngines').then(res => res.json())

export default function ModelSelection() {
    const {data: models, isLoading} = useSWR('models',fetchModels)

  return (
    <div>
        <Select className='mt-2'  isSearchable isLoading={isLoading} menuPosition='fixed' classNames={{control:(state) => "bg-[#434654] border=[#434654]"}} />
    </div>
  )
}

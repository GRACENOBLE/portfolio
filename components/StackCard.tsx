import React from 'react'

type StackCardProps = {
    Index: number
    Icon: any;
    Label: string
}

export default function StackCard({Icon,Label,Index}:StackCardProps) {
  return (
    <div className='border border-white rounded-lg flex items-center p-4 gap-3 min-w-40'>
        <span className='text-6xl'>{Icon}</span> <span className='text-red-600' id={`${Index}`}>{Label}</span>
    </div>
  )
}

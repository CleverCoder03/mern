import { formData } from '@/lib/utils'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NoteCard = ({note}) => {
  return (
    <Link href={`/note/${note._id}`} className='card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid'>
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.description}
            </p>
            <div className='card-actions justify-between items-center mt-4'>
                <span>
                    {formData(new Date(note.createdAt))}
                </span>
                <div className='flex items-center gap-1'>
                    <button className='btn btn-ghost text-sm text-white'>
                        <PenSquareIcon className='size-4'/>
                    </button>
                    <button className='btn btn-ghost text-sm text-error'>
                        <Trash2Icon className='size-4'/> 
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard
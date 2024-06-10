import React from 'react';

// React Router
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ id, name, image, desc }) => {
    const Navigate = useNavigate();
    
    return (
        <React.Fragment>
            <div onClick={()=> Navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
                <img className='rounded' src={image} alt={name} />
                <p className='font-bold mt-2 mb-1'>{name}</p>
                <p className='text-slate-200 text-sm'>{desc}</p>
            </div>
        </React.Fragment>
    )
}

export default AlbumItem;
import React from 'react';

const SongItem = ({ id, name, image, desc }) => {
    return (
        <React.Fragment>
            <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
                <img className='rounded' src={image} alt={name} />
                <p className='font-bold mt-2 mb-1'>{name}</p>
                <p className='text-slate-200 text-sm'>{desc}</p>
            </div>
        </React.Fragment>
    )
}

export default SongItem;
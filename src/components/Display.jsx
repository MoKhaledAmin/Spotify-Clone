import React from 'react';

// React Router
import { Route, Routes } from 'react-router-dom';

// Components
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';

const Display = () => {
    return (
        <React.Fragment>
            <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
                <Routes>
                    <Route path='/' element={<DisplayHome />} />
                    <Route path='/album/:id' element={<DisplayAlbum />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}

export default Display;
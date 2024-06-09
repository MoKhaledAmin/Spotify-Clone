import React from 'react';

// Components
import Navbar from './Navbar';
import SongItem from './SongItem';
import AlbumItem from './AlbumItem';

// Data
import { albumsData, songsData } from '../assets/assets';

const DisplayHome = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {
                        albumsData?.map((item, index) => (
                            <AlbumItem key={index} id={item.id} name={item.name} desc={item.desc} image={item.image} />
                        ))
                    }
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                    {
                        songsData?.map((item, index) => (
                            <SongItem key={index} id={item.id} name={item.name} desc={item.desc} image={item.image} />
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default DisplayHome;
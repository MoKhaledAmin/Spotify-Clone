import React from 'react';

// React Router
import { useParams } from 'react-router-dom';

// Components
import Navbar from './Navbar';

// Data
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    return (
        <React.Fragment>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
               <img className='w-48 rounded' src={albumData.image} alt={albumData.name} />
               <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5 mr-1' src={assets.spotify_logo} alt='Logo' />
                        <b>Spotify</b> 1,548,23 Likes <b>50 Songs, </b> about 2 hr 29 min
                    </p>
               </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt='Clock' />
            </div>
            <hr />
            {
                songsData?.map((item, index) => (
                    <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                        <p className='text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                            <img className='inline w-10 mr-5' src={item.image} alt={item.name} />
                            {item.name}
                        </p>
                        <p className='text-[15px]'>{albumData.name}</p>
                        <p className='text-[15px] hidden sm:block'>5 days ago</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </React.Fragment>
    )
}

export default DisplayAlbum;
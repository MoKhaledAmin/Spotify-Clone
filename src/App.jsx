import React, { useContext } from 'react';

// Components
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import Display from './components/Display';

// Context
import { PlayerContext } from './context/PlayerContext';

const App = () => {
    const { audioRef, track } = useContext(PlayerContext);
    return (
        <React.Fragment>
            <div className='h-screen bg-black'>
                <div className='h-[90%] flex'>
                    <Sidebar />
                    <Display />
                </div>
                <Player />
                <audio ref={audioRef} src={track.file} preload='auto'></audio>
            </div>
        </React.Fragment>
    )
}

export default App;
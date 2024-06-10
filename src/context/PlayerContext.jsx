import { createContext, useEffect, useRef, useState } from 'react';

// Data
import { songsData } from '../assets/assets';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const seekBg = useRef();
    const seekBar = useRef();
    const audioRef = useRef();
    const [ track, setTrack ] = useState(songsData[0]);
    const [ playStatus, setPlayStatus ] = useState(false);
    const [ time, setTime ] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        },
    });

    // Handle Time increasing
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100) + '%')
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    },
                })
            }
        }, 1000);
    }, [audioRef])

    // Handle Play Audio
    const Play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    // Handle Pause Audio
    const Pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    // Play With Id
    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    // Previous Song
    const Previous = async() => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    // Next Song
    const Next = async() => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    // Seek Song
    const seekSong = async(e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) *  audioRef.current.duration)
    }

    const contextValue = { audioRef, seekBg, seekBar, track, setTrack, playStatus, setPlayStatus, time, setTime, Play, Pause, playWithId, Previous, Next, seekSong };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
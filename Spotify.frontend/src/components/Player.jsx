import { useContext } from 'react';
import { assets } from './../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function Player() {

    const { track, seekBar, seekBg, play, pause, playStatus, time, nextSong, previusSong,
        seekSong, toggleLoop, isLooping, isShuffle, toggleShuffle, volume, handleVolumeChange,
        isMuted, toggleMute } = useContext(PlayerContext)

    return track ? (
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12" src={track.image} alt="song img" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img onClick={toggleShuffle} className={!isShuffle ? "w-4 cursor-pointer opacity-40" : "w-4 cursor-pointer"} src={assets.shuffle_icon} alt="shuffle_icon" />
                    <img onClick={previusSong} className='w-4 cursor-pointer' src={assets.prev_icon} alt="prev_icon" />
                    {!playStatus ? (
                        <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="play_icon" />
                    ) : (
                        <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="pause_icon" />
                    )}
                    <img onClick={nextSong} className='w-4 cursor-pointer' src={assets.next_icon} alt="next_icon" />

                    <img onClick={toggleLoop} className={isLooping ? "w-4 cursor-pointer" : "w-4 cursor-pointer opacity-40"} src={assets.loop_icon} alt="loop_icon" />
                </div>
                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className='w-4' src={assets.plays_icon} alt="plays_icon" />
                <img className='w-4' src={assets.mic_icon} alt="mic_icon" />
                <img className='w-4' src={assets.queue_icon} alt="queue_icon" />
                <img className='w-4' src={assets.speaker_icon} alt="speaker_icon" />
                <img onClick={toggleMute} className='w-4 cursor-pointer' src={!isMuted && volume !== 0 ? assets.volume_icon : assets.mute_icon} alt="volume_icon" />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    color='red'
                    className="bg-gray-300 appearance-auto h-1 w-20 opacity-70 hover:opacity-100 rounded-lg"
                />
                <img className='w-4' src={assets.mini_player_icon} alt="mini_player_icon" />
                <img className='w-4' src={assets.zoom_icon} alt="zoom_icon" />
            </div>
        </div>
    ) : null
}

export default Player
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import classes from './Audio.module.css'

type Song = {
  id: number
  title: string
  artist: string
  file: string
  image: string
}
const Audio = (props: {
  isPlaying: boolean
  setIsPlaying: Function
  songs: Song[]
  trackPlaying: number
  settrackPlaying: Function
}) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [timeSongInfo, setTimeSongInfo] = useState<{
    currentTime: Number
    duration: number
  }>({
    currentTime: 0,
    duration: 0,
  })
  const handlePlay = (): void => {
    props.setIsPlaying(true)
    if (audioRef.current) {
      audioRef.current.play()
    }
  }
  const handlePause = (): void => {
    props.setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }
  const handlePreviousOrNext = (arg: string) => {
    let thisTrackPlaying = getNumberOfNextOrPreviousTrack(arg)
    props.setTrackPlaying(thisTrackPlaying)
  }
  const getNumberOfNextOrPreviousTrack = (arg: string): number => {
    let thisTrackPlaying = props.trackPlaying
    let numberOfTracks = props.songs.length
    if (arg === 'previous') {
      thisTrackPlaying--
      if (thisTrackPlaying < 0) {
        thisTrackPlaying = numberOfTracks - 1
      }
    }
    if (arg === 'next') {
      thisTrackPlaying++
      if (thisTrackPlaying >= numberOfTracks) {
        thisTrackPlaying = 0
      }
    }
    return thisTrackPlaying
  }

  useEffect(() => {
    if (props.isPlaying) {
      if (audioRef.current) {
        audioRef.current.play()
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [props.trackPlaying, props.isPlaying])
  return (
    <div>
      <div className={classes.rangeInfos}>
        <p>{timeSongInfo.currentTime}</p>
        <input type='range' />
      </div>
      <div className={classes.controls}>
        <audio
          ref={audioRef}
          src={props.songs[props.trackPlaying].file}
          className={classes.controlsAudioPlayer}
          controls
        />
        <FiChevronLeft
          size={24}
          onClick={() => handlePreviousOrNext('previous')}
        />
        {props.isPlaying ? (
          <FiPause size={32} onClick={() => handlePause()} />
        ) : (
          <FiPlay size={32} onClick={() => handlePlay()} />
        )}
        <FiChevronRight
          size={24}
          onClick={() => handlePreviousOrNext('next')}
        />
      </div>
    </div>
  )
}
export default Audio

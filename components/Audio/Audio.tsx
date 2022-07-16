import {FiPlay, FiPause, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {useState, useEffect, useRef} from "react"
type Song = {
    id: number
    title: string
    artist: string
    file: string
    image: string
  }
export const Audio = (props: {isPlaying: boolean, setIsPlaying: Function, songs: Song[], trackPlaying: number, settrackPlaying: Function }) => {
    const audioRef= useRef<HTMLAudioElement>(null)
const [timeSongInfo, setTimeSongInfo] = useState<{currentTime: Number, duration: number}>({
    currentTime: 0, duration: 0
})
    return (
  )
}

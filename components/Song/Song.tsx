import classes from './Song.module.css'
import Image from 'next/Image'
import { SourceMapping } from 'module'

type Song = {
  id: number
  type: string
  artist: string
  file: string
  image: string
}
const Song = (props: { song: Song; isPlaying: boolean }) => {
  return (
    <>
      <div>Song</div>
    </>
  )
}

export default Song

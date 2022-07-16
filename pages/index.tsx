import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Song from '../components/Song/Song'
import Audio from '../components/Audio/Audio'
const SONGS: Song[] = [
  {
    id: 0,
    title: 'Birdeye Blues',
    artist: 'Chris Haugen',
    file: 'songs/song1.mp3',
    image: '/covers/cover1.png',
  },
  {
    id: 1,
    title: 'Il suffira',
    artist: 'Elton John',
    file: 'songs/song2.mp3',
    image: '/covers/cover2.jpeg',
  },
  {
    id: 2,
    title: 'Allumer le feu',
    artist: 'Johnny Halliday',
    file: 'songs/song3.mp3',
    image: '/covers/cover3.png',
  },
]

export const getStaticProps = async () => {
  const allSongs: Song[] = SONGS
  return {
    props: {
      songs: allSongs,
    },
    revalidate: 3600,
  }
}
const Home: NextPage<{ songs: Song[] }> = ({ songs }) => {
  const [trackPlaying, setTrackPlaying] = useState<number>(0)
  const [isPlaying, setIsplaying] = useState<boolean>(true)
  return (
    <div className={styles.container}>
      <div className={styles.songPlaying}>
        <Song song={songs[trackPlaying]} isPlaying={isPlaying} />
      </div>
      <Audio
        isPlaying={}
        setIsPlaying={setIsPlaying}
        songs={songs}
        trackPlaying={trackPlaying}
        setTrackPlaying={setTrackPlaying}
      />
    </div>
  )
}

export default Home

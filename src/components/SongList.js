import React from 'react'
import Song from './Song'

    function SongList(props) {
        
        const allSongs = props.songs.map(song => <Song key={song.key} song={song} />)
        return (
            <tbody>
                {allSongs}
            </tbody>
        )
    }

export default SongList
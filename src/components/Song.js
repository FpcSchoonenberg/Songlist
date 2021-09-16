import React from 'react'

function Song(props) {
    
    return (
        <tr>
            <td>
                {props.song.title}
            </td>
            <td>
                {props.song.artist}
            </td>
            <td>
                {props.song.genre}
            </td>
            <td>
                {props.song.rate}
            </td>
            <td>
                {props.song.searchParameter}
            </td>
            <td>
                <a href={props.song.youtubeLink} target='_blank' rel='noreferrer' >search =&gt;</a>
            </td>
        </tr>
    )
}

export default Song
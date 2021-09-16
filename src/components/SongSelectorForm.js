import React from 'react'

function SongSelectorForm(props) {
    
    return (
        <form onSubmit={props.selectSong}>
            <select id='selectform_genre'
                onChange={props.handleChange}
                name='selectform_genre'
                defaultValue={'DEFAULT'}
            >
                <option value='DEFAULT' disabled='disabled'>select a genre</option>
                <option>all genres</option>
            </select>
            <select id='selectform_rate'
                onChange={props.handleChange}
                name='selectform_rate'
                defaultValue={'DEFAULT'}
            >
                <option value='DEFAULT' disabled='disabled'>select a rating</option>
                <option>all ratings</option>
            </select>
            <select id='selectform_sort'
                onChange={props.handleChange}
                name='selectform_sort'
                defaultValue={'DEFAULT'}
            >
                <option value='DEFAULT' disabled='disabled'>sort data</option>                
            </select>
            <button>select songs</button>
            <input type='button' onClick={props.removeSonglist} value='remove songlist' />
            <input type='button' onClick={props.allSongs} value='show complete list' />
        </form>
    )
}

export default SongSelectorForm
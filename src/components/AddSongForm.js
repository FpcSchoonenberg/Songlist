
import React from 'react'

function AddSongForm(props) {
    
    return (
            <form onSubmit={props.addSong}>
                <input type='text'
                    placeholder='songtitle'
                    onChange={props.handleChange}
                    name='title'
                    value={props.value} />
                <input type='text'
                    placeholder='artist'
                    onChange={props.handleChange}
                    name='artist'
                    value={props.value} />
                <input type='text'
                    placeholder='searchparameter'
                    onChange={props.handleChange}
                    name='searchParameter'
                    value={props.value}/>
                <select id='addform_genre'
                    onChange={props.handleChange}
                    name='genre'
                    defaultValue={'DEFAULT'}
                >
                    <option value='DEFAULT' disabled='disabled'>choose a genre</option>
                </select>
                <select id='addform_rate'
                    onClick={props.handleChange}
                    name='rate'
                    defaultValue={'DEFAULT'}
                >
                    <option value='DEFAULT' disabled='disabled'>rate this song</option>
                </select>
                <button>add song</button>
            </form>
    )
}

export default AddSongForm
import React from 'react'

function About() {
    
    return (
        <div className='about'>
            <h2>About</h2>
            This spa was built with html,javascript,react.
            The main focus was to integrate previous knowledge with react and build a 'songlist application'.
            <br />
            The core functionality was adding items via a form to a list, which could be displayed and filtered.
            <br />
            I chained the separate songfilters and added an extra searchparameter, which is used to compose a hyperlink and performs
            a search in the youtube-database based on title,artist and searchparameter.
        </div>
    )
}

export default About
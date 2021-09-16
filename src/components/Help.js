import React from 'react'

function Help() {
    return (
        <div className='help'>
            <h2>Help</h2>
            The app does not use advanced formvalidation with regex or errortrapping.
            I performed some basic testing with focus on the functionality of the app.
            Crossplatform compatibility and performance and UI-design were merely beyond my scope.
            The composed Youtube-link is based on 3 searchparameters: artist, title and an optional searchparameter.
            Genre and rating are not included in your search.
        </div>
        
    )
}

export default Help
import React from 'react'
import AddSongForm from './AddSongForm'
import SongList from './SongList'
import SongSelectorForm from './SongSelectorForm'
import SongHeader from './SongHeader'

class SongOverview extends React.Component {
    constructor() {
        super()
        this.state ={
            songs: [
                { key: 1, title: 'one', artist: 'metallica', genre: 'metal', rate: '*****', searchParameter: '', youtubeLink: 'https://www.youtube.com/results?search_query=metallica+one' },
                { key: 2, title: 'cudly toy', artist: 'roachford', genre: 'rock', rate: '****', searchParameter: 'extended', youtubeLink: 'https://www.youtube.com/results?search_query=roachford+cudly+toy+extended' },
                { key: 3, title: 'baby love', artist: 'mothers finest', genre: 'funk', rate: '***', searchParameter: '', youtubeLink: 'https://www.youtube.com/results?search_query=mothers+finest+baby+love' },
                { key: 4, title: 'you do something to me', artist: 'paul weller', genre: 'pop', rate: '***', searchParameter: '', youtubeLink: 'https://www.youtube.com/results?search_query=paul+weller+you+do+something+to+me' },
                { key: 5, title: 'far beyond the sun', artist: 'yngwie malmsteen', genre: 'classic', rate: '****', searchParameter: '', youtubeLink: 'https://www.youtube.com/results?search_query=yngwie+malmsteen+far+beyond+the+sun' },
                { key: 6, title: 'hangar 18', artist: 'megadeth', genre: 'metal', rate: '*****', searchParameter: '', youtubeLink: 'https://www.youtube.com/results?search_query=megadeth+hangar+18' },
                { key: 7, title: 'fade to black', artist: 'metallica', genre: 'metal', rate: '****', searchParameter: 'live', youtubeLink: 'https://www.youtube.com/results?search_query=metallica+fade+to+black+live' },
                { key: 8, title: 'fade to black', artist: 'amy winehouse', genre: 'pop', rate: '****', searchParameter: 'lyrics', youtubeLink: 'https://www.youtube.com/results?search_query=amy+winehouse+fade+to+black+lyrics' },
                { key: 9, title: 'time is on my side', artist: 'rolling stones', genre: 'rock', rate: '***', searchParameter: 'mono', youtubeLink: 'https://www.youtube.com/results?search_query=rolling+stones+time+is+on+my+side+mono' },
                { key: 10, title: 'something', artist: 'the beatles', genre: 'pop', rate: '****', searchParameter: '2009', youtubeLink: 'https://www.youtube.com/results?search_query=the+beatles+something+2009' },
                { key: 11, title: 'lady', artist: 'modjo', genre: 'dance', rate: '***', searchParameter: 'loop', youtubeLink: 'https://www.youtube.com/results?search_query=modjo+lady+loop' },
                { key: 12, title: '', artist: 'trance', genre: 'dance', rate: '***', searchParameter: '2021', youtubeLink: 'https://www.youtube.com/results?search_query=trance+mix+2021' }],      
            rating: ['*', '**', '***', '****', '*****'],
            genres: ['pop', 'rock', 'metal', 'funk', 'dance', 'classic'],
            sorting: ['artist', 'artist Z-A', 'title', 'title Z-A', 'rate', 'rate 5-1'],
            baseUrl: 'https://www.youtube.com/results?search_query='
        }
    }

    addDropdowns = (id, criteria) => {
        const options = criteria;
        let select = document.getElementById(id);
        for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            let el = document.createElement('option');
            el.text = opt;
            el.value = opt;
            select.add(el);
        }
    }

    componentDidMount() {
        this.addDropdowns('selectform_genre', this.state.genres)
        this.addDropdowns('addform_genre', this.state.genres)
        this.addDropdowns('addform_rate', this.state.rating)
        this.addDropdowns('selectform_rate', this.state.rating)
        this.addDropdowns('selectform_sort', this.state.sorting)
    }

    //handles the inputboxes of the songform
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addSong = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            const key = prevState.songs.length + 1
            const artist = this.state.artist === undefined ? '' : this.state.artist
            const title = this.state.title === undefined ? '' : this.state.title
            const genre = this.state.genre
            const rate = this.state.rate
            const searchParameter = this.state.searchParameter === undefined ? '' : this.state.searchParameter
            const youtubeLink = this.state.baseUrl + artist.replace(/ /g, '+') + '+' + title.replace(/ /g, '+') + '+' + searchParameter.replace(/ /g, '+')
            const newSong = { key, title, artist, genre, rate, searchParameter, youtubeLink }
            return { songs: [...prevState.songs, newSong] }
        })
    }

    allSongs = () => {
        delete this.state.selectedSongs
        this.setState({ songs: this.state.songs })
    }

    removeSonglist = () => {
        this.setState({ songs: [] })
    }

    //filter song and pass to next filter and at last sort the filtered songs
    selectSong = (event) => {
        event.preventDefault()
        this.setState({ selectedSongs: [] })
        this.setState(prevState => {
            const songsSelection = prevState.songs.filter(song => this.state.selectform_genre !== 'all genres' ?
                song.genre === this.state.selectform_genre : song => song.genre !== this.state.selectform_genre)
            const songsSelection2 = songsSelection.filter(song => this.state.selectform_rate !== 'all ratings' ?
                song.rate === this.state.selectform_rate : song => song.rate !== this.state.selectform_rate)
            let filterdSortedSongs
            switch (this.state.selectform_sort) {
                case 'artist Z-A':
                    console.log('reverse')
                    filterdSortedSongs = this.sortSongOnProperty('artist', songsSelection2).reverse()
                    return { selectedSongs: filterdSortedSongs }
                case 'title Z-A':
                    filterdSortedSongs = this.sortSongOnProperty('title', songsSelection2).reverse()
                    return { selectedSongs: filterdSortedSongs }
                case 'rate 5-1':
                    filterdSortedSongs = this.sortSongOnProperty('rate', songsSelection2).reverse()
                    return { selectedSongs: filterdSortedSongs }
                default:
                    filterdSortedSongs = this.sortSongOnProperty(this.state.selectform_sort, songsSelection2)
                    return { selectedSongs: filterdSortedSongs }
            }
        }
        )
    }

    sortSongOnProperty = (songProp, filteredSongs) => {
        const compareItems = (a, b) => {
            if (a[songProp] < b[songProp]) {
                return -1
            }
            if (a[songProp] > b[songProp]) {
                return 1
            }
            return 0
        }
        const filterdSortedSongs = filteredSongs.sort(compareItems)
        return filterdSortedSongs
    }

    render() {
        return (
            <div className='songoverview'>
                <AddSongForm addSong={this.addSong}
                    handleChange={this.handleChange}
                />
                <SongSelectorForm handleChange={this.handleChange}
                    selectSong={this.selectSong}
                    removeSonglist={this.removeSonglist}
                    allSongs={this.allSongs} />
                <table>
                    <SongHeader />
                    <SongList
                        songs={this.state.selectedSongs ? this.state.selectedSongs : this.state.songs}
                    />
                </table>
            </div>
        )
    }
}

export default SongOverview
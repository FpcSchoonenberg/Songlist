import { BrowserRouter, Route, NavLink } from "react-router-dom"
import SongOVerview from "./components/SongOverview";
import About from "./components/About"
import Help from './components/Help'

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <h1>My Songlist</h1>
                <nav>                   
                    <NavLink to="/"><h3>Home</h3></NavLink>
                    <NavLink to="/about"><h3>About</h3></NavLink>
                    <NavLink to="/help"><h3>Help</h3></NavLink>
                    </nav>
                    <Route path="/" component={SongOVerview} />
                    <Route path="/about" component={About} />
                    <Route path="/help" component={Help}/>               
            </BrowserRouter>
        </div>
    
    );
}

export default App;
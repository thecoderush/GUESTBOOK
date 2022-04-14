import '../assets/styles/app.scss';

import {h, render} from 'preact';
import {Router, Link} from 'preact-router';

import Home from './pages/home';
import Conference from './pages/conference';

function App() {
    return (
        <div>
            Hello world!
            <header className="header">
                <nav className="">
                    <div className="container">
                        <Link className="navbar-brand mr-4 pr-2" href="/">
                            &#128217; Guestbook
                        </Link>
                    </div>
                </nav>

                <nav className="bg-light border-bottom text-center">
                    <Link className="nav-conference" href="/conference/amsterdam2019">
                        Amsterdam 2019
                    </Link>
                </nav>
           </header>

            <router>
                <Home path="/" />
                <Conference path="/conference/:slug" />
            </router>
        </div>
    )
}

render(<App />, document.getElementById('app'));
import '../assets/styles/app.scss';

import {h, render} from 'preact';
import {Router, Link} from 'preact-router';
import {useState, useEffect} from 'preact/hooks';

import {findConferences} from './api/api';
import Home from './pages/home';
import Conference from './pages/conference';

function App() {
    const [conferences, setConferences] = useState(null);

    useEffect(() => {
        findConferences().then((conferences) => setConferences(conferences));
    }, []);

    if (conferences === null) {
        return <div className="text-center pt-5">Loading...</div>;
    }

    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand mr-4 pr-2" href="/">
                            &#128217; Guestbook
                        </Link>
                    </div>
                </nav>

                <nav className="bg-light border-bottom text-center">
                    <Link className="nav-conference" href="/conference/amsterdam2019">
                        amsterdam 2019
                    </Link>
                    {conferences.map((conference) => (
                        <Link className="nav-conference" href="{'/conference/'+conference.slug}">
                            {conference.city} {conference.year}
                        </Link>
                    ))}
                </nav>
           </header>

            <router>
                <Home path="/" conferences={conferences} />
                <Conference path="/conference/:slug" conferences={conferences} />
            </router>
        </div>
    )
}

render(<App />, document.getElementById('app'));
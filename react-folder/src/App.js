import { AddMovie } from "./components/AddMovie";
import { List } from "./components/List";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="layout">
        {/* HEADER */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>My Movies</h1>
        </header>

        {/* NAVIGATION BAR */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Start</a></li>
                <li><a href="/#">Movies</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>

        {/* MAIN CONTENT */}
        <section id = "content" className="content">

            {/* HERE THERE ARE LIST MOVIES */}
            <List/>

        </section>

        {/* SIDEBAR */}
        <aside className="lateral">
            <SearchBar/>

            <AddMovie/>

        </aside>

        {/* FOOTER */}
        <footer className="footer">
            &copy; Movie Web App Project - created with ❤️ by Kev - Visit my job at <a href="https://github.com/Lordkev23">github.com/Lordkev23</a>
        </footer>

    </div>
  );
}

export default App;

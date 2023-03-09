
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

            {/* HERE THERE ARE MOVIES */}
            <article className="movie-item">
                <h3 className="title">Web Develope</h3>
                <p className="description">This is a description</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Web Develope</h3>
                <p className="description">This is a description</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Web Develope</h3>
                <p className="description">This is a description</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Web Develope</h3>
                <p className="description">This is a description</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

        </section>

        {/* SIDEBAR */}
        <aside className="lateral">
            <div className="search">
                <h3 className="title">Browser</h3>
                <form>
                    <input type="text" id="search_field"/>
                    <button id="search">Search</button>
                </form>
            </div>

            <div className="add">
                <h3 className="title">Add Movie</h3>
                <form>
                    <input type="text" id="title" placeholder="Title"/>
                    <textarea id="description" placeholder="Description"></textarea>
                    <input type="submit" id="save" value="Save"/>
                </form>
            </div>
        </aside>

        {/* FOOTER */}
        <footer className="footer">
            &copy; Movie Web App Project - created with ❤️ by Kev - Visit my job at <a href="https://github.com/Lordkev23">github.com/Lordkev23</a>
        </footer>

    </div>
  );
}

export default App;

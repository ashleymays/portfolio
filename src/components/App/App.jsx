import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

const heading = 'Ashley Mays. Web Developer.';

function App() {
    return (
        <main>
            <h1 className="main__heading">{heading}</h1>
            <About />
            <Projects />
            <Contact />
        </main>
    );
}

export default App;

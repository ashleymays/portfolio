import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

const heading = "Hi I'm Ashley — web developer, support engineer, and amateur weightlifter.";

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

import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';

function App() {
    return (
        <main>
            <section>
                <h1 className="main__heading">
                    Ashley Mays. Web developer. <br />
                    Extroverted introvert.
                </h1>
            </section>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;

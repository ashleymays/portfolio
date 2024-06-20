import { About } from '../components/about';
import { Projects } from '../components/projects';
import { Experience } from '../components/experience';
import { Links } from '../components/links';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16 my-36 mx-auto w-10/12 md:w-2/5">
      <About />
      <Projects />
      <Experience />
      <Links />
      <Footer />
    </main>
  );
}

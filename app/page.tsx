import { About } from '../components/about';
import { Projects } from '../components/projects';
import { Experience } from '../components/experience';
import { Links } from '../components/links';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16 mt-36 mb-12 mx-auto w-11/12 sm:8/12 md:6/12 lg:w-4/12">
      <About />
      <Projects />
      <Experience />
      <Links />
      <Footer />
    </main>
  );
}

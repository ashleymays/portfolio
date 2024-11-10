import { About } from '@/features/about';
import { Projects } from '@/features/projects';
import { Experience } from '@/features/experience';
import { Links } from '@/features/links';
import { Footer } from '@/features/footer';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16 mx-auto w-10/12 md:11/12">
      <About />
      <div className="flex flex-col gap-y-48">
        <Projects />
        <Experience />
        <Links />
        <Footer />
      </div>
    </main>
  );
}

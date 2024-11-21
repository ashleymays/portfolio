import { About } from '@/features/about';
import { Projects } from '@/features/projects';
import { Experience } from '@/features/experience';
import { Links } from '@/features/links';
import { Footer } from '@/features/footer';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-24 mx-auto w-[min(512px,90%)]">
      <About />
      <div className="flex flex-col gap-y-20">
        <Projects />
        <Experience />
        <Links />
        <Footer />
      </div>
    </main>
  );
}

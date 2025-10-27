import { Hero } from '#/ui/ai/hero';
import Intro from '#/ui/ai/intro';
import Team from '#/ui/ai/team';
import Cta from '#/ui/home/cta';
import Footer from '#/ui/layout/footer';
import { PbdContainer } from '#/ui/layout/pbd-container';

export default function AiPage() {
  return (
    <>
      <PbdContainer>
        <Hero />
        <Intro />
        <Team />
        <Cta />
      </PbdContainer>
      <Footer />
    </>
  );
}

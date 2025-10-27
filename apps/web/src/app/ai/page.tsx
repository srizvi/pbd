import { Book } from '#/ui/ai/book';
import { Hero } from '#/ui/ai/hero';
import { Intro } from '#/ui/ai/intro';
import { Team } from '#/ui/ai/team';
import { Footer } from '#/ui/layout/footer';
import { PbdContainer } from '#/ui/layout/pbd-container';

export default function AiPage() {
  return (
    <>
      <PbdContainer>
        <Hero />
        <Intro />
        <Team />
        <Book />
      </PbdContainer>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'AI-Transformation for Pakistani Banks',
  description:
    'We help Pakistani banking leaders turn AI awareness into measurable profit through systematic capability building from literacy to transformation.',
};

import type { Metadata } from 'next';

import { VisionCarousel } from '#/ui/vision/vision-carousel';

export const metadata: Metadata = {
  title: 'Pitch',
  description: 'Pitch deck',
};

export default function Page() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 h-screen">
      <VisionCarousel />
    </div>
  );
}

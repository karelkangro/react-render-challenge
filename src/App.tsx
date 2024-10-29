import { useState, FC } from 'react';
import { PresentationBuilder } from '@/components/PresentationBuilder';
import './index.css'
import { AIGeneratedSlide } from './types';

const App: FC = () => {
  const [slides, setSlides] = useState<AIGeneratedSlide[]>([]);

  const handleSlideGeneration = (slides: AIGeneratedSlide[]) => {
    setSlides(slides);
  };

  return (
    <div id="app" className="w-full h-full">
      <PresentationBuilder
        slides={slides}
        onGenerateSlides={handleSlideGeneration}
      />
    </div>
  );
};

export default App;
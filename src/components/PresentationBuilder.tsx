import { useState, useRef } from 'react';
import { SlideRenderer } from '@/components/SlideRenderer';
import { generateSlidesFromInput } from '@/hooks/slideGenerator';
import { AIGeneratedSlide } from '@/types';

interface PresentationBuilderProps {
  slides: AIGeneratedSlide[];
  onGenerateSlides: (slides: AIGeneratedSlide[]) => void;
}

export const PresentationBuilder: React.FC<PresentationBuilderProps> = ({
  slides,
  onGenerateSlides
}) => {
  const [userInput, setUserInput] = useState('');
  const [useMockData, setUseMockData] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    const newSlides = generateSlidesFromInput();
    onGenerateSlides(newSlides);
  };

  return (
    <div className="flex w-full min-h-screen bg-slate-500">
      <div className="w-1/3 p-4 shadow-lg shadow-black/20 pr-10">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full h-64 border border-gray-300 p-2"
          placeholder="Enter your presentation content..."
        />
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={useMockData}
            onChange={(e) => setUseMockData(e.target.checked)}
            className="mr-2"
          />
          <label>Use mock data</label>
        </div>
        <button
          onClick={handleGenerate}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Generate Slides
        </button>
      </div>

      <div
        ref={containerRef}
        className="w-2/3 p-4 flex flex-col gap-8 overflow-y-auto"
      >
        {slides.map(slide => (
          <div
            key={slide.id}
            className="w-full aspect-video bg-green-500 relative"
          >
            <SlideRenderer slide={slide} containerRef={containerRef} />
          </div>
        ))}
      </div>
    </div>
  );
};
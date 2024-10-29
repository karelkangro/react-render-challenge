import { AIGeneratedSlide } from '@/types';
import { useState, useEffect } from 'react';
import { SlideColumns } from './SlideColumns';

interface SlideRendererProps {
  slide: AIGeneratedSlide;
  containerRef: React.RefObject<HTMLDivElement>;
}

const SlidePositionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
)

const SlideScaleToPositionWrapper = ({ children, width, height, scale, background }: { children: React.ReactNode, width: number, height: number, scale: number, background: string }) => (
  <div style={{
    position: 'absolute',
    width,
    height,
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    background: background,
  }}>
    {children}
  </div>
)

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, containerRef }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;

        const scaleX = containerWidth / slide.layout.dimensions.width;
        const scaleY = containerHeight / slide.layout.dimensions.height;
        setScale(Math.min(scaleX, scaleY));
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [containerRef, slide.layout.dimensions]);

  return (
    <SlidePositionWrapper>
      <SlideScaleToPositionWrapper
        width={slide.layout.dimensions.width}
        height={slide.layout.dimensions.height}
        scale={scale}
        background={slide.layout.backgroundColor}
      >
        <SlideColumns
          columns={slide.columns}
          dimensions={slide.layout.dimensions}
          scale={scale}
        />
      </SlideScaleToPositionWrapper>
    </SlidePositionWrapper >
  );
};
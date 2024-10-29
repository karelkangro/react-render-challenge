import { SlideComponent, SlideColumn } from '@/types';
import { ComponentRenderer } from './ComponentRenderer';

interface SlideComponentWrapperProps {
  component: SlideComponent;
  column: SlideColumn;
  dimensions: { width: number; height: number };
  scale: number;
  key: string;
}

export const SlideComponentWrapper: React.FC<SlideComponentWrapperProps> = ({ key, component, column, dimensions, scale }) => {
  return (
    <div
      key={key}
      style={{
        position: 'absolute',
        left: `${((component.position.x) / dimensions.width) * 100}%`,
        top: `${(component.position.y / dimensions.height) * 100}%`,
        width: `${(component.position.width / column.width) * 100}%`,
        height: `${(component.position.height / dimensions.height) * 100}%`,
        backgroundColor: 'yellow'
      }}
    >
      <ComponentRenderer component={component} scale={scale} />
    </div>
  );
};
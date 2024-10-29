import { SlideColumn } from '@/types';
import { SlideComponentWrapper } from './SlideComponentWrapper';
import { SlideColumnWrapper } from './SlideColumnWrapper';

interface SlideColumnsProps {
  columns: SlideColumn[];
  dimensions: { width: number; height: number };
  scale: number;
}

export const SlideColumns: React.FC<SlideColumnsProps> = ({ columns, dimensions, scale }) => {
  return (
    <>
      {columns.map(column => (
        <SlideColumnWrapper key={column.id} column={column} dimensions={dimensions}>
          {column.components.map(component => (
            <SlideComponentWrapper
              key={component.id}
              column={column}
              component={component}
              dimensions={dimensions}
              scale={scale}
            />
          ))}
        </SlideColumnWrapper>
      ))}
    </>
  );
};
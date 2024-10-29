import { SlideColumn } from '@/types';

interface SlideColumnWrapperProps {
  column: SlideColumn;
  dimensions: { width: number; height: number };
  children: React.ReactNode;
}

export const SlideColumnWrapper: React.FC<SlideColumnWrapperProps> = ({ column, dimensions, children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${(column.x / dimensions.width) * 100}%`,
        top: 0,
        width: `${(column.width / dimensions.width) * 100}%`,
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};
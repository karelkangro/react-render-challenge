import React from 'react';
import { ResizeableComponent } from '../ComponentRenderer';

interface DataShapeProps {
  id: string;
  data: {
    // Add data shape props here
  };
}

export const DataShape: React.FC<DataShapeProps> = ({ id, data }) => {
  return (
    <ResizeableComponent id={id} type="data-shape">
      {/* Render data shape */}
    </ResizeableComponent>
  );
};

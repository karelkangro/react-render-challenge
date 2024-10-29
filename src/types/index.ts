export interface AIGeneratedSlide {
  id: string;
  layout: {
    type: 'title' | 'two-column' | 'grid' | 'comparison';
    dimensions: {
      width: number;
      height: number;
    };
    backgroundColor: string;
  };
  columns: SlideColumn[];
}

export interface SlideColumn {
  id: string;
  width: number;
  x: number;
  components: SlideComponent[];
}

export interface SlideComponent {
  id: string;
  type: 'text' | 'bullet-list' | 'image' | 'chart' | 'two-column';
  content: any;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  style?: {
    fontSize?: number;
    color?: string;
  };
}
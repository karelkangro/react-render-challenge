import { SlideComponent } from '@/types';

interface ComponentRendererProps {
  component: SlideComponent;
  scale: number;
}

export const ComponentRenderer: React.FC<ComponentRendererProps> = ({ component, scale }) => {
  switch (component.type) {
    case 'text':
      return (
        <div
          style={{
            ...component.style,
            fontSize: component.style?.fontSize ? component.style.fontSize * scale : undefined
          }}
        >
          {component.content}
        </div>
      );
    case 'image':
      return <img src={component.content} alt="" className="w-full h-full object-cover" />;
    case 'bullet-list':
      return (
        <ul
          style={{
            ...component.style,
            fontSize: component.style?.fontSize ? component.style.fontSize * scale : undefined
          }}
        >
          {(component.content as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};
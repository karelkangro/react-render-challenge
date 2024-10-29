interface TextComponentProps {
  content: string;
  style?: {
    fontSize?: number;
    color?: string;
  };
}

export const TextComponent: React.FC<TextComponentProps> = ({ content, style }) => {
  return (
    <div style={style}>
      {content}
    </div>
  );
};
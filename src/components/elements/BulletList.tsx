interface BulletListProps {
  content: string[];
  style?: {
    fontSize?: number;
    color?: string;
  };
}

export const BulletList: React.FC<BulletListProps> = ({ content, style }) => {
  return (
    <ul style={style}>
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
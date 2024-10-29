interface ImageComponentProps {
  content: string;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({ content }) => {
  return (
    <img src={content} alt="Slide Image" className="w-full h-full object-cover" />
  );
};
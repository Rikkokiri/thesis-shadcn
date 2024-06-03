interface ICandidateIndicatorProps {
  alt: string;
  className?: string;
  imgSrc: string;
}

export const CandidateIndicator = (props: ICandidateIndicatorProps) => {
  return (
    <img
      src={props.imgSrc}
      alt={props.alt}
      className={`candidate-indicator bg-card rounded ${props.className || ""}`}
    />
  );
};

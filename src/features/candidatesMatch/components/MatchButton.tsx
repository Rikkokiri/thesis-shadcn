import { MatchWithDetails } from "../types";

interface IMatchButtonProps {
  candidate: MatchWithDetails;
}

export const MatchButton = (props: IMatchButtonProps) => {
  const { name, rank, percentage, logoSrc } = props.candidate;
  const ariaLabel = `top ${rank} - ${name} - ${percentage}% match`;

  return (
    <>
      <button
        aria-label={ariaLabel}
        className="h-full border-none p-0 flex flex-col items-center gap-1 w-[36px]"
      >
        <div className="flex flex-col justify-start items-center">
          <img
            src={logoSrc}
            aria-hidden
            className="rounded-sm shrink-0 w-8 h-[43px] p-[3px] bg-gray-10"
          />
          <p className="text-sm font-bold text-center text-foreground">{`${percentage}%`}</p>
        </div>
      </button>
    </>
  );
};

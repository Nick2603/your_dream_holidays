import React, { FC } from "react";

interface ISocialMediaLinkProps {
  href?: string;
  src?: string;
  alt?: string;
}

export const SocialMediaLink: FC<ISocialMediaLinkProps> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <img src={props.src} alt={props.alt} />
    </a>
  );
};

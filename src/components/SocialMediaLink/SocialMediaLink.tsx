import React, { FC } from "react";
import styles from "./SocialMediaLink.module.scss";

interface ISocialMediaLinkProps {
  href?: string;
  src?: string;
  alt?: string;
}

export const SocialMediaLink: FC<ISocialMediaLinkProps> = (props) => {
  return (
    <a
      className={styles.link}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <img src={props.src} alt={props.alt} />
    </a>
  );
};

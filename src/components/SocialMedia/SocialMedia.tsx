import React, { FC } from "react";
import styles from "./SocialMedia.module.scss";
import { SocialMediaLink } from "../SocialMediaLink/SocialMediaLink";
import fbIcon from "../../assets/icons/fbIcon.svg";
import instagramIcon from "../../assets/icons/instagramIcon.svg";
import twitterIcon from "../../assets/icons/twitterIcon.svg";
import vkIcon from "../../assets/icons/vkIcon.svg";

interface ILinkDetails {
  href?: string;
  src?: string;
  alt?: string;
}

export const SocialMedia: FC = () => {
  const linkDetails: ILinkDetails[] = [
    { href: "https://www.facebook.com/", src: fbIcon, alt: "facebook icon" },
    {
      href: "https://www.instagram.com/",
      src: instagramIcon,
      alt: "instagram icon",
    },
    { href: "https://twitter.com/", src: twitterIcon, alt: "twitter icon" },
    { href: "http://vk.com/", src: vkIcon, alt: "vk icon" },
  ];

  return (
    <div className={styles.wrapper}>
      {linkDetails.map((v) => (
        <SocialMediaLink key={v.alt} href={v.href} src={v.src} alt={v.alt} />
      ))}
    </div>
  );
};

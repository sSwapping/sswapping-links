import { LinksType } from "@/types/linksType";
import {
  FaAt,
  FaBriefcase,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaSteam,
  FaTiktok,
  FaTwitch,
} from "react-icons/fa";

export const LinksStore: LinksType[] = [
  {
    title: "Twitch",
    href: "https://www.twitch.tv/sswapping",
    icon: <FaTwitch />,
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@sswapping",
    icon: <FaTiktok />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/jeff.045/",
    icon: <FaInstagram />,
  },
  {
    title: "My Portfolio",
    href: "https://www.sswapping.dev",
    icon: <FaBriefcase />,
  },
  {
    title: "GitHub",
    href: "https://www.instagram.com/jeff.045",
    icon: <FaGithub />,
  },
  {
    title: "Steam",
    href: "https://steamcommunity.com/id/sSwaqqing",
    icon: <FaSteam />,
  },
  {
    title: "Markhor Scripts",
    href: "https://discord.gg/cXGq4bCaW5",
    icon: <FaDiscord />,
  },
  {
    title: "Markhor Scripts",
    href: "https://markhor-scripts.tebex.io",
    icon: <FaAt />,
  },
];

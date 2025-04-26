import {
  BiEditAlt as BlogIcon,
  BiPaperPlane as ContactIcon,
  BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiBookBookmark as LearnIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
} from "react-icons/bi";

import { LuTrello, LuWorkflow } from "react-icons/lu";
import { PiChatTeardropDotsBold as ChatIcon } from "react-icons/pi";
import { MenuItemProps } from "../types/menu";

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Home",
  },
  {
    title: "About",
    href: "/about",
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: About",
  },
  {
    title: "Blog",
    href: "/blog?category=home",
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Blog",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Projects",
  },

  {
    title: "Learn",
    href: "/learn",
    icon: <LearnIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: "Pages: Learn",
  },
  {
    title: "Roadmap",
    href: "/roadmap?tribe=frontend-developer",
    icon: <LuWorkflow size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Roadmap",
  },
  {
    title: "Task Board",
    href: "/board",
    icon: <LuTrello size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Task Board",
  },
  {
    title: "Chat Room",
    href: "/chat",
    icon: <ChatIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Chat Room",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Contact",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Dashboard",
  },
];

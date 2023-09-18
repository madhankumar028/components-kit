export type NavbarType = "agent" | "user";

export type NavigationMenuType = {
  title: string;
  stylingClass: string;
  iconName: string;
  link: string;
  type: string;
  target: string;
  childItems: NavigationMenuType[];
};

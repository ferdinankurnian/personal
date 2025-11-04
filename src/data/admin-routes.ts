import { IconFolder, IconSettings, IconLayoutDashboard, IconListDetails, IconPhoto, IconCat, IconLink, IconWorld } from "@tabler/icons-react"

export const adminRoutes = [
	{
		title: "Dashboard",
		url: "/ah-ini-admin-yh/dashboard",
		icon: IconLayoutDashboard,
	},
  {
    title: "Projects",
    url: "/ah-ini-admin-yh/projects",
    icon: IconFolder,
    subRoutes: [
      {
        title: "Add Project",
        url: "/ah-ini-admin-yh/projects/add",
      },
      {
        title: "Edit Project",
        url: "/ah-ini-admin-yh/projects/edit",
      },
    ],
  },
  {
    title: "Blogs",
    url: "https://app.marblecms.com",
    icon: IconListDetails,
    isExternal: true,
  },
  {
    title: "Gallery",
    url: "/ah-ini-admin-yh/gallery",
    icon: IconPhoto,
    subRoutes: [
      {
        title: "Add Post",
        url: "/ah-ini-admin-yh/gallery/add",
      },
      {
        title: "Edit Post",
        url: "/ah-ini-admin-yh/gallery/edit",
      },
    ],
  },
  {
    title: "Fursona",
    url: "/ah-ini-admin-yh/fursona",
    icon: IconCat,
    subRoutes: [
      {
        title: "Add Photo",
        url: "/ah-ini-admin-yh/fursona/add",
      },
      {
        title: "Edit Photo",
        url: "/ah-ini-admin-yh/fursona/edit",
      },
    ],
  },
  {
    title: "Social Media",
    url: "/ah-ini-admin-yh/social-media",
    icon: IconLink,
    subRoutes: [
      {
        title: "Add Links",
        url: "/ah-ini-admin-yh/social-media/add",
      },
      {
        title: "Edit Links",
        url: "/ah-ini-admin-yh/social-media/edit",
      },
    ],
  },
  {
    title: "Go to iydheko.site",
    url: "https://iydheko.site",
    icon: IconWorld,
    isExternal: true,
  },
  {
    title: "Settings",
    url: "/ah-ini-admin-yh/settings",
    icon: IconSettings
  },
]
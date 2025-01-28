// import React from "react";
// import Image from "next/image";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
//   SidebarTrigger,
// } from "../ui/sidebar";
// import {
//   ForkKnife,
//   Group,
//   Image as ImageIcon,
//   LogOut,
//   Send,
// } from "lucide-react";
// import Link from "next/link";

// type NavLinksProps = {
//   name: string;
//   path: string;
//   icon: React.ReactNode;
// };

// export const adminNavLinks: NavLinksProps[] = [
//   {
//     name: "Items",
//     path: "/admin/items",
//     icon: <ForkKnife />,
//   },
//   {
//     name: "Banner",
//     path: "/admin/banner",
//     icon: <ImageIcon />,
//   },
//   {
//     name: "Categories",
//     path: "/admin/categories",
//     icon: <Group />,
//   },
//   {
//     name: "Feedback",
//     path: "/admin/feedback",
//     icon: <Send />,
//   },
// ];

// const AdminSidebar = () => {
//   return (
//     <SidebarProvider>
//       <Sidebar>
//         <SidebarTrigger className="absolute top-5 right-[-30px]" />
//         <SidebarHeader>
//           <SidebarMenu>
//             <SidebarMenuItem className="w-full flex justify-center items-center">
//               <Image
//                 src={"/bash_logo.png"}
//                 alt="Bash cup"
//                 width={120}
//                 height={80}
//               />
//             </SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarHeader>
//         <SidebarContent>
//           <SidebarMenu className="py-10 flex flex-col gap-3 px-5">
//             {adminNavLinks.map((link, index) => (
//               <SidebarMenuItem key={index} className="">
//                 <SidebarMenuButton asChild className="py-6">
//                   <Link href={link.path} className="flex gap-3 text-lg">
//                     {link.icon}
//                     <p>{link.name}</p>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             ))}
//           </SidebarMenu>
//         </SidebarContent>
//         <SidebarFooter>
//           <SidebarMenu>
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild>
//                 <Link
//                   href="/admin/logout"
//                   className="flex  justify-center gap-2 items-center py-5"
//                 >
//                   <LogOut />
//                   <p>Logout</p>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarFooter>
//       </Sidebar>
//     </SidebarProvider>
//   );
// };

// export default AdminSidebar;

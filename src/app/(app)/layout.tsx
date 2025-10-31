'use client'

import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { user } from "@/lib/data"
import {
  Briefcase,
  LayoutDashboard,
  LogOut,
  Settings,
  User as UserIcon,
} from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Badge } from "@/components/ui/badge"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", icon: <LayoutDashboard />, label: "Dashboard" },
    { href: "/gigs", icon: <Briefcase />, label: "Gigs", badge: "12" },
    { href: "/profile", icon: <UserIcon />, label: "Profile" },
    { href: "/settings", icon: <Settings />, label: "Settings" },
  ]

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b">
          <div className="group-data-[collapsible=icon]:hidden p-2">
            <Logo />
          </div>
          <div className="hidden group-data-[collapsible=icon]:block p-2">
            <Logo className="w-8" isIconOnly />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  tooltip={{
                    children: item.label,
                    side: "right",
                    align: "center",
                    className: "ml-1",
                  }}
                  isActive={pathname === item.href}
                >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                       <Badge variant="secondary" className="ml-auto group-data-[collapsible=icon]:hidden">{item.badge}</Badge>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t">
          <div className="flex items-center gap-3 w-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-medium text-sidebar-foreground truncate">
                {user.name}
              </span>
              <span className="text-xs text-sidebar-foreground/70 truncate">
                {user.email}
              </span>
            </div>
             <Button
              variant="ghost"
              size="icon"
              className="ml-auto group-data-[collapsible=icon]:hidden text-sidebar-foreground/70 hover:text-sidebar-accent-foreground hover:bg-sidebar-accent h-8 w-8"
              aria-label="Log out"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between border-b p-3 md:hidden sticky top-0 bg-background z-10">
          <Logo />
          <SidebarTrigger />
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

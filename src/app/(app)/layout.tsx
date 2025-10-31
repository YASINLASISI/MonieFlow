'use client';

import { useAuth } from '@/components/auth-provider';
import { Logo } from '@/components/logo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
} from '@/components/ui/sidebar';
import { user } from '@/lib/data';
import {
  Briefcase,
  LayoutDashboard,
  LogOut,
  Settings,
  User as UserIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const navItems = [
    { href: '/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
    { href: '/gigs', icon: <Briefcase />, label: 'Gigs', badge: '12' },
    { href: '/profile', icon: <UserIcon />, label: 'Profile' },
    { href: '/settings', icon: <Settings />, label: 'Settings' },
  ];

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b">
          <Link href="/dashboard" className="group-data-[collapsible=icon]:hidden p-2">
            <Logo />
          </Link>
          <Link href="/dashboard" className="hidden group-data-[collapsible=icon]:block p-2">
            <Logo className="w-8" isIconOnly />
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  tooltip={{
                    children: item.label,
                    side: 'right',
                    align: 'center',
                    className: 'ml-1',
                  }}
                  isActive={pathname === item.href}
                >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="ml-auto group-data-[collapsible=icon]:hidden"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t">
          <div className="flex items-center gap-3 w-full p-3 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-medium text-sidebar-foreground truncate block">
                {user.name}
              </span>
              <span className="text-xs text-sidebar-foreground/70 truncate block">
                {user.email}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="group-data-[collapsible=icon]:hidden text-sidebar-foreground/70 hover:text-sidebar-accent-foreground hover:bg-sidebar-accent h-8 w-8"
              aria-label="Log out"
              onClick={logout}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between border-b p-3 md:hidden sticky top-0 bg-background z-10">
          <Link href="/dashboard"><Logo /></Link>
          <SidebarTrigger />
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-muted/50">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

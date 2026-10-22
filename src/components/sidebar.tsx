"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  LayoutDashboard,
  CheckSquare,
  ShoppingCart,
  Wallet,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navigationGroups = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    subItems: [{ label: "Overview", href: "/" }],
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    subItems: [
      { label: "All Tasks", href: "/tasks" },
      { label: "Kanban Board", href: "/tasks/board" },
      { label: "Projects", href: "/tasks/projects" },
    ],
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    subItems: [
      { label: "Products", href: "/ecommerce/products" },
      { label: "Orders", href: "/ecommerce/orders" },
      { label: "Customers", href: "/ecommerce/customers" },
    ],
  },
  {
    title: "Finance",
    icon: Wallet,
    subItems: [
      { label: "Transactions", href: "/finance/transactions" },
      { label: "Invoices", href: "/finance/invoices" },
      { label: "Reports", href: "/finance/reports" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({
    Dashboard: true,
    Tasks: false,
    "E-Commerce": false,
    Finance: false,
  });

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="w-64 shrink-0 border-r bg-white h-screen flex flex-col p-4 select-none overflow-y-auto">
      <div className="flex items-center gap-2 px-2 py-3 font-bold text-xl tracking-tight text-neutral-900">
        <span className="text-blue-600">Dev</span>Dashboard
      </div>

      <nav className="flex flex-col gap-2 mt-4">
        {navigationGroups.map((group) => {
          const isOpen = !!openMenus[group.title];
          const GroupIcon = group.icon;

          return (
            <Collapsible
              key={group.title}
              open={isOpen}
              onOpenChange={() => toggleMenu(group.title)}
              className="w-full"
            >
              <CollapsibleTrigger asChild>
                <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <GroupIcon className="h-4 w-4 text-neutral-500" />
                    <span>{group.title}</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? "rotate-0" : "-rotate-90"
                    }`}
                  />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 pr-1 pt-1 space-y-1">
                <div className="border-l border-neutral-200 pl-3 flex flex-col gap-1">
                  {group.subItems.map((subItem) => {
                    const isActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-neutral-100 font-semibold text-neutral-900"
                            : "font-normal text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </nav>
    </aside>
  );
}

import {
  CheckSquare,
  LayoutDashboard,
  ShoppingCart,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
  { label: "E-Commerce", href: "/ecommerce", icon: ShoppingCart },
  { label: "Finance", href: "/finance", icon: Wallet },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white min-h-screen flex flex-col p-4">
      <div className="flex items-center gap-2 px-2 py-4 font-bold text-xl tracking-tight text-neutral-900">
        <span className="text-blue-600">Dev</span>Dashboard
      </div>
      <nav className="flex flex-col gap-1 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

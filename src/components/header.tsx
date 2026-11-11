"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Header() {
  const router = useRouter();

  const logout = () => {
    deleteCookie("auth_session");
    toast.info("Anda telah keluar dari sistem.");
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="h-16 shrink-0 border-b px-6 flex items-center justify-between bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <h1 className="font-semibold text-lg text-neutral-800">Workspace Area</h1>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profil</DropdownMenuItem>
            <DropdownMenuItem>Pengaturan</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logout}
              className="text-red-600 focus:text-red-600 cursor-pointer"
            >
              Keluar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

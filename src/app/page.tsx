"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { initialFinance, initialEcommerce, initialTasks } from "@/data/dummy";
import { CheckSquare, ShoppingBag, Wallet } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-neutral-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6 flex-1">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              Overview
            </h2>
            <p className="text-neutral-500">
              Ringkasan aktivitas dari semua modul.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  To-Do Aktif
                </CardTitle>
                <CheckSquare className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialTasks.length} Tugas
                </div>
                <p className="text-xs text-neutral-500">
                  1 butuh penanganan segera
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Penjualan Toko
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialEcommerce.totalRevenue}
                </div>
                <p className="text-xs text-neutral-500">
                  {initialEcommerce.totalOrders} pesanan selesai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Saldo Dompet
                </CardTitle>
                <Wallet className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialFinance.totalBalance}
                </div>
                <p className="text-xs text-neutral-500">
                  Pemasukan bulan ini: {initialFinance.monthlyIncome}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  To-Do Aktif
                </CardTitle>
                <CheckSquare className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialTasks.length} Tugas
                </div>
                <p className="text-xs text-neutral-500">
                  1 butuh penanganan segera
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Penjualan Toko
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialEcommerce.totalRevenue}
                </div>
                <p className="text-xs text-neutral-500">
                  {initialEcommerce.totalOrders} pesanan selesai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Saldo Dompet
                </CardTitle>
                <Wallet className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialFinance.totalBalance}
                </div>
                <p className="text-xs text-neutral-500">
                  Pemasukan bulan ini: {initialFinance.monthlyIncome}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  To-Do Aktif
                </CardTitle>
                <CheckSquare className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialTasks.length} Tugas
                </div>
                <p className="text-xs text-neutral-500">
                  1 butuh penanganan segera
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Penjualan Toko
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialEcommerce.totalRevenue}
                </div>
                <p className="text-xs text-neutral-500">
                  {initialEcommerce.totalOrders} pesanan selesai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Saldo Dompet
                </CardTitle>
                <Wallet className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialFinance.totalBalance}
                </div>
                <p className="text-xs text-neutral-500">
                  Pemasukan bulan ini: {initialFinance.monthlyIncome}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  To-Do Aktif
                </CardTitle>
                <CheckSquare className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialTasks.length} Tugas
                </div>
                <p className="text-xs text-neutral-500">
                  1 butuh penanganan segera
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Penjualan Toko
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialEcommerce.totalRevenue}
                </div>
                <p className="text-xs text-neutral-500">
                  {initialEcommerce.totalOrders} pesanan selesai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Saldo Dompet
                </CardTitle>
                <Wallet className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialFinance.totalBalance}
                </div>
                <p className="text-xs text-neutral-500">
                  Pemasukan bulan ini: {initialFinance.monthlyIncome}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  To-Do Aktif
                </CardTitle>
                <CheckSquare className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialTasks.length} Tugas
                </div>
                <p className="text-xs text-neutral-500">
                  1 butuh penanganan segera
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Penjualan Toko
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialEcommerce.totalRevenue}
                </div>
                <p className="text-xs text-neutral-500">
                  {initialEcommerce.totalOrders} pesanan selesai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Saldo Dompet
                </CardTitle>
                <Wallet className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialFinance.totalBalance}
                </div>
                <p className="text-xs text-neutral-500">
                  Pemasukan bulan ini: {initialFinance.monthlyIncome}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  To-Do Aktif
                </CardTitle>
                <CheckSquare className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialTasks.length} Tugas
                </div>
                <p className="text-xs text-neutral-500">
                  1 butuh penanganan segera
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Penjualan Toko
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialEcommerce.totalRevenue}
                </div>
                <p className="text-xs text-neutral-500">
                  {initialEcommerce.totalOrders} pesanan selesai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Saldo Dompet
                </CardTitle>
                <Wallet className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialFinance.totalBalance}
                </div>
                <p className="text-xs text-neutral-500">
                  Pemasukan bulan ini: {initialFinance.monthlyIncome}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  To-Do Aktif
                </CardTitle>
                <CheckSquare className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialTasks.length} Tugas
                </div>
                <p className="text-xs text-neutral-500">
                  1 butuh penanganan segera
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Penjualan Toko
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialEcommerce.totalRevenue}
                </div>
                <p className="text-xs text-neutral-500">
                  {initialEcommerce.totalOrders} pesanan selesai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Saldo Dompet
                </CardTitle>
                <Wallet className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialFinance.totalBalance}
                </div>
                <p className="text-xs text-neutral-500">
                  Pemasukan bulan ini: {initialFinance.monthlyIncome}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  To-Do Aktif
                </CardTitle>
                <CheckSquare className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialTasks.length} Tugas
                </div>
                <p className="text-xs text-neutral-500">
                  1 butuh penanganan segera
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Penjualan Toko
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialEcommerce.totalRevenue}
                </div>
                <p className="text-xs text-neutral-500">
                  {initialEcommerce.totalOrders} pesanan selesai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Saldo Dompet
                </CardTitle>
                <Wallet className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialFinance.totalBalance}
                </div>
                <p className="text-xs text-neutral-500">
                  Pemasukan bulan ini: {initialFinance.monthlyIncome}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  To-Do Aktif
                </CardTitle>
                <CheckSquare className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialTasks.length} Tugas
                </div>
                <p className="text-xs text-neutral-500">
                  1 butuh penanganan segera
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Penjualan Toko
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialEcommerce.totalRevenue}
                </div>
                <p className="text-xs text-neutral-500">
                  {initialEcommerce.totalOrders} pesanan selesai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-600">
                  Saldo Dompet
                </CardTitle>
                <Wallet className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-neutral-900">
                  {initialFinance.totalBalance}
                </div>
                <p className="text-xs text-neutral-500">
                  Pemasukan bulan ini: {initialFinance.monthlyIncome}
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

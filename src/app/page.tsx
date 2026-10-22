"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { initialFinance, initialEcommerce, initialTasks } from "@/data/dummy";
import { CheckSquare, ShoppingBag, Wallet } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-neutral-50">
      {/* Sidebar tetap statis di kiri */}
      <Sidebar />

      {/* Area Kanan: Header sticky di atas, konten di-scroll ke bawah */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
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

          {/* Cards Metrik */}
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

          {/* Bagian Konten Tambahan untuk Memperpanjang Halaman (Biar Terasa Scroll-nya) */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Tabel Pesanan Terbaru */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Pesanan Terkini</CardTitle>
                <CardDescription>
                  Aktivitas transaksi toko online.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Pelanggan</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {initialEcommerce.recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.id}
                        </TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Shipped"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Riwayat Transaksi Finansial */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Mutasi Keuangan</CardTitle>
                <CardDescription>
                  Catatan pemasukan & pengeluaran terakhir.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {initialFinance.transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between border-b pb-2 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        {tx.desc}
                      </p>
                      <p className="text-xs text-neutral-500">{tx.date}</p>
                    </div>
                    <span
                      className={`text-sm font-semibold ${tx.type === "income" ? "text-emerald-600" : "text-rose-600"}`}
                    >
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Daftar To-Do Cepat */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>To-Do List Teratas</CardTitle>
              <CardDescription>
                Tugas prioritas yang harus dikerjakan hari ini.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {initialTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-3 border rounded-lg bg-neutral-50/50"
                  >
                    <span className="text-sm font-medium text-neutral-800">
                      {task.title}
                    </span>
                    <div className="flex gap-2">
                      <Badge variant="outline">{task.priority}</Badge>
                      <Badge variant="secondary">{task.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

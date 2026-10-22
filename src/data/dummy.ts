export const initialTasks = [
  {
    id: "1",
    title: "Review PR integrasi Midtrans",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "2",
    title: "Update katalog produk flash sale",
    status: "Pending",
    priority: "Medium",
  },
  {
    id: "3",
    title: "Rekap laporan keuangan bulanan",
    status: "Done",
    priority: "Low",
  },
];

export const initialFinance = {
  totalBalance: "Rp 48.500.000",
  monthlyIncome: "Rp 15.200.000",
  monthlyExpense: "Rp 6.800.000",
  transactions: [
    {
      id: "tx-1",
      desc: "Gaji Bulanan",
      amount: "+Rp 15.000.000",
      type: "income",
      date: "2026-10-01",
    },
    {
      id: "tx-2",
      desc: "Sewa Server Cloud",
      amount: "-Rp 450.000",
      type: "expense",
      date: "2026-10-05",
    },
    {
      id: "tx-3",
      desc: "Perlengkapan Kantor",
      amount: "-Rp 1.250.000",
      type: "expense",
      date: "2026-10-12",
    },
  ],
};

export const initialEcommerce = {
  totalRevenue: "Rp 84.200.000",
  totalOrders: 312,
  recentOrders: [
    {
      id: "ORD-001",
      customer: "Budi Santoso",
      item: "Keyboard Mechanical",
      total: "Rp 1.200.000",
      status: "Shipped",
    },
    {
      id: "ORD-002",
      customer: "Siti Rahma",
      item: "Desk Mat 90x40",
      total: "Rp 150.000",
      status: "Processing",
    },
  ],
};

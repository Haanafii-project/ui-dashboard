import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function AllTasksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          All Tasks
        </h2>
        <p className="text-neutral-500">
          Kelola dan pantau semua daftar pekerjaanmu.
        </p>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Daftar Tugas</CardTitle>
          <CardDescription>
            Konten tabel to-do list akan diletakkan di sini.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-500">
            Halaman All Tasks sedang dipersiapkan.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

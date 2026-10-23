import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          Projects
        </h2>
        <p className="text-neutral-500">Kumpulan proyek dan inisiatif tim.</p>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Daftar Proyek</CardTitle>
          <CardDescription>
            Grid kartu proyek akan diletakkan di sini.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-500">
            Halaman Projects sedang dipersiapkan.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

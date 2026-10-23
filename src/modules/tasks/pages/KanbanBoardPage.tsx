import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function KanbanBoardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          Kanban Board
        </h2>
        <p className="text-neutral-500">
          Visualisasi alur tugas (To-Do, In Progress, Done).
        </p>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Papan Kanban</CardTitle>
          <CardDescription>
            Kolom board drag-and-drop akan diletakkan di sini.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-500">
            Halaman Kanban Board sedang dipersiapkan.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

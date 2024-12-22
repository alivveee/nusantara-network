import AddTaskDialog from './add-dialog';
import TaskTable from './task-table';

export default function TaskPage() {
  return (
    <div>
      <div className="w-full h-[86px] flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-500">Daftar Tugas</h1>
        <AddTaskDialog />
      </div>
      <TaskTable />
    </div>
  );
}

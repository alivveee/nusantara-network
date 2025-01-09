import AddTaskDialog from './add-dialog';
import TaskTable from './task-table';

export default function TaskPage() {
  return (
    <div className="flex flex-col px-5 h-full">
      <div className="w-full h-[86px] py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-700">Daftar Tugas</h1>
        <AddTaskDialog />
      </div>
      <TaskTable />
    </div>
  );
}

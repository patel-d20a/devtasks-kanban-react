type Task = {
  id: number;
  title: string;
};

const tasks: Task[] = [
  { id: 1, title: "Set up project" },
  { id: 2, title: "Install Tailwind CSS" },
  { id: 3, title: "Build TaskColumn component" },
];

export default function TaskColumn() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-80">
      <h2 className="text-xl font-bold mb-4">To Do</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-100 p-3 rounded shadow-sm">
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}

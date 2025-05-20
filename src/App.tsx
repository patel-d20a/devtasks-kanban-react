import TaskColumn from './components/TaskColumn';

function App() {
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        DevTasks - Kanban Board
      </h1>
      <div className="flex justify-center">
        <TaskColumn />
      </div>
    </div>
  );
}

export default App;

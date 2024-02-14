export default function TaskActions() {
  return (
    <div className="mb-14  items-center justify-between mx-4 sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div>
        <button className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold">
          Add Task
        </button>
        <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold ml-3">
          Delete All
        </button>
      </div>
    </div>
  );
}

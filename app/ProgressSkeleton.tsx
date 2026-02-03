export default function ProgressSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          // className="h-16 rounded bg-gray-200 dark:bg-gray-700 w-100"
          className="h-16 rounded bg-gray-200 dark:bg-gray-700 p-1"
        />
      ))}
    </div>
  );
}

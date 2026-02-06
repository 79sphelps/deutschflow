export default function Button({
  onClick,
  disabled
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="border rounded-lg p-3 w-full mb-3 focus:ring-2 focus:ring-red-400"
    />
  );
}

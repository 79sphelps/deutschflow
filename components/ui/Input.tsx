export default function Input({
  name,
  placeholder,
  type,
  onChange,
  value,
}: {
  name: string;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className="border rounded-lg p-3 w-full mb-3 focus:ring-2 focus:ring-red-400"
      required
      aria-required="true"
    />
  );
}

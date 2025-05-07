type Props = {
  history: string[];
  onSelect: (item: string) => void;
};

export default function HistoryPanel({ history, onSelect }: Props) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">History</h3>
      <ul className="space-y-1">
        {history.map((item, i) => (
          <li key={i}>
            <button
              onClick={() => onSelect(item)}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Query {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

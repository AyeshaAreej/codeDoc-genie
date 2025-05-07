type Props = {
  output: string;
};

export default function OutputDisplay({ output }: Props) {
  return (
    <div className="p-4 bg-gray-100 rounded border mt-6 whitespace-pre-wrap font-mono">
      {output || 'Generated documentation will appear here.'}
    </div>
  );
}

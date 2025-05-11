type Props = {
  onUpload: (code: string) => void;
};

export default function FileUpload({ onUpload }: Props) {
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const text = await file.text();
      onUpload(text);
    }
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        accept=".js,.py,.java"
        onChange={handleFile}
        id="file-upload"
        className="hidden"
      />
      <label
        htmlFor="file-upload"
        className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-md cursor-pointer hover:bg-blue-700 transition duration-200"
      >
        Choose File
      </label>
    </div>
  );
}

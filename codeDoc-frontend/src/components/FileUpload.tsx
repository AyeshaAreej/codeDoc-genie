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
    <div >
      <input
        type="file"
        accept=".js,.py,.tsx,.ts,.ipynb..java"
        onChange={handleFile}
        id="file-upload"
        className="hidden"
      />
      <label
        htmlFor="file-upload"
        className="customButton block w-full text-center py-3 px-6 r cursor-pointer  text-slate-700 rounded-md hover:bg-slate-300 transition text-sm font-medium  items-center shadow-sm"
      >


        Select File
      </label>
    </div>
  );
}

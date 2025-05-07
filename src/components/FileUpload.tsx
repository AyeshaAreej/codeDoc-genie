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
      <input type="file" accept=".js,.py,.java" onChange={handleFile} className="mb-4" />
    );
  }
  
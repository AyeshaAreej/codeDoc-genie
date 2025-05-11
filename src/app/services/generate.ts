export default async function handler(req: { body: { code: any; language: any; format: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { result: string; }): void; new(): any; }; }; }) {
    const { code, language, format } = req.body;
    res.status(200).json({
      result: `Generated ${format} for ${language} code:\n\n// Example comment for input code\n${code.slice(0, 100)}...`,
    });
  }
  
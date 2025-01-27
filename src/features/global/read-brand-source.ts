import fs from "fs/promises";
import path from "path";

export async function readBrandSources(brand: string, location: string[] = ["src", "email"]) {
  const dirPath = path.join(process.cwd(), location.map((dir) => dir).join("/"), brand);

  async function getTSXFiles(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const tsxFiles: string[] = [];

    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const nestedFiles = await getTSXFiles(entryPath);
        tsxFiles.push(...nestedFiles);
      } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
        tsxFiles.push(entryPath);
      }
    }

    return tsxFiles;
  }

  try {
    const tsxFilePaths = await getTSXFiles(dirPath);
    const fileContents = await Promise.all(
      tsxFilePaths.map(async (filePath) => {
        try {
          const content = await fs.readFile(filePath, "utf8");
          return { filePath, content };
        } catch (error) {
          console.error(`Error reading file ${filePath}:`, error);
          return { filePath, content: null };
        }
      }),
    );
    return fileContents;
  } catch (error) {
    console.error(`Error reading files in directory ${dirPath}:`, error);
    return [];
  }
}

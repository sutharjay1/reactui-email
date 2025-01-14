import { promises as fs } from "fs";
import path from "path";

export async function readBrandSource(brand: string, fileName: string) {
  const filePath = path.join(process.cwd(), "src", "email", `${brand}`, `${fileName}.tsx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

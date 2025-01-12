import { promises as fs } from "fs";
import path from "path";

export async function readBrandSource(brand: string, componentName: string) {
  try {
    const files = await fs.readdir(process.cwd());
    files.forEach((file) => {
      console.log(file);
    });
  } catch (err) {
    console.error(err);
  }

  const filePath = path.join(process.cwd(), "src", "email", `${brand}`, `${componentName}.tsx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

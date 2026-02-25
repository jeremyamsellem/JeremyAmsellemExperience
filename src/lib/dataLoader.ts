const dataCache: Record<string, string> = {};

export async function loadMarkdownFile(filename: string): Promise<string> {
  if (dataCache[filename]) return dataCache[filename];
  
  const response = await fetch(`/data/${filename}`);
  if (!response.ok) throw new Error(`Failed to load ${filename}`);
  const text = await response.text();
  dataCache[filename] = text;
  return text;
}

export async function loadAllData(): Promise<{
  resume: string;
  skills: string;
  portfolio: string;
  projects: string;
}> {
  const [resume, skills, portfolio, projects] = await Promise.all([
    loadMarkdownFile("resume.md"),
    loadMarkdownFile("skills.md"),
    loadMarkdownFile("portfolio.md"),
    loadMarkdownFile("projects.md"),
  ]);
  return { resume, skills, portfolio, projects };
}

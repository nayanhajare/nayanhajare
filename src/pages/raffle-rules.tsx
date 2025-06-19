import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'legal', '[filename].md');
  const content = fs.readFileSync(filePath, 'utf-8');
  return { props: { content } };
}

export default function Page({ content }: { content: string }) {
  return (
    <div className="p-4">
      <script src="https://cdn.alatreeventures.com/raffle-widget.js" />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

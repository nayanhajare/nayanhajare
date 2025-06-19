// pages/terms.tsx
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'legal', 'terms_placeholder.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  return { props: { content } };
}

export default function Terms({ content }: { content: string }) {
  return (
    <div className="p-4">
      <div dangerouslySetInnerHTML={{ __html: `<script src="https://cdn.alatreeventures.com/raffle-widget.js"></script>` }} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

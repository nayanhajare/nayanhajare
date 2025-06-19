import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Script from 'next/script';
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'legal', '[filename].md');
  const content = fs.readFileSync(filePath, 'utf-8');
  return { props: { content } };
}


export default function RaffleRules({ content }: { content: string }) {
  return (
    <div className="p-4">
      <Script src="https://cdn.alatreeventures.com/raffle-widget.js" strategy="afterInteractive" />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}


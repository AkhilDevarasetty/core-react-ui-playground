import type { CodeBlockProps } from "../types";

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="px-6 pb-6">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

import { useState } from "react";
import type { ExampleCardProps } from "../types";
import { CodeBlock } from "./CodeBlock";

export const ExampleCard: React.FC<ExampleCardProps> = ({ example, index }) => {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-shadow hover:shadow-md"
      role="article"
      aria-labelledby={`example-title-${index}`}
    >
      <div className="p-6 border-b border-gray-200">
        <h3 
          id={`example-title-${index}`}
          className="text-xl font-semibold text-gray-900 mb-2"
        >
          {example.title}
        </h3>
        <p className="text-gray-600 mb-4">{example.description}</p>

        {/* Component Preview */}
        <div 
          className="p-6 bg-gray-50 border border-gray-200 rounded-lg"
          role="img"
          aria-label={`Preview of ${example.title}`}
        >
          <div className="flex items-center justify-center min-h-[60px]">
            {example.component}
          </div>
        </div>
      </div>

      {/* Code Toggle */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <button
          onClick={toggleCode}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md p-1"
          aria-expanded={showCode}
          aria-controls={`code-block-${index}`}
        >
          <svg
            className={`w-4 h-4 transition-transform ${showCode ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          {showCode ? "Hide Code" : "Show Code"}
        </button>
      </div>

      {/* Code Block */}
      <div id={`code-block-${index}`}>
        <CodeBlock code={example.code} isVisible={showCode} />
      </div>
    </div>
  );
};

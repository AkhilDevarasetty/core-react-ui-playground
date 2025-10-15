import type { ComponentShowcaseProps } from "../types";
import { ExampleCard } from "./ExampleCard";

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  componentData,
}) => {
  return (
    <main className="flex-1 overflow-auto" role="main">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded">
              {componentData.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {componentData.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {componentData.description}
          </p>
        </header>

        {/* Examples */}
        <section 
          className="space-y-8"
          aria-label={`${componentData.name} examples`}
        >
          {componentData.examples.map((example, index) => (
            <ExampleCard
              key={`${componentData.name}-example-${index}`}
              example={example}
              index={index}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

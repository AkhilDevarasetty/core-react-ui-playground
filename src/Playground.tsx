'use client';
import { useState } from 'react';
import PlaygroundHeader from './playground/PlaygroundHeader';
import PlaygroundSidebar from './playground/PlaygroundSidebar';
import OverviewPage from './playground/OverviewPage';
import ComponentDetailPage from './playground/ComponentDetailPage';
import { componentDemos } from './playground/componentData';

const Playground = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'Form Elements': true,
    'Feedback': true,
    'Layout': true,
    'Data Display': true,
  });

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSelectComponent = (componentName: string | null) => {
    setSelectedComponent(componentName);
  };

  const selectedComponentData = selectedComponent 
    ? componentDemos.find(c => c.name === selectedComponent)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <PlaygroundHeader version="v0.1" />

      <div className="grid w-full h-[calc(100vh-4rem)] grid-cols-[30%_70%] lg:grid-cols-[20%_80%]">
        <PlaygroundSidebar
          componentDemos={componentDemos}
          selectedComponent={selectedComponent}
          expandedSections={expandedSections}
          onSelectComponent={handleSelectComponent}
          onToggleSection={toggleSection}
        />

        <main className="p-6 overflow-y-auto">
          {selectedComponent === null ? (
            <OverviewPage
              componentDemos={componentDemos}
              onSelectComponent={handleSelectComponent}
            />
          ) : selectedComponentData ? (
            <ComponentDetailPage
              component={selectedComponentData}
              copiedCode={copiedCode}
              onCopyCode={copyToClipboard}
            />
          ) : (
            <div className="text-center text-gray-500">
              Component not found
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Playground;

import { useState } from "react";
import type { SidebarProps } from "../types";

export const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategory,
  selectedComponent,
  onCategorySelect,
  onComponentSelect,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md border border-gray-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 
          w-64 bg-white shadow-lg border-r border-gray-200 flex-shrink-0
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        role="navigation"
        aria-label="Component navigation"
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-2xl" role="img" aria-label="React logo">
              ⚛️
            </span>
            <h1 className="text-xl font-bold text-gray-800">UI Playground</h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            {categories.map((category) => (
              <div key={category.name}>
                <h2
                  className={`text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3 cursor-pointer hover:text-indigo-600 transition-colors focus:outline-none focus:text-indigo-600 ${
                    selectedCategory === category.name ? "text-indigo-600" : ""
                  }`}
                  onClick={() => {
                    onCategorySelect(category.name);
                    setIsMobileMenuOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onCategorySelect(category.name);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={selectedCategory === category.name}
                >
                  {category.name}
                </h2>
                <ul className="space-y-2" role="list">
                  {category.components.map((component) => (
                    <li key={component} role="listitem">
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                          selectedComponent === component
                            ? "bg-indigo-100 text-indigo-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                        onClick={() => {
                          onComponentSelect(category.name, component);
                          setIsMobileMenuOpen(false);
                        }}
                        aria-current={selectedComponent === component ? "page" : undefined}
                      >
                        {component}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

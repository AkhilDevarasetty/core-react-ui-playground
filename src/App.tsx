import { Sidebar, ComponentShowcase, Header, Overview } from './components';
import { categories } from './data/components';
import { useComponentNavigation } from './utils/useComponentNavigation';
import './App.css';

function App() {
  const {
    selectedCategory,
    selectedComponent,
    currentComponentData,
    handleComponentSelect,
    handleOverviewSelect,
  } = useComponentNavigation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          selectedComponent={selectedComponent}
          onComponentSelect={handleComponentSelect}
          onOverviewSelect={handleOverviewSelect}
        />
        <div className="flex-1 w-full">
          {selectedCategory === 'Overview' ? (
            <Overview onComponentSelect={handleComponentSelect} />
          ) : (
            <ComponentShowcase componentData={currentComponentData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

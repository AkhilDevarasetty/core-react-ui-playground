import { Sidebar, ComponentShowcase } from './components';
import { categories } from './data/components';
import { useComponentNavigation } from './utils/useComponentNavigation';
import './App.css';

function App() {
  const {
    selectedCategory,
    selectedComponent,
    currentComponentData,
    handleCategorySelect,
    handleComponentSelect,
  } = useComponentNavigation();

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        selectedComponent={selectedComponent}
        onCategorySelect={handleCategorySelect}
        onComponentSelect={handleComponentSelect}
      />
      <div className="flex-1 lg:ml-0">
        <ComponentShowcase componentData={currentComponentData} />
      </div>
    </div>
  );
}

export default App;

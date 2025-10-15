import { useState, useCallback } from 'react';
import { componentDataMap } from '../data/components';

export const useComponentNavigation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Form Elements');
  const [selectedComponent, setSelectedComponent] = useState<string>('Button');

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleComponentSelect = useCallback((category: string, component: string) => {
    setSelectedCategory(category);
    setSelectedComponent(component);
  }, []);

  const currentComponentData = componentDataMap[selectedComponent] || componentDataMap['Button'];

  return {
    selectedCategory,
    selectedComponent,
    currentComponentData,
    handleCategorySelect,
    handleComponentSelect,
  };
};

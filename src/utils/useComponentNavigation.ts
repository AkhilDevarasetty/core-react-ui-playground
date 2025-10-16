import { useState, useCallback } from 'react';
import { componentDataMap } from '../data/components';

export const useComponentNavigation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Overview');
  const [selectedComponent, setSelectedComponent] = useState<string>('');

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
    setSelectedComponent('');
  }, []);

  const handleComponentSelect = useCallback((category: string, component: string) => {
    setSelectedCategory(category);
    setSelectedComponent(component);
  }, []);

  const handleOverviewSelect = useCallback(() => {
    setSelectedCategory('Overview');
    setSelectedComponent('');
  }, []);

  const currentComponentData = componentDataMap[selectedComponent] || componentDataMap['Button'];

  return {
    selectedCategory,
    selectedComponent,
    currentComponentData,
    handleCategorySelect,
    handleComponentSelect,
    handleOverviewSelect,
  };
};

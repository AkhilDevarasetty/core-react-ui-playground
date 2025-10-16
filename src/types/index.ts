export interface Example {
  title: string;
  description: string;
  component: React.ReactElement;
  code: string;
}

export interface ComponentData {
  name: string;
  description: string;
  category: string;
  examples: Example[];
}

export interface Category {
  name: string;
  components: string[];
}

export interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  selectedComponent: string;
  onComponentSelect: (category: string, component: string) => void;
  onOverviewSelect: () => void;
}

export interface ComponentShowcaseProps {
  componentData: ComponentData;
}

export interface CodeBlockProps {
  code: string;
  isVisible: boolean;
}

export interface ExampleCardProps {
  example: Example;
  index: number;
}

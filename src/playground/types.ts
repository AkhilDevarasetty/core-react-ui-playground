// Types for the playground components
import type { ReactElement } from 'react';

export interface ComponentExample {
  title: string;
  description: string;
  component: ReactElement;
  code: string;
}

export interface ComponentDemo {
  name: string;
  description: string;
  category: string;
  examples: ComponentExample[];
}

export interface PlaygroundState {
  selectedComponent: string | null;
  copiedCode: string | null;
  expandedSections: { [key: string]: boolean };
}

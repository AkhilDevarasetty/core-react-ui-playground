# 🎨 Core React UI Playground

A modern, interactive playground for showcasing React UI component libraries with live previews, code examples, and responsive design.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple?logo=vite)

## ✨ Features

- 🎯 **Interactive Component Previews** - Live demonstrations of UI components
- 📱 **Responsive Design** - Mobile-friendly with collapsible sidebar navigation
- 🎨 **Custom Theming** - Tailwind CSS with custom color configurations
- 📝 **Code Examples** - Syntax-highlighted code snippets with toggle functionality
- 🏗️ **Scalable Architecture** - Modular component structure for easy expansion
- ♿ **Accessibility** - ARIA labels, keyboard navigation, and focus management
- 🔍 **Component Categories** - Organized by Form Elements, Feedback, and Data Display

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/core-react-ui-playground.git
   cd core-react-ui-playground
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── ComponentShowcase.tsx
│   ├── ExampleCard.tsx # Individual component examples
│   └── CodeBlock.tsx   # Code display component
├── data/
│   └── components.tsx  # Component data and examples
├── types/
│   └── index.ts        # TypeScript type definitions
├── utils/
│   └── useComponentNavigation.ts # Navigation hook
└── App.tsx            # Main application component
```

## 🎨 Available Components

### Form Elements
- **Button** - Versatile button component with customizable styles

### Feedback
- **Tooltip** - Interactive tooltips for contextual information
- **ToastPopUp** - Transient notifications for user feedback
- **Banner** - Alert banners with different variants

### Data Display
- **Badge** - Status indicators with multiple colors and shapes

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework with custom configurations
- **Vite** - Fast build tool and development server
- **React Icons** - Icon library for UI elements

## 📦 Adding New Components

1. **Import your component** in `src/data/components.tsx`
2. **Add component data** to the `componentDataMap`
3. **Update categories** in the `categories` array
4. **Create examples** with live components and code snippets

Example:
```typescript
YourComponent: {
  name: "YourComponent",
  description: "Description of your component",
  category: "Category Name",
  examples: [
    {
      title: "Basic Example",
      description: "Simple usage example",
      component: <YourComponent prop="value" />,
      code: `<YourComponent prop="value" />`
    }
  ]
}
```

## 🏗️ Architecture Decisions

### Component Separation
- **Modular Design** - Each UI element is a separate component
- **Type Safety** - Comprehensive TypeScript interfaces
- **Reusability** - Components designed for easy reuse and extension

### State Management
- **Custom Hooks** - `useComponentNavigation` for centralized navigation logic
- **Local State** - Component-level state for UI interactions
- **Props Drilling** - Minimal and intentional prop passing

### Styling Strategy
- **Tailwind CSS** - Utility-first approach for rapid development
- **Custom Colors** - Extended Tailwind config for brand consistency
- **Responsive Design** - Mobile-first approach with breakpoint utilities

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for lightning-fast development
- Styled with [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Component library: [@akhil_dev/core-react-ui-component-library](https://www.npmjs.com/package/@akhil_dev/core-react-ui-component-library)

---

<p align="center">
  Made with ❤️
</p>

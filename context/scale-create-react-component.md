Create a REACT version of the selected Figma component and follow these steps to complete the process:

Goals:
- Use Figma MCP to pull in component properties, variants and variables
- Remap to semantic variables via local CSS files found in directory `./src/tokens`
- Use Feather icons via `react-feather`
- Enable isolated development and testing via Storybook
 
Conventions:
- Component structure follows Figma component
- Strict TypeScript usage
- Accessibility (ARIA) built-in where appropriate

Imports:
- import variables from './src/tokens'; // Local CSS variables
- import { Icon } from 'react-feather'; // Feather Icons
- import PropTypes from 'prop-types';

Component Directory Structure:
/src/components/
   └── Button/
         ├── Button.tsx
         ├── Button.module.css
         ├── Button.stories.tsx
         ├── Button.test.tsx
         └── index.ts

Usage Example:
import { Button } from '@/components/Button';
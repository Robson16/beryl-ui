# @beryl-ui/react

## 2.2.2

### Patch Changes

- Fixed styling issues when composing the `Box` component (e.g., `styled(Box)`) by implementing `forwardRef`. This ensures that `className` and refs are passed down correctly to the underlying DOM element.

## 2.2.1

### Patch Changes

- Add support for React 19

## 2.2.0

### Minor Changes

- # New Components and Infrastructure Improvements

  ### @beryl-ui/react
  - **New Components:**
    - Added `Tooltip`: A floating hint component supporting global control via `TooltipProvider`.
    - Added `Toast`: A complete notification system including `ToastProvider` and the `useToast` hook.
  - **Improvements & Fixes:**
    - Added `forwardRef` support to `Button`, `Text` and `Heading` components. This ensures proper integration with Radix UI primitives (e.g., Tooltip Trigger).
    - Improved `Button` typing to explicitly extend `ComponentProps<'button'>`, fixing issues with intrinsic attributes (such as `disabled`).
    - Updated build configuration (`tsconfig` and `tsup`) to resolve type portability issues (`TS2742`) within the Monorepo.

  ### @beryl-ui/eslint-config
  - Fixed plugin dependency resolution by moving `eslint-plugin-prettier` to `dependencies`. This ensures the Linter works correctly across all packages.

  ### General
  - Minor adjustments to build scripts and TypeScript configurations to support the new structure.

### Patch Changes

- Updated dependencies
  - @beryl-ui/tokens@2.1.2

## 2.1.2

### Patch Changes

- Docs corrections
- Updated dependencies
  - @beryl-ui/tokens@2.1.1

## 2.1.1

### Patch Changes

- Add fixes for some styled-components

## 2.1.0

### Minor Changes

- New project name - Beryl UI

### Patch Changes

- Updated dependencies
  - @beryl-ui/tokens@2.1.0

## 2.0.0

### Major Changes

- New name for the packages

### Patch Changes

- Updated dependencies
  - @beryl-ui/tokens@2.0.0

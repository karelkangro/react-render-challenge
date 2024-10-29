# Slide Deck Rendering Optimization

This document provides a high-level summary of how to structure the fitting logic for components in a slide deck to maximize their size, ensure consistent scaling, and avoid rendering interference.

## Implementation Steps

1. Define the data model and API response structure, fake data from mockData.ts
2. Create the Composite Layout Manager component that receives the slide data and manages the overall rendering
3. Create the Layout Column component that renders the components within each column
4. Create the Component Wrapper component that scales and renders individual components
5. Implement the specific component types (e.g., Text, Image, Bullet List) with their own fitting logic if required
6. Optimize rendering performance using techniques like React.memo, and debouncing

We can achieve the desired goals of maximizing component size, ensuring consistent scaling  and avoiding rendering interference by:
- breaking down the responsibilities into separate components
- managing the scaling and rendering logic appropriately, with debouncing

## Data Model

- First goal was to define a clear data model for the slide deck, including fixed dimensions for the slide size
- Each slide contains an array of columns
- Each column contains an array of components with properties like type, content, position, and style
- Component position is defined relative to the column (percentage-based)

## Composite Layout Manager

- Receives the slide data from the API, which is either coming straight from AI or using middleware to normalize before rendering anything on screen
- Calculates the scale factor based on the slide dimensions and the container size
- Passes the scale factor and column data to each Layout Column component
- Listens for window resize events and recalculates the scale factor
- Triggers a re-render of the Layout Columns when the scale factor changes

## Layout Column

- Receives the column data and scale factor from the Composite Layout Manager
- Renders each component within the column using the Component Wrapper
- Passes the scale factor, column dimensions, and component data to each Component Wrapper

## Component Wrapper

- Receives the component data, scale factor, and column dimensions from the Layout Column
- Calculates the component's position and size based on its relative position and the column dimensions
- Scales the component based on the provided scale factor
- Renders the specific component type (e.g., Text, Image, Bullet List) with the scaled dimensions and styling

## Scaling Logic

- Components are scaled relative to their parent column's dimensions
- The scale factor is calculated based on the ratio of the container size to the slide dimensions
- All components within a column are scaled by the same factor to maintain consistency
- Components with specific fitting logic (e.g., resizing title height) handle their own scaling within their defined boundaries

## Rendering Optimization

- Use React's key prop to efficiently update and re-render components
- Implement React.memo to prevent unnecessary re-renders
- Debounce the window resize event to avoid excessive calculations and re-renders

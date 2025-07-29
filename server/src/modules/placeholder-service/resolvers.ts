/**
 * Sample data for placeholder service
 */
const placeholders = [
  {
    id: '1',
    title: 'Sample Placeholder',
    description: 'This is a sample placeholder item',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Another Placeholder',
    description: 'This is another sample placeholder item',
    createdAt: new Date().toISOString(),
  },
];

/**
 * GraphQL resolvers for Placeholder service
 */
export const placeholderResolvers = {
  Query: {
    placeholder: (_: any, { id }: { id: string }) => {
      return placeholders.find(p => p.id === id);
    },
    placeholders: () => {
      return placeholders;
    },
  },
  Mutation: {
    createPlaceholder: (_: any, { title, description }: { title: string; description: string }) => {
      const newPlaceholder = {
        id: String(placeholders.length + 1),
        title,
        description,
        createdAt: new Date().toISOString(),
      };
      placeholders.push(newPlaceholder);
      return newPlaceholder;
    },
    updatePlaceholder: (_: any, { id, title, description }: { id: string; title?: string; description?: string }) => {
      const placeholder = placeholders.find(p => p.id === id);
      if (!placeholder) return null;

      if (title !== undefined) placeholder.title = title;
      if (description !== undefined) placeholder.description = description;

      return placeholder;
    },
    deletePlaceholder: (_: any, { id }: { id: string }) => {
      const index = placeholders.findIndex(p => p.id === id);
      if (index === -1) return false;

      placeholders.splice(index, 1);
      return true;
    },
  },
};

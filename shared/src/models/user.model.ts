import { gql } from 'graphql-tag';

/**
 * GraphQL type definitions for Placeholder model
 */
export const placeholderTypeDefs = gql`
  type Placeholder {
    id: ID!
    title: String!
    description: String!
    createdAt: String!
  }

  type Query {
    placeholder(id: ID!): Placeholder
    placeholders: [Placeholder!]!
  }

  type Mutation {
    createPlaceholder(title: String!, description: String!): Placeholder!
    updatePlaceholder(id: ID!, title: String, description: String): Placeholder
    deletePlaceholder(id: ID!): Boolean!
  }
`;

/**
 * TypeScript interface for Placeholder entity
 */
export interface IPlaceholder {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

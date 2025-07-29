import { gql } from 'graphql-tag';

/**
 * GraphQL type definitions for Placeholder service
 */
export const placeholderTypeDefs = gql`
  type Placeholder {
    id: ID!
    title: String!
    description: String!
    createdAt: String!
  }

  extend type Query {
    placeholder(id: ID!): Placeholder
    placeholders: [Placeholder!]!
  }

  extend type Mutation {
    createPlaceholder(title: String!, description: String!): Placeholder!
    updatePlaceholder(id: ID!, title: String, description: String): Placeholder
    deletePlaceholder(id: ID!): Boolean!
  }
`;

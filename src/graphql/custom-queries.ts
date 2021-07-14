export const listItemLists = /* GraphQL */ `
  query ListItemLists(
    $filter: ModelItemListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        order
        createdAt
        pantryDetails {
          ingredients {
            quantity
            unit
            ingredient
          }
        }
        shoppingDetails {
          ingredients {
            quantity
            unit
            ingredient
          }
        }
        owner
      }
      nextToken
    }
  }
`;
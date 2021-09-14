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
        pantryDetails {
          ingredients {
            id
            quantity
            unit
            ingredient
          }
        }
        shoppingDetails {
          ingredients {
            id
            quantity
            unit
            ingredient
            checked
          }
        }
      }
      nextToken
    }
  }
`;
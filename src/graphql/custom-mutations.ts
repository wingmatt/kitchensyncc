export const updateItemList = /* GraphQL */ `
  mutation UpdateItemList(
    $input: UpdateItemListInput!
    $condition: ModelItemListConditionInput
  ) {
    updateItemList(input: $input, condition: $condition) {
      id
      title
      pantryDetails {
        ingredients {
          ingredient
        }
      }
      shoppingDetails {
        ingredients {
          ingredient
        }
      }
      type
      order
      createdAt
      updatedAt
      owner
    }
  }
`;
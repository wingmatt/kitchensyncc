export const updateItemList = /* GraphQL */ `
  mutation UpdateItemList(
    $input: UpdateItemListInput!
    $condition: ModelItemListConditionInput
  ) {
    updateItemList(input: $input, condition: $condition) {
      id
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
    }
  }
`;
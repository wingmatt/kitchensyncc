export const createItemList = `
mutation ($title: String!, $type: String!) {
  createItemList(input: {title: $title, type: $type}) {
    id
    title
    type
    order 
  } 
}
`
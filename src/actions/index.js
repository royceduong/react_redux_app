export function selectBook(book){
    //selectBook is an ActionCreator, it needs to return an action
    //an object with a type property.

    //Action has 2 properties
    //Type and Payload
    return {
        //Type is always upper-case
        type: 'BOOK_SELECTED', 
        payload: book
    }
}
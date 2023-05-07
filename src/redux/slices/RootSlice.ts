import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root", 
    initialState: {
        book_title: "Book Title",
        author_name: "Author Name",
        no_of_pages: "No of Pages",
        book_edition: "Book Edition",
        book_language: "Book Language",
        book_type: "Book Type",
        isbn: "ISBN",
    }, 
    reducers:{
        //action is submitted eleswhere - written to state.name
        chooseBookTitle: (state, action) => {state.book_title = action.payload}, //We are setting the input to the state.name
        chooseAuthorName: (state, action) => {state.author_name = action.payload},
        chooseNoOfPages: (state, action) => {state.no_of_pages = action.payload},
        chooseBookEdition: (state, action) => {state.book_edition = action.payload},
        chooseBookLanguage: (state, action) => {state.book_language = action.payload},
        chooseBookType: (state, action) => {state.book_type = action.payload},
        chooseISBN: (state, action) => {state.isbn = action.payload},

    }
})

export const reducer = rootSlice.reducer;
export const {chooseBookTitle, chooseAuthorName, chooseNoOfPages, chooseBookEdition, chooseBookLanguage, chooseBookType, chooseISBN } = rootSlice.actions
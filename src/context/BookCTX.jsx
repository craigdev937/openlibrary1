import React from "react";

const URL = "http://openlibrary.org/search.json?title=";

export const BookContext = React.createContext();

export const BookProvider = ({children}) => {
    const [searchTerm, setSerchTerm] = 
        React.useState("the lost world");
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [resultTitle, setResultTitle] = React.useState("");

    const fetchBooks = React.useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${URL}${searchTerm}`);
            if (!res.ok) throw new Error(res.statusText);
            const docs = await res.json();
            console.log(docs);
            if (docs) {
                const newBooks = docs.slice(0, 20)
                .map((bookSingle) => {
                    const {key, author_name, cover_i, 
                        edition_count, first_publish_year, 
                        title } = bookSingle;
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);
                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("There is NO result found!");
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            };
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    React.useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <BookContext.Provider value={{
            loading, books, setSerchTerm, 
            resultTitle, setResultTitle
        }}>
            {children}
        </BookContext.Provider>
    );
};

export const useGlobalContext = () => {
    return React.useContext(BookContext);
};



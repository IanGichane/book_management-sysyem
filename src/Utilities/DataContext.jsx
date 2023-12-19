import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "./url";

const DataContext = createContext();


const data = [
  {
    title: "The Adventure of the Speckled Band",
    author: "Arthur Conan Doyle",
    genre: "Fiction",
    sub_genre: "Adventure",
    publication_year: 1892,
    ISBN: "123-456-7890",
    copies_available: 7,
    synopsis:
      "Sherlock Holmes investigates the mysterious death of a woman in a locked room.",
    cover_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sherlock_Holmes_The_Adventure_of_the_Speckled_Band.jpg/462px-Sherlock_Holmes_The_Adventure_of_the_Speckled_Band.jpg",
  },
];


export const DataContextProvider = ({ children }) => {

  const [borrow, setBorrow] = useState(null)
  const [reserve, setReserve] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [books, setBooks] = useState(data);

  
  useEffect(() => {
    const handleFetch = () => {
      fetch(`${BASE_URL}/books`)
        .then((res) => res.json())
        .then((books) => setBooks(books))
        .catch((err) => console.log(err));
    };

    handleFetch(); 
  }, []);
  return (
    <DataContext.Provider value={{ books, setBooks }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;



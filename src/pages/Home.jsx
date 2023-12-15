import { useEffect, useState,useContext } from "react";


import { BookCard } from "../components/Body/BookCard";
import {  SimpleGrid } from "@chakra-ui/react";
import { Search } from "../components/Body/Search";
import DataContext from "../Utilities/DataContext";


export const Home = () => {
	
   const [searchTerm, setSearchTerm] = useState("");
   const { books, setBooks } = useContext(DataContext);


const searchedBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <>
      <Search
        searchTerm={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={5}>
        {searchedBooks.map((book, index) => (
          <BookCard key={book.ISBN} {...book} />
        ))}
      </SimpleGrid>
    </>
  );
};

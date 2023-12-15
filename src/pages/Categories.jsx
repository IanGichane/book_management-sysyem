import { useEffect, useState, useContext } from "react";
import DataContext from "../Utilities/DataContext";
import { BookCard } from "../components/Body/BookCard";

import { Divider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Tag, HStack, SimpleGrid } from "@chakra-ui/react";




  

export const Categories = () => {
const fiction_sub_genre = [
  "Adventure",
  "Mystery",
  "Science Fiction",
  "Historical Fiction",
  "Fantasy",
  "Romance",
  "Horror",
];
const Hobbies = ["DIY Guides", "Craft Books"];

const Technology = ["Programming Books", "Tech Guides"];

const business_and_economic = ["Business Strategy", "Economic Theory"];

const Health = ["Fitness", "Nutrition", "Mental Health"];

const Education = ["Teaching Guides", "Educational Theory"];

  const { books, setBooks } = useContext(DataContext);
  const [selectedGenre, setSelectedGenre] = useState(books);

  function handleSelectGenre(selectedGenre) {
  alert(selectedGenre )
  
}

  return (
    <>
      {/* // fiction */}
      <Heading>Fiction</Heading>
      <HStack spacing={4}>
        {fiction_sub_genre.map((g, index) => (
          <Tag key={index} onClick={() => handleSelectGenre(g)}>
            {g}
          </Tag>
        ))}
      </HStack>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={5}>
        {selectedGenre
          .filter((book) => book.genre === "Fiction")
          .map((book) => (
            <ul key={book.ISBN}>
              <BookCard {...book} />
            </ul>
          ))}
      </SimpleGrid>
      <Divider />
      {/* // Hobbies */}
      <Heading>Hobbies</Heading>
      <HStack spacing={4}>
        {Hobbies.map((g, index) => (
          <Tag key={index}>{g}</Tag>
        ))}
      </HStack>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={5}>
        {selectedGenre
          .filter((book) => book.genre === "Hobbies")
          .map((book) => (
            <ul key={book.ISBN}>
              <BookCard {...book} />
            </ul>
          ))}
      </SimpleGrid>
      <Divider />
      {/* // Technology */}
      <Heading>Technology</Heading>
      <HStack spacing={4}>
        {Technology.map((g, index) => (
          <Tag key={index} onClick={() => handleSelectGenre(g)}>
            {g}
          </Tag>
        ))}
      </HStack>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={5}>
        {selectedGenre
          .filter((book) => book.genre === "Technology")
          .map((book) => (
            <ul key={book.ISBN}>
              <BookCard {...book} />
            </ul>
          ))}
      </SimpleGrid>
      <Divider />
      {/* // business_and_economic */}
      <Heading>Business and economic</Heading>
      <HStack spacing={4}>
        {business_and_economic.map((g, index) => (
          <Tag key={index} onClick={() => handleSelectGenre(g)}>
            {g}
          </Tag>
        ))}
      </HStack>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={5}>
        {selectedGenre
          .filter((book) => book.genre === "business_and_economic")
          .map((book) => (
            <ul key={book.ISBN}>
              <BookCard {...book} />
            </ul>
          ))}
      </SimpleGrid>
      <Divider />
    </>
  );
};



// const non_Fiction_sub_genre = [
//   "History",
//   "Biography",
//   "Autobiography",
//   "Science",
//   "Self-Help",
//   "Travel",
//   "Philosophy",
// ];

// const Reference = ["Dictionaries", "Encyclopedias", "Atlases", "Almanacs"];

// const Poetry = ["Anthologies", "Individual Poet Collections"];

// const Drama = ["Plays", "Scripts"];

// const Childrens_books = [
//   "Picture Books",
//   "Early Readers",
//   "Middle-Grade Books",
//   "Young Adult (YA) Books",
// ];

// const novels_and_comics = ["Superhero Comics", "Graphic Novels", "Manga"];

// const Science = ["Physics", "Biology", "Astronomy", "Environment"];

// const Religion = ["Religious Texts", "Spiritual Guides"];

// const Photography_and_art = ["Art History", "Photography Collections"];

// const Cookbooks = ["Recipes and Culinary Guides"];

// const Hobbies = ["DIY Guides", "Craft Books"];

// const Technology = ["Programming Books", "Tech Guides"];

// const business_and_economic = ["Business Strategy", "Economic Theory"];

// const Health = ["Fitness", "Nutrition", "Mental Health"];

// const Education = ["Teaching Guides", "Educational Theory"];
//  const filteredBooks = selectedGenre
//    ? books.filter((book) => book.genre === selectedGenre)
//    : books;


      // <Heading>Adventure</Heading>
      // {books
      //   .filter((book) => book.genre === "Adventure")
      //   .map((book, index) => (
      //     <ul>
      //       <h1>{book.title}</h1>
      //     </ul>
      //   ))}
      // <Divider />
      // <Heading>Mystery</Heading>
      // {books
      //   .filter((book) => book.genre === "mystery")
      //   .map((book, index) => (
      //     <ul>
      //       <h1>{book.title}</h1>
      //     </ul>
      //   ))}
      // <Divider />
      // <Heading>Crime</Heading>
      // {books
      //   .filter((book) => book.genre === "Crime")
      //   .map((book, index) => (
      //     <ul>
      //       <BookCard key={book.ISBN} {...book} />
      //     </ul>
      //   ))}
      // <Divider />
      // <Heading>Crime</Heading>

      // {books
      //   .filter((book) => book.genre === "Crime")
      //   .map((book, index) => (
      //     <ul>
      //       <h1>{book.title}</h1>
      //     </ul>
      //   ))}
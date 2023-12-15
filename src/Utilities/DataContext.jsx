import { createContext, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

  const [borrow, setBorrow] = useState(null)
  const [reserve, setReserve] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
    const [books, setBooks] = useState([
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
      {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "Fiction",
        sub_genre: "Mystery",
        publication_year: 2005,
        ISBN: "234-567-8901",
        copies_available: 5,
        synopsis:
          "A journalist and a computer hacker investigate a wealthy family suspected of corruption.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/d/dc/Dragon_Tattoo_ver2.jpg",
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Fiction",
        sub_genre: "Science Fiction",
        publication_year: 1965,
        ISBN: "345-678-9012",
        copies_available: 10,
        synopsis:
          "In the distant future, noble families control planets and navigate political intrigue over a valuable substance called 'spice.'",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Dune_Chardin_cover.jpg",
      },
      {
        title: "The Book Thief",
        author: "Markus Zusak",
        genre: "Fiction",
        sub_genre: "Historical Fiction",
        publication_year: 2005,
        ISBN: "456-789-0123",
        copies_available: 8,
        synopsis:
          "During World War II in Germany, a young girl steals books and shares them with her neighbors and a Jewish man hiding in her basement.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/6/6a/The_Book_Thief_by_Markus_Zusak_book_cover.jpg",
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fiction",
        sub_genre: "Fantasy",
        publication_year: 1937,
        ISBN: "567-890-1234",
        copies_available: 12,
        synopsis:
          "The Hobbit follows the journey of Bilbo Baggins, a hobbit who is reluctantly swept into an epic quest to reclaim treasure guarded by the dragon Smaug.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/3/3a/TheHobbit_FirstEdition.jpg",
      },
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
      {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "Fiction",
        sub_genre: "Mystery",
        publication_year: 2005,
        ISBN: "234-567-8901",
        copies_available: 5,
        synopsis:
          "A journalist and a computer hacker investigate a wealthy family suspected of corruption.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/d/dc/Dragon_Tattoo_ver2.jpg",
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Fiction",
        sub_genre: "Science Fiction",
        publication_year: 1949,
        ISBN: "345-678-9012",
        copies_available: 10,
        synopsis:
          "A dystopian novel set in a totalitarian society, where a man struggles against the omnipresent surveillance.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1984first.jpg/440px-1984first.jpg",
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Fiction",
        sub_genre: "Romance",
        publication_year: 1813,
        ISBN: "456-789-0123",
        copies_available: 8,
        synopsis:
          "A classic novel exploring the themes of love, reputation, and societal expectations.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PrideAndPrejudiceTitlePage.jpg/440px-PrideAndPrejudiceTitlePage.jpg",
      },
      {
        title: "The Shining",
        author: "Stephen King",
        genre: "Fiction",
        sub_genre: "Horror",
        publication_year: 1977,
        ISBN: "567-890-1234",
        copies_available: 6,
        synopsis:
          "A psychological horror novel about a family's winter stay at an isolated hotel.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Shiningnovel.jpg/440px-Shiningnovel.jpg",
      },
      {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "Non-Fiction",
        sub_genre: "History",
        publication_year: 2011,
        ISBN: "678-901-2345",
        copies_available: 12,
        synopsis:
          "Explores the history of Homo sapiens from the emergence of archaic humans to the present day.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Sapiens_A_Brief_History_of_Humankind.jpg/440px-Sapiens_A_Brief_History_of_Humankind.jpg",
      },
      {
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        genre: "Non-Fiction",
        sub_genre: "Biography",
        publication_year: 1947,
        ISBN: "789-012-3456",
        copies_available: 9,
        synopsis:
          "The diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Anne_Frank_diary.jpg/440px-Anne_Frank_diary.jpg",
      },
      {
        title: "Cosmos",
        author: "Carl Sagan",
        genre: "Non-Fiction",
        sub_genre: "Science",
        publication_year: 1980,
        ISBN: "890-123-4567",
        copies_available: 15,
        synopsis:
          "A popular science book that explores the universe and our place in it.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/CosmosCarlSagan.jpg/440px-CosmosCarlSagan.jpg",
      },
      {
        title: "The Joy of Painting",
        author: "Bob Ross",
        genre: "Hobbies",
        sub_genre: "Art",
        publication_year: 1985,
        ISBN: "901-234-5678",
        copies_available: 10,
        synopsis:
          "Bob Ross shares his love for painting and provides step-by-step instructions for creating beautiful landscapes.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/The_Joy_of_Painting_Title_Card.jpg/440px-The_Joy_of_Painting_Title_Card.jpg",
      },

      {
        title: "The Lean Startup",
        author: "Eric Ries",
        genre: "Technology",
        sub_genre: "Business",
        publication_year: 2011,
        ISBN: "234-567-8909",
        copies_available: 8,
        synopsis:
          "Provides a systematic, scientific approach for creating and managing successful startups in an age when companies have to innovate more than ever.",
        cover_image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/The_Lean_Startup.jpg/440px-The_Lean_Startup.jpg",
      },
    ]);
  return (
    <DataContext.Provider value={{ books, setBooks }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

import { useState } from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  Input,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export const MyBooks = () => {
  const initialData = {
    title: "",
    author: "",
    genre: "",
    sub_genre: "",
    publication_year: "",
    ISBN: "",
    copies_available: "",
    synopsis: "",
    cover_image: "",
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  function onCloseDrawer() {
    setIsDrawerOpen(false);
    setFormData(initialData);
  }



  function handleAddBook(e) {
    setIsDrawerOpen(true);
  }
  function handleAdddata(e) {
     e.preventDefault(); 
    console.log(formData);
    setIsDrawerOpen(false);
    setFormData(initialData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleAdddata}>
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue" type="button" onClick={handleAddBook}>
            {" "}
            Add book
          </Button>
        </ButtonGroup>

        <Drawer isOpen={isDrawerOpen} placement="right" onClose={onCloseDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add Book</DrawerHeader>
            <DrawerBody>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  placeholder="Title"
                  value={formData["title"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>author</FormLabel>
                <Input
                  name="author"
                  placeholder="author"
                  value={formData["author"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>genre</FormLabel>
                <Input
                  name="genre"
                  placeholder="genre"
                  value={formData["genre"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>sub_genre</FormLabel>
                <Input
                  name="sub_genre"
                  placeholder="sub_genre"
                  value={formData["sub_genre"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>publication_year</FormLabel>
                <Input
                  name="publication_year"
                  placeholder="publication_year"
                  type="date"
                  value={formData["publication_year"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>ISBN</FormLabel>
                <Input
                  name="ISBN"
                  placeholder="ISBN"
                  value={formData["ISBN"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>copies_available</FormLabel>
                <Input
                  name="copies_available"
                  type="number"
                  placeholder="copies_available"
                  value={formData["copies_available"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>synopsis</FormLabel>
                <Input
                  name="synopsis"
                  placeholder="synopsis"
                  value={formData["synopsis"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>cover_image</FormLabel>
                <Input
                  name="cover_image"
                  placeholder="cover_image"
                  value={formData["cover_image"]}
                  onChange={handleChange}
                />
              </FormControl>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onCloseDrawer}>
                  Cancel
                </Button>
                <Button
                  colorScheme="blue"
                  isLoading={isLoading}
                  loadingText="Saving event"
                  type="submit"
                  onClick={handleAdddata} 
                >
                  Save
                </Button>
              </DrawerFooter>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </form>
    </>
  );
};

// // You can also reset the form data if needed
// setFormData(initialData);

// // You might want to perform additional actions, like saving data to the server
// // For example, you can make an API call here

// // Set isLoading to true while processing the form data
// setIsLoading(true);

// // Simulate an asynchronous operation (replace this with your actual logic)
// setTimeout(() => {
//   // Reset isLoading once the operation is complete
//   setIsLoading(false);

//   // Close the drawer after saving
//   onCloseDrawer();
// }, 1000); // Simulating a delay of 1 second (adjust as needed)

// fetch(`${BASE_URL}/books`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(formData),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     // we assume the operation was a success

//     // reset form
//     setFormData(initialData);

//     // stop loading
//     setIsLoading(false);
//   })
//   .catch((err) => {
//     setIsLoading(false);
//     console.log(err);
//   });

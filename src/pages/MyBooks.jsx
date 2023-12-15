import { useState } from "react";

import {
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
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

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

  function handleAddBook() {
    setIsDrawerOpen(true);
  }

  function onCloseDrawer() {
    setIsDrawerOpen(false);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormData(initialData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
console.log(formData);
  return (
    <>
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue" onClick={handleAddBook}>
          Add book
        </Button>
      </ButtonGroup>

      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onCloseDrawer}
        onSubmit={handleFormSubmit}
      >
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

            {/* Example: <AddBookForm /> */}
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onCloseDrawer}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

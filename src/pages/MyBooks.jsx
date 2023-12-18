import {useState } from "react";


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
import { BASE_URL } from "../Utilities/url";

export const MyBooks = () => {
   const initialData = {
     title: "",
     author: "",
     sub_genre: "",
     ISBN: "",
     synopsis: "",
     genre: "",
     publication_year: "",
     copies_available: "",
     cover_image: "",
   };

 const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState(false);

 const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value,
   });
 };

 function onCloseDrawer() {
   setIsDrawerOpen(false);
   setFormData(initialData);
 }

 function handleDrawer(e) {
   setIsDrawerOpen(true);
 }

 
  
  function handleAdddata(e) {
    e.preventDefault();


    if (
      !formData.title ||
      !formData.author ||
      !formData.genre ||
      !formData.publication_year ||
      !formData.ISBN ||
      !formData.copies_available ||
      !formData.synopsis
    ) {
      setFormError("Please fill all fields");
      return;
    }
    fetch(`${BASE_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // reset form
        setFormData(initialData);
        setIsDrawerOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setFormError("An error occurred while saving the book.");
      });
  }


  return (
    <>
      <form onSubmit={handleAdddata}>
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue" type="button" onClick={handleDrawer}>
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
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>author</FormLabel>
                <Input
                  name="author"
                  placeholder="author"
                  value={formData["author"]}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>genre</FormLabel>
                <Input
                  name="genre"
                  placeholder="genre"
                  value={formData["genre"]}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>sub_genre</FormLabel>
                <Input
                  name="sub_genre"
                  placeholder="sub_genre"
                  value={formData["sub_genre"]}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>publication_year</FormLabel>
                <Input
                  name="publication_year"
                  placeholder="publication_year"
                  type="number"
                  min="1000"
                  max="9999"
                  step="1"
                  value={formData["publication_year"]}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>ISBN</FormLabel>
                <Input
                  name="ISBN"
                  placeholder="ISBN"
                  value={formData["ISBN"]}
                  onChange={handleChange}
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
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>synopsis</FormLabel>
                <Input
                  name="synopsis"
                  placeholder="synopsis"
                  value={formData["synopsis"]}
                  onChange={handleChange}
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
                  type="submit"
                  onClick={handleAdddata}
                >
                  {formError ? "Save" : "Retry"}
                </Button>
              </DrawerFooter>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </form>
    </>
  );
};



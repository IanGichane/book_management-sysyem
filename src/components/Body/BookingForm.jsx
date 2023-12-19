import React, { useState } from "react";
import { BASE_URL } from "../../Utilities/url";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import toast from "react-hot-toast";

export const BookingForm = ({ isOpen, onOpen, onClose, bookId, bookName }) => {
  const initialData = {
    name: "",
    email: ""
  };
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    //Post request to the server
    const data = {
      ...formData,
      book_id: bookId,
      date:new Date()
    };

    fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        
        if (res.message) {
          toast.success(res.message, { duration:5000 });
        }
        else {
          toast.error(res.detail, { duration: 6000 });
        }
        setIsLoading(false);
        onClose();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error occurred.Try again')
      });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as={"form"} onSubmit={handleForm}>
          <ModalHeader>
            {bookName} {bookId}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={formData["name"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>email</FormLabel>
                <Input
                  name="email"
                  value={formData["email"]}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              type="submit"
              isLoading={isLoading}
              loadingText="borrowing"
            >
              Borrow
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

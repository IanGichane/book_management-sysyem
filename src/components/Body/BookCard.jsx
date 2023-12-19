import React from 'react'
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BookingForm } from './BookingForm';

export const BookCard = ({
  id,
  title,
  author,
  genre,
  sub_genre,
  publication_year,
  ISBN,
  copies_available,
  synopsis,
  cover_image,
}) => {
   const { isOpen,onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <BookingForm
        isOpen={isOpen}
        onClose={onClose}
        bookId={id}
        bookName={title}
      />
      <Card maxW="sm">
        <CardBody>
          <Image src={cover_image} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Tooltip label={synopsis} aria-label="A tooltip">
              synopsis
            </Tooltip>
            <Text color="blue.600" fontSize="2xl">
              copies available {copies_available}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="1">
            <Button variant="ghost" colorScheme="blue" onClick={onOpen}>
              Borrow
            </Button>

            <Button variant="ghost" colorScheme="blue">
              reserve
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Check out
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

    
 
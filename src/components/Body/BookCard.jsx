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
} from "@chakra-ui/react";

export const BookCard = ({
  title,
  author,
  genre,
  publication_year,
  copies_available,
  synopsis,
  cover_image,
}) => {
  return (
    <>
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
          <ButtonGroup spacing="1"  >
            <Button variant="ghost" colorScheme="blue">
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

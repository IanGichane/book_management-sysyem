import { Input } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";




export const Search = ({ searchTerm, onChange }) => {
  return (
    <>
      <Input
        placeholder="Search for book"
        size="lg"
        width="400px"
        value={searchTerm}
        onChange={onChange}
      />
    </>
  );
};

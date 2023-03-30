import { SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/moviesearch', { state: { search } })
    }
  return (
    <InputGroup size="md" mr={4} ml={4}>
          <Input pr="4.5rem" placeholder="Search" value={search} onChange={(e) =>
          {
                setSearch(e.target.value)
               
    }
    } />
      <InputRightElement >
        <IconButton aria-label="Search database" icon={<SearchIcon />} onClick={onSubmit} />
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchForm;



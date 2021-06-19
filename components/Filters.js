import {
  Box,
  Text,
  Stack,
  CheckboxGroup,
  Checkbox,
  Select,
  HStack,
  Switch,
  Center
} from '@chakra-ui/react';

const Filters = (props) => {
  // const inputBg = {light: '#EDF2F7', dark: 'gray.700'};

  return (
    <Stack spacing={8} mb={8} {...props}>
      <Box display="flex" alignItems="center" justifyContent="left">
        <HStack>
          <Center>
            <Text mr={2}>{'Show my favourites'}</Text>
            <Switch id="user-favourites" size="sm" />
          </Center>
        </HStack>
      </Box>
      <Box>
        <Text mb={2} fontWeight="bold">
          {'Difficulty Level'}
        </Text>
        <CheckboxGroup spacing={10}>
          <HStack>
            <Checkbox value="EASY">Easy</Checkbox>
            <Checkbox value="MEDIUM">Medium</Checkbox>
            <Checkbox value="HARD">Hard</Checkbox>
          </HStack>
        </CheckboxGroup>
      </Box>
      <Box>
        <Text mb={2} fontWeight="bold">
          {'Marked as Solved'}
        </Text>
        <CheckboxGroup spacing={10}>
          <HStack>
            <Checkbox value="SOLVED">Solved</Checkbox>
            <Checkbox value="UNSOLVED">Unsolved</Checkbox>
          </HStack>
        </CheckboxGroup>
      </Box>

      <Box>
        <Text mb={2} fontWeight="bold">
          {'Search by tags'}
        </Text>
        <Select defaultValue="Des Moines, IA">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>>
        </Select>
      </Box>
    </Stack>
  );
};

export default Filters;

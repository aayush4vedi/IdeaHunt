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
import { useRef, useState } from 'react';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';

import tags from '@/assets/tags';
import { useSearch } from '@/lib/search';

const Filters = () => {
  const {
    showMyPosts,
    levels,
    isSolved,
    filterTags,
    onShowMyPosts,
    onFilterLevels,
    onFilterIsSolved,
    onChangeFilterTags,
  } = useSearch();

  const [pickerItems, setPickerItems] = useState(
    tags
      .filter((tag) => tag.value !== 'all')
      .sort((a, b) => a.label.localeCompare(b.label))
  );
  const [selectedTags, setselectedTags] = useState(filterTags);

  return (
    <Stack spacing={8} mb={8}>
      <Box display="flex" alignItems="center" justifyContent="left">
        <HStack>
          <Center>
            <Text mr={2}>{'Show only my submissions'}</Text>
            <Switch
              id="my-submissions"
              size="sm"
              defaultChecked={showMyPosts}
              onChange={(e) => onShowMyPosts(e.target.checked)}
            />
          </Center>
        </HStack>
      </Box>
      <Box>
        <Text mb={2} fontWeight="bold">
          {'Difficulty Level'}
        </Text>
        <CheckboxGroup
          spacing={10}
          onChange={onFilterLevels}
          variantColor="teal"
          value={levels}
        >
          <HStack>
            <Checkbox value="easy">Easy</Checkbox>
            <Checkbox value="medium">Medium</Checkbox>
            <Checkbox value="hard">Hard</Checkbox>
          </HStack>
        </CheckboxGroup>
      </Box>
      <Box>
        <Text mb={2} fontWeight="bold">
          {'Marked as Solved'}
        </Text>
        <CheckboxGroup
          spacing={10}
          value={isSolved}
          onChange={onFilterIsSolved}
        >
          <HStack>
            <Checkbox value="solved">Solved</Checkbox>
            <Checkbox value="unsolved">Unsolved</Checkbox>
          </HStack>
        </CheckboxGroup>
      </Box>

      <Box>
        <CUIAutoComplete
          label="Select Tags"
          placeholder="Start typing..."
          items={pickerItems}
          tagStyleProps={{
            rounded: 'full',
            fontSize: 'xs'
          }}
          selectedTags={selectedTags}
          onSelectedItemsChange={(changes) =>
            onChangeFilterTags(changes.selectedItems)
          }
        />
      </Box>
    </Stack>
  );
};

export default Filters;

import { Box, Text, HStack, useRadioGroup } from '@chakra-ui/react';
import { useRadio } from '@chakra-ui/radio';
import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import IdeaList from '@/components/IdeaList';
import fetcher from '@/utils/fetcher';
import DashboardShell from '@/components/DashboardShell';
import Filters from '@/components/Filters';
import { useRef, useState } from 'react';
import { useSearch } from '@/lib/search';

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="lg"
        fontSize="sm"
        bg="orange.100"
        _checked={{
          bg: 'black',
          color: 'white'
        }}
        px={2}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}

const Dashboard = () => {
  const { user } = useAuth();

  const { data } = useSWR(user ? ['/api/ideas', user.za] : null, fetcher);

  //sort-by
  const { sortBy, onSortByChange } = useSearch();
  const options = ['Latest', 'Hottest'];
  // const [sortKey, setSortKey] = useState('Latest');

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'sorter',
    defaultValue: sortBy,
    onChange: onSortByChange
  });
  const group = getRootProps();

  return (
    <DashboardShell navtype={<Filters />} showSearchBar={true} >
      <Box
        display="flex"
        alignSelf="flex-end"
        position="fixed"
        bg="orange.100"
        borderRadius="md"
        boxShadow="2xl"
        p={2}
        mt={-8}
        ml="65%"
        zIndex="sticky"
      >
        <HStack {...group}>
          <Text fontWeight="bold" fontSize="sm">
            Sort By:{' '}
          </Text>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
      </Box>

      {data ? <IdeaList ideas={data.ideas} /> : <IdeaList ideas={[]} />}
    </DashboardShell>
  );
};

export default Dashboard;

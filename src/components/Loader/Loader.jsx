import { Box } from 'components/Box/Box';
import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box width="100px" mx="auto">
      <TailSpin height="80" width="80" color="#000000" radius="1" />
    </Box>
  );
};

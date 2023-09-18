import { Circles } from 'react-loader-spinner';

export const Loader = () => (
  <Circles
    height="100"
    width="100"
    color="#f6fa1c"
    ariaLabel="circles-loading"
    wrapperStyle={{ position: 'fixed', top: '30%', left: '40%' }}
    wrapperClass=""
    visible={true}
  />
);

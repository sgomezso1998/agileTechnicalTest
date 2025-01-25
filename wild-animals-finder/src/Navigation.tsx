import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string, queryParams?: Record<string, string>) => {
    if (queryParams) {
      const queryString = new URLSearchParams(queryParams).toString();
      navigate(`${path}?${queryString}`);
    } else {
      navigate(path);
    }
  };

  return { navigateTo };
};

export default useNavigation;

import queryString from 'query-string';

const getCategoryFromProps = props => {
  const {
    location: { search },
  } = props;

  return queryString.parse(search).category;
};

export default getCategoryFromProps;

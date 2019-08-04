import queryString from 'query-string';

const getCategoryFromProps = search => queryString.parse(search).category;

export default getCategoryFromProps;

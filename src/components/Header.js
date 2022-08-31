// Importing prop types from the prop-types library. These will be used to define the data types of the props that are passed to the header component
import PropTypes from 'prop-types';
// Importing button functional component from Button.js
import Button from './Button' 

// As most components in react are a set of html tags, they require attributes
// Attributes in react are passed between components as props
// The props object contains a set of attributes that are to be applied to the underlying html in the component function

function Header(props) {
  return (
  <head className = {props.className}>
      <h1>To-Do List</h1>
      <Button />
  </head>
  );
}

// If no props are passed, there are still a set of default props that can be set in the following way
Header.defaultProps = {
    value: "Header2"
}

// Defining prop types for the props that are passed
Header.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string
}

export default Header;

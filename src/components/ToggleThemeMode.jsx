import PropTypes from "prop-types";
import ThemeContext from "./ThemeContext";

const ToggleThemeContainer = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {({ toggleThemeMode }) => (
        <div onClick={() => toggleThemeMode()}>{children}</div>
      )}
    </ThemeContext.Consumer>
  );
};

ToggleThemeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToggleThemeContainer;

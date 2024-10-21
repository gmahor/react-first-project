import "./TabButton.css";
import * as PropTypes from "prop-types";

// 1st way
// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

// second way
export default function TabButton({children, onSelect, isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}

// Define prop types
TabButton.propTypes = {
    children: PropTypes.node.isRequired,
    onSelect: PropTypes.node.isRequired
};

// 3rd way using attributes
// export default function TabButton({ label }) {
//   return (
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }

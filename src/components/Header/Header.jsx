import "./Header.css";
import Switch from "@mui/material/Switch";

export const Header = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <header>
      <Switch {...label} defaultChecked />
      <nav className="header">
        <a href="#first">Home</a>
        <a href="#second">About</a>
        <a href="#third">Contact</a>
      </nav>
    </header>
  );
};

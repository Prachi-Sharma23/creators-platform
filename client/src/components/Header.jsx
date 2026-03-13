const Header = ({ title, username }) => {
  return (
    <header>
      <h1>{title}</h1>
      {username && <p>Welcome, {username}!</p>}
    </header>
  );
};

export default Header;

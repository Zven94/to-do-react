const Header = () => {
  // add style for header

  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle} className="styles.header">
      <h1>my To-Do list</h1>
      <p>add, check, edit or remove activities</p>
    </header>
  );
};
export default Header;

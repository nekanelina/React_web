export const UserDropdown = ({setUser, setShowDropdown }) => {
  console.log('Render: UserDropdown');
  return (
      <div className="user-dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
        <a href="#" className="text-wrapper-4 navbar-link">
          Account
        </a>
        <a href="#" className="text-wrapper-4 navbar-link" onClick={() => {setUser(null); setShowDropdown(false)}}>
          Logout
        </a>
      </div>
  );
};

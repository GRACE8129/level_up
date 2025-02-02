// function Header() {
//   return (
//       <header className="header">
//           <img src="src/react-logo.jpg" className="nav-logo" alt="React logo" />
//           <nav>
//             <ul className="nav-list">
//                 <li className="nav-list-items">Pricing</li>
//                 <li className="nav-list-items">About</li>
//                 <li className="nav-list-items">Contact</li>
//             </ul>
//           </nav>
//       </header>
//   );
// }


function Navbar() {
  return (
    <header>
      <nav>
        <img src="src/react-logo.png" alt="react logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  )
}

export default Navbar;

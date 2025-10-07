import './App.css'

export default function App() {
  const logoUrl = 'https://github.com/daemonexe/daemonexe/blob/main/logo_vaniyan.png?raw=true';

  return (
    <div className="coming-soon-container">
      <img src={logoUrl} alt="Website Logo" className="coming-logo" />
      <h1 className="coming-title">Coming Soon</h1>
      <p className="coming-subtitle">Our new website is on the way</p>
    </div>
  );
}

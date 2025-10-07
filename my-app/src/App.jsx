import './App.css';

export default function App() {
  const bgUrl = 'https://github.com/daemonexe/vaniyan/blob/main/wep.jpg?raw=true';
  return (
    <img
      className="bg-full"
      src={bgUrl}
      alt="Coming Soon Design"
      aria-hidden="true"
    />
  );
}

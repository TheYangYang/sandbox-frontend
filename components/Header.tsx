export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Sandbox App</h1>
        <nav>
          <a href="#" className="mx-2 hover:underline">Home</a>
          <a href="#" className="mx-2 hover:underline">About</a>
          <a href="#" className="mx-2 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}

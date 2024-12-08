import ThemeToggle from "../ِAtoms/ThemeToggle";

export function Navbar() {

  return (
      <>
      <header className="flex justify-between items-center p-4 bg-gray-100 w-full sticky top-0  "  >
      <ThemeToggle />
      </header>
      </>
  );
}
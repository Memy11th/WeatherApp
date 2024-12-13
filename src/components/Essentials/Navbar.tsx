import ThemeToggle from "../ِAtoms/ThemeToggle";

export function Navbar() {

  return (
    <>
      <header className={`flex justify-between items-center p-4  w-full sticky top-0  backdrop-blur-sm  supports-[backdrop-filter]:bg-background/60 ]  `}  >
        <div>
          <h5 className="font-bold">M11 weather</h5>
        </div>
        <div >
          <ThemeToggle />
        </div>

      </header>
    </>
  );
}
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState<boolean>(localStorage.getItem("theme") == "dark");

  useEffect(() => {
    const html = document.querySelector("html") as HTMLElement;
    if (dark) {
      localStorage.setItem("theme", "dark");
      html.classList.add("dark");
    } else {
      localStorage.removeItem("theme");
      html.classList.remove("dark");
    }
    const text: string = dark ? "dark theme" : "light theme";
    console.log("current theme : ", text);
  }, [dark]);
  const handleClick = (): void => {
    setDark(!dark);
    console.log("theme change");
  };
  return (
    <>
      <button
        className="border-2 border-amber-600 m-4 p-3 rounded-2xl bg-gray-500"
        onClick={handleClick}
      >
        Change Theme
      </button>
    </>
  );
}

export default App;

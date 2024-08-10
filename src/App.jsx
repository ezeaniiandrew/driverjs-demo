import { Footer, Header, TodoList, TextInput } from "./components";
import { useTheme } from "../src/context/index";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme === "dark" ? "dark" : "light"}`}>
      <main className="content">
        <div>
          <Header />
          <TextInput />
        </div>
        <TodoList />
        <Footer />
      </main>
    </div>
  );
}

export default App;

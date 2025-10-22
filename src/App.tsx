import Heading from "./components/Heading.tsx";
import QuestionsList from "./components/QuestionsList.tsx";

function App() {
  return (
    <main className="max-w-[37.5rem] space-y-300 rounded-[8px] bg-white p-300 shadow-[0_32px_56px_0_var(--color-shadow)] md:space-y-400 md:p-500">
      <Heading />
      <QuestionsList />
    </main>
  );
}

export default App;

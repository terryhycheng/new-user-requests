import Header from "./components/header/Header";
import RequestForm from "./components/request_form/RequestForm";
import RequestList from "./components/request_list/RequestList";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto px-4 max-w-[1200px]">
        <h2 className="text-center text-2xl text-main font-bold my-10">
          New Starter Requests
        </h2>
        <RequestForm />
        <RequestList />
      </main>
    </>
  );
}

export default App;

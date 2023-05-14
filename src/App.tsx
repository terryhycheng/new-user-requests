import Header from "./components/header/Header";
import RequestForm from "./components/request_form/RequestForm";
import RequestList from "./components/request_list/RequestList";

function App() {
  return (
    <>
      <Header />
      <h2>New Starter Requests</h2>
      {/* ... */}
      {/* New User Request Form */}
      <RequestForm />
      {/* New User Request List  */}
      <RequestList />
    </>
  );
}

export default App;

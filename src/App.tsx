import RequestForm from "./components/request_form/RequestForm";
import RequestList from "./components/request_list/RequestList";

function App() {
  return (
    <div className="flex flex-col items-center justify-start h-screen text-center leading-8">
      {/* Replace this with your code ...*/}
      <img src="/pobl-logo.png" className="w-56 m-12" alt="logo" />
      <h2>New Starter Requests</h2>
      {/* ... */}
      {/* New User Request Form */}
      <RequestForm />
      {/* New User Request List  */}
      <RequestList />
    </div>
  );
}

export default App;

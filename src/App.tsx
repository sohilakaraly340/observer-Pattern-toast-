import { Button } from "./components/Button";
import { ToastContainer } from "./components/ToastContainer";
import { toast } from "./components/utiltis";

function App() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button
          onClick={() => {
            toast("massage from default");
          }}
        >
          Default
        </Button>
        <Button
          onClick={() => {
            toast.success("massage from success");
          }}
        >
          Success ✅
        </Button>
        <Button
          onClick={() => {
            toast.error("massage from error");
          }}
        >
          Error ❌
        </Button>
      </div>
      <Button
        onClick={() => {
          toast.dismissAll();
        }}
      >
        Remove All
      </Button>

      <ToastContainer />
    </div>
  );
}

export default App;

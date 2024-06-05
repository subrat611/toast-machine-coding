import useNotification from "./hooks/use-notification";

function App() {
  const { NotificationComp, handler } = useNotification("top-right");

  return (
    <>
      <button
        type="button"
        onClick={() =>
          handler({
            type: "success",
            message: "Whooooooo!!",
            duration: 3000,
          })
        }
      >
        Submit
      </button>
      <button
        type="button"
        onClick={() =>
          handler({
            type: "error",
            message: "Whooooooo!!",
            duration: 3000,
          })
        }
      >
        Error
      </button>
      {NotificationComp}
    </>
  );
}

export default App;

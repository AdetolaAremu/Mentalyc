import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header";
import Modal from "./components/modal";
import Upload from "./components/upload";

const initialState = {
  name: "",
  type: "",
};

function App() {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState(initialState);
  const [lists, setLists] = useState([]);
  const [validation, setValidation] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if input.name and input.type are empty
    if (!input.name || !input.type) {
      setValidation("Please enter a name and type to submit");
      return;
    }

    const newInput = {
      id: uuidv4(),
      client: input.name,
      type: input.type,
      progress: 0,
    };

    const newLists = [...lists, newInput];
    // console.log(newLists);
    setLists(newLists);
    setModal(false);
    input.name = "";
    input.type = "";
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setLists((prevLists) =>
        prevLists
          .map((list) =>
            list.progress < 100
              ? { ...list, progress: list.progress + 1 }
              : list
          )
          .map((list) =>
            list.progress <= 100
              ? { ...list, eta: Math.round((1 + list.progress / 100) * 50) }
              : list
          )
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDelete = (id) => {
    const newLists = lists.filter((list) => list !== id);
    setLists(newLists);
  };

  return (
    <div className="App">
      <Header toggleModal={toggleModal} />

      <div className="px-5 lg:px-20">
        <Upload lists={lists} handleDelete={handleDelete} />
      </div>

      <Modal
        modal={modal}
        onClose={toggleModal}
        onSubmit={onSubmit}
        handleChange={handleChange}
        input={input}
        validation={validation}
      />
    </div>
  );
}

export default App;

import { useRef } from "react";

export default function FocusScreen() {
  const inputRef = useRef();
  const onClickInput = () => {
    inputRef.current.select()
  }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input placeholder="Holaras" type="text" className="form-control" ref={inputRef} />
      <button onClick={onClickInput}>Enviar</button>
    </>
  );
}

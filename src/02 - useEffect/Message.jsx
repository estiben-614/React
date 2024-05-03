import { useEffect } from "react";

export default function Message() {
    useEffect(() => {
        console.log('Componente montado')

        return () => console.log('Componente desmontado')
    }, [])
  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
}

import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export default function MultipleQuotes() {
  const { counter, incrementar, decrementar, reset } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`  );
  return (
    <>
      {isLoading ? (
        <div className="alert alert-info center">Cargando...</div>
      ) : (
        <>
          {data && (
          <ul>
            {data.map(({ quote, author }, index) => (
              <li key={index}>
                <blockquote className="blockquote text-right">
                  <p className="mb-1">{quote}</p>
                  <footer className="mb-2">{author}</footer>
                </blockquote>
              </li>
            ))}
          </ul>
          )}
          <button className="btn btn-primary" onClick={incrementar}>
            +1
          </button>
          <button className="btn btn-primary" onClick={decrementar}>
            -1
          </button>
          <button className="btn btn-primary" onClick={reset}>
            Reset
          </button>
        </>
      )}
    </>
  );
}

export function Button({ onclick, styling, children }) {
  return (
    <button className={styling} onClick={onclick}>
      {children}
    </button>
  );
}

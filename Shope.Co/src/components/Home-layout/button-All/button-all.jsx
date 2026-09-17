function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className="btn-primary">
      {label}
    </button>
  );
}

export default Button; 

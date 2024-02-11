export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container-fluid">
      <small className="text-body-secondary">
        Copyright &copy; Paulina Kiendys {currentYear}
      </small>
    </div>
  );
}

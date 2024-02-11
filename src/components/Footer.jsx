export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <small className="text-body-secondary">
      Copyright &copy; Paulina Kiendys {currentYear}
    </small>
  );
}

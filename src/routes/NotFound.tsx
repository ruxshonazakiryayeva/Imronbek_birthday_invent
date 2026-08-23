import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <p className="font-display text-3xl text-foreground">404</p>
      <p className="text-muted-foreground">Sahifa topilmadi</p>
      <Link to="/" className="btn-magic">
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

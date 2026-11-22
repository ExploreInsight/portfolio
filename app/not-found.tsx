import Link from "next/link";
import { Arrow } from "../components/site";

export default function NotFound() {
  return (
    <main className="container detail-page" id="main">
      <header className="detail-header">
        <p className="eyebrow">404</p>
        <h1>Page not found<span>.</span></h1>
        <Link className="button primary" href="/"><Arrow direction="left" /> Back to the portfolio</Link>
      </header>
    </main>
  );
}

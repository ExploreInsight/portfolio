"use client";

export function PrintButton() {
  return (
    <button className="button primary" type="button" onClick={() => window.print()}>
      Print or save as PDF <span aria-hidden="true">↗</span>
    </button>
  );
}

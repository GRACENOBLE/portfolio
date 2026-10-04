/**
 * Renders a JSON-LD `@graph` document as a `<script type="application/ld+json">`.
 *
 * `<` is escaped to its unicode equivalent to prevent XSS via `</script>` or
 * HTML injection in any string field, per the Next.js JSON-LD guidance. A
 * native `<script>` tag (not next/script) is correct here — JSON-LD is data,
 * not executable code.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

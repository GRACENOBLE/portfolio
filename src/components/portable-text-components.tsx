import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-64 md:h-96 my-8 rounded-xl overflow-hidden">
          <Image
            src={value.asset.url}
            alt={value.alt || "Content image"}
            fill
            className="object-cover"
          />
          {value.caption && (
            <p className="text-ink/60 text-sm text-center mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-ink mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-ink mb-3 mt-6">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-ink/80 mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-ink pl-4 italic text-ink/70 my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ink hover:underline"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="bg-ink/10 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-ink/80">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-ink/80">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
};

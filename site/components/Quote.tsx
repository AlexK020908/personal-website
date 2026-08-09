export default function Quote() {
  return (
    <section
      aria-label="Quote"
      className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10"
    >
      <figure className="relative mx-auto max-w-2xl">
        <blockquote className="relative border border-line bg-panel px-10 py-12 text-center text-base leading-relaxed text-fg sm:px-14 sm:text-lg">
          <span
            aria-hidden
            className="absolute left-3 top-0 select-none text-5xl leading-none text-dim sm:text-6xl"
          >
            &ldquo;
          </span>
          Fall seven times, stand up eight.
          <span
            aria-hidden
            className="absolute bottom-1 right-3 select-none text-5xl leading-none text-dim sm:text-6xl"
          >
            &rdquo;
          </span>
        </blockquote>
        <figcaption className="ml-auto -mt-px w-fit border border-line bg-panel px-5 py-2 text-sm text-muted">
          — Japanese proverb
        </figcaption>
      </figure>
    </section>
  );
}

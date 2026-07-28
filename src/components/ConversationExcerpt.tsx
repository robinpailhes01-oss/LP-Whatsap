import type { Message } from "@/lib/conversations";

/**
 * Extrait de conversation, statique, sur fond clair.
 *
 * Volontairement sans animation ni en-tête : ce n'est pas la démonstration du
 * hero, c'est une pièce à conviction posée à côté d'une promesse. Elle se lit
 * en trois secondes et prouve mieux qu'une phrase.
 */
export function ConversationExcerpt({
  messages,
  caption,
}: {
  messages: Message[];
  caption: string;
}) {
  return (
    <figure className="rounded-card border border-paper-line bg-paper p-4 sm:p-5">
      <ol className="flex flex-col gap-2.5">
        {messages.map((message) => {
          const isAgent = message.from === "agent";
          return (
            <li
              key={message.id}
              className={`flex max-w-[88%] flex-col ${
                isAgent ? "items-end self-end" : "items-start self-start"
              }`}
            >
              <span
                className={`rounded-bubble px-3.5 py-2.5 text-xs leading-relaxed ${
                  isAgent
                    ? "rounded-br-sm bg-signal-deep/12"
                    : "rounded-bl-sm bg-paper-alt"
                }`}
              >
                {message.text}
              </span>
              <span className="mt-1 px-1 font-mono text-2xs text-ink-paper-muted">
                {message.time}
              </span>
            </li>
          );
        })}
      </ol>

      <figcaption className="mt-4 border-t border-paper-line pt-3 text-2xs text-ink-paper-muted">
        <span className="font-medium text-signal-deep">Échange réel</span>
        {" — "}
        {caption}
      </figcaption>
    </figure>
  );
}

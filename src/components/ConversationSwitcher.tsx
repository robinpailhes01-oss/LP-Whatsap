"use client";

import { useState } from "react";
import { Conversation } from "@/components/Conversation";
import { conversations } from "@/lib/conversations";

/**
 * Le visiteur choisit son activité et lit un échange qui lui parle.
 *
 * C'est ce qui remplace un discours générique du type « pour tous les
 * secteurs » : plutôt que d'élargir le message jusqu'à ce qu'il ne dise plus
 * rien, on montre quatre cas concrets et chacun se reconnaît dans le sien.
 */
export function ConversationSwitcher() {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const active = conversations.find((c) => c.id === activeId) ?? conversations[0];

  return (
    <div>
      <p className="mb-3 text-2xs text-ink-muted">Votre activité :</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {conversations.map((conversation) => {
          const isActive = conversation.id === activeId;
          return (
            <button
              key={conversation.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveId(conversation.id)}
              className={`rounded-pill border px-4 py-2 text-2xs transition-colors duration-[120ms] ease-confident ${
                isActive
                  ? "border-brass bg-brass font-semibold text-night"
                  : "border-night-line text-ink-muted hover:border-ink-muted hover:text-ink"
              }`}
            >
              {conversation.sector}
            </button>
          );
        })}
      </div>

      {/* La clé force le remontage : la conversation rejoue depuis le début
          quand on change d'activité, au lieu de reprendre en cours de route. */}
      <Conversation key={active.id} data={active} />

      <p className="mt-3 text-center text-2xs text-ink-muted">
        Exemple d&apos;échange, rejoué en direct.
      </p>
    </div>
  );
}

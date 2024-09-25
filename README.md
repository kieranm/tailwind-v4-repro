# Tailwind v4 Reproduction

To run the server, it's just `pnpm dev`.

Issues noted:
- Probably because this is a much smaller repo, the loading time can't be reproduced. However:
- The `tailwind.config.ts` **is** picked up, but the `content` seems to be ignored. This is because classnames in `packages/components/src` are still being picked up even though they do not form part of the `content`.
- Modifying `theme.css` doesn't result in any changes until the dev server is restarted, hot reload doesn't work here.

Apologies if I'm doing something dumb here!

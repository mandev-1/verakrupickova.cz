---
type: fix
scope: git
commit: opravit korenovou strukturu repozitare a ignorovat node soubory
---

### Správná struktura repozitáře a méně generovaných souborů

- **Co je jinak:** Kořen repozitáře a Gitu je zarovnaný s kořenem projektu bez zbytečného zanoření; Git ignoruje závislosti Node, výstup Astro a běžné logy správců balíčků.
- **Proč:** Zanoření v podadresáři mátlo Git a Dependency Garden (`pathspec did not match any files`), a generované soubory zbytečně zaplňovaly repozitář.
- **Co tím získáš:** Hladké fungování Gitu v Dependency Garden a přehlednější stav repozitáře.

<!-- tech -->
Přesunut `.git` a kořenový strom přímo do kořene projektu; odstraněno sledování `node_modules/` a `.gitignore` nově pokrývá `node_modules/`, `.astro/`, `dist/` a logy npm, Yarn, pnpm a Bun.

---
type: fix
scope: git
commit: odebrat node_modules ze sledovani Gitem a opravit build na Netlify
---

### Správná struktura repozitáře a funkční build na Netlify

- **Co je jinak:** Kořen repozitáře a Gitu je zarovnaný s kořenem projektu bez zbytečného zanoření; Git ignoruje závislosti Node, výstup Astro a běžné logy správců balíčků. Node moduly jsou zcela odstraněny ze sledování Gitem.
- **Proč:** Zanoření v podadresáři mátlo Git a Dependency Garden; omylem commitnuté `node_modules` způsobovaly selhání buildu na Netlify (neúplná kopie závislostí místo čerstvé instalace).
- **Co tím získáš:** Hladké fungování Gitu v Dependency Garden, přehlednější stav repozitáře a funkční automatický deploy na Netlify.

<!-- tech -->
Přesunut `.git` a kořenový strom přímo do kořene projektu; `.gitignore` pokrývá `node_modules/`, `.astro/`, `dist/` a logy správců balíčků; 7 807 souborů z `node_modules` odstraněno ze sledování Gitem pomocí `git rm --cached`.

# Site vitrine — Inès Zourdani

**En ligne : https://ineszourdani.fr**

Site d'une page pour une professeure d'Histoire-Géographie et EMC installée à Marrakech.
Deux publics : les établissements du programme français (poste, remplacement) et les
familles (cours particuliers, coaching scolaire).

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Le site entier. HTML, CSS et JS dans un seul fichier, photo comprise (data URI WebP). Aucune dépendance à installer. |
| `portrait.webp` | La photo détourée, 448 px, fond transparent. Déjà intégrée dans `index.html` — ce fichier n'est utile que pour un autre usage. |
| `CNAME` | Domaine personnalisé lu par GitHub Pages. Ne pas supprimer. |

Seul `index.html` est nécessaire pour héberger le site.

## Système de design

Direction visuelle issue de Claude Design, sur une base de contenu et de
typographie établie en amont.

### Couleurs

| Valeur | Rôle |
|---|---|
| `#F4F6F4` | Fond de page |
| `#2B3A44` | Texte principal, bleu-ardoise |
| `#4E6B67` | Vert profond — hero et section contact |
| `#405B57` | Vert du pied de page |
| `#5D8F89` | Vert clair — liens et accents |
| `#F0E6D9` | Crème — accent chaud sur fond vert |
| `#A07856` | Brun — annotations et emplacements à compléter |
| `#D3DBDA` / `#E2E8E7` | Filets et bordures |
| `#56666F` / `#44545E` / `#8A98A0` | Gris de texte |

Parti pris assumé d'un thème unique : chaque fond est peint explicitement,
la page tient donc sur n'importe quel arrière-plan hôte.

### Typographie

- **Newsreader** (Google Fonts) — titres et annotations, ses italiques portent l'identité.
- **Archivo** (Google Fonts) — texte courant, labels, formulaire.

### Mise en page

Conteneur de 1280 px, grilles en `auto-fit minmax` qui se replient seules sur
mobile. Les styles sont en ligne, hérités de l'export Claude Design ; seuls les
survols, le formulaire et les emplacements à compléter passent par la feuille
de style du `<head>`.

### Version précédente

`version-marge.html` conserve la première direction — une colonne d'annotations
en marge, un système de tokens CSS et un thème sombre. Consultable en ligne à
`/version-marge.html`.

## Points d'attention

- Le formulaire pointe vers Formspree et attend un identifiant (`VOTRE_ID_FORMSPREE`).
- Les tarifs sont des emplacements marqués `data-remplir`, visibles en brun pointillé.
- L'animation d'apparition est armée par la classe `.anim` posée sur `<html>` par le
  script. Sans JavaScript, tout le contenu reste visible : ne jamais masquer par défaut.

# 🏋️ Exercice 2 — Événements & Conditions en React

> **Cours à lire avant** : `02-events-conditions.md`

---

## ⭐ Exercice 1 — Le Compteur avec Bonus

**Objectif** : Gérer les clics et afficher des messages conditionnels.

### Ce que tu dois faire :

1. Crée un `useState` pour un `compteur` (valeur initiale : 0).
2. Crée **3 boutons** :
   - ➕ Ajouter → `setCompteur(compteur + 1)`
   - ➖ Retirer → ne descend jamais en dessous de 0
   - 🔄 Reset → remet à 0
3. Affiche un **message conditionnel** avec un ternaire ou `&&` :
   - Si compteur === 0 → "Commence à cliquer !"
   - Si compteur >= 10 → "🏆 Bravo, tu as atteint 10 !"
   - Sinon → "Continue... ({compteur})"

---

## ⭐⭐ Exercice 2 — La Météo (Conditions multiples)

**Objectif** : Gérer des `if / else if / else` en React.

### Ce que tu dois faire :

1. Crée un `useState` pour `temperature` (valeur initiale : 25).
2. **Avant le `return`**, utilise un `if / else if / else` pour stocker un message et un emoji dans une variable `meteo`.
3. Affiche le résultat dans le JSX.
4. Ajoute **4 boutons** pour changer la température : `-10`, `-5`, `+5`, `+10`.
   - Rappel piège : pour passer un argument → `onClick={() => setTemperature(temperature + 5)}`

---

## ⭐⭐⭐ Exercice 3 — Le Profil Connecté/Déconnecté

**Objectif** : Combiner événements et conditions.

### Ce que tu dois faire :

1. Crée ces states :

   - `estConnecte` → `false`
   - `prenom` → `'Andoniaina'`
   - `role` → `'admin'`
2. Affiche :

   - **Si déconnecté** → "🔒 Accès refusé" + un bouton "Se connecter"
   - **Si connecté** → "Bienvenue {prenom}" + le rôle + un bouton "Se déconnecter"
3. Les boutons doivent changer `estConnecte` entre `true` et `false`.

---

## ✅ Auto-évaluation

- [X] Mes boutons utilisent `onClick` (avec un O majuscule) ?
- [X] Quand j'ai un argument, j'enveloppe dans `() =>` ?
- [X] J'utilise `{ }` (pas `{{ }}`) pour afficher mes variables ?
- [X] Mes conditions ternaires fonctionnent ?

---

Montre-moi quand tu as fini ! 💪

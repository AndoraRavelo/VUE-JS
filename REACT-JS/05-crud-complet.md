# 📖 Leçon 5 : Le CRUD Complet avec React & Symfony 🚀

> Tu maîtrises déjà le **READ** (récupérer des données). Maintenant on va voir comment **Créer**, **Modifier** et **Supprimer** des données dans ton projet Symfony.

---

## 🏗️ Rappel : Le contrat Frontend / Backend

Ton application React ne modifie **JAMAIS** la base de données directement. Elle envoie un "ordre" (une requête HTTP) à Symfony. Symfony fait le travail en base de données et répond à React : "C'est fait !".

---

## 1. Créer une donnée (CREATE - Methode POST)

Pour envoyer une nouvelle donnée au serveur (Symphony), on utilise `method: 'POST'`.

```javascript
const ajouterUser = async (nouvelUtilisateur) => {
  const reponse = await fetch('https://ton-api.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // 👈 On dit qu'on envoie du JSON
    body: JSON.stringify(nouvelUtilisateur) // 👈 On transforme l'objet en texte
  })
  
  if (reponse.ok) {
    const data = await reponse.json()
    // Mise à jour de l'affichage local (React)
    setUsers([...users, data]) 
  }
}
```

---

## 2. Supprimer une donnée (DELETE - Methode DELETE)

On a généralement besoin de l'**ID** de l'élément à supprimer dans l'URL.

```javascript
const supprimerUser = async (id) => {
  const reponse = await fetch(`https://ton-api.com/users/${id}`, {
    method: 'DELETE'
  })

  if (reponse.ok) {
    // On retire l'utilisateur de notre liste locale (React)
    const nouvelleListe = users.filter((u) => u.id !== id)
    setUsers(nouvelleListe)
  }
}
```

---

## 3. Modifier une donnée (UPDATE - Methode PUT ou PATCH)

On envoie l'ID dans l'URL et les nouvelles données dans le `body`.

```javascript
const modifierUser = async (id, infosModifiees) => {
  const reponse = await fetch(`https://ton-api.com/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(infosModifiees)
  })

  if (reponse.ok) {
    // On met à jour l'utilisateur dans notre liste locale (React)
    setUsers(users.map(u => u.id === id ? { ...u, ...infosModifiees } : u))
  }
}
```

---

## 💡 Le secret pour Symfony (CORS) ⚠️

Quand tu travailles avec Symfony en local (port 8000) et React (port 5173), ton navigateur va bloquer les requêtes par sécurité. 
C'est ce qu'on appelle les **CORS**.
Il faudra installer le `NelmioCorsBundle` dans ton Symfony pour autoriser React à lui parler.

---

## 📋 Tableau des Verbes HTTP

| Action | Methode | URL Exemple | Synchro React (State) |
| :--- | :--- | :--- | :--- |
| **Lire** | `GET` | `/users` | `setUsers(data)` |
| **Créer** | `POST` | `/users` | `setUsers([...users, data])` |
| **Modifier** | `PUT` | `/users/5` | `setUsers(users.map(...))` |
| **Supprimer** | `DELETE` | `/users/5` | `setUsers(users.filter(...))` |

---

## 🏋️ Exercice 5 — Ton premier gestionnaire de données complet !

👉 **Ouvre le fichier `exercises/EX-05-crud-complet.md`**

C'est l'étape ultime avant de devenir une vraie développeuse Full-Stack ! 🏆💻

# Leçon 1 : Introduction à Vue.js et Syntaxe de base

Bienvenue dans l'univers de Vue.js ! C'est un framework JavaScript progressif, ce qui signifie que tu peux l'ajouter petit à petit à un projet, ou construire une application complète avec.

## 1. Comment démarrer simplement ?

Pour apprendre les bases, nous n'avons pas besoin d'outils complexes. Nous pouvons simplement utiliser un fichier HTML classique et importer Vue.js via un lien (CDN).

Voici à quoi ressemble la structure de base :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ma première app Vue</title>
    <!-- Importation de Vue.js (version 3) -->
    creat
</head>
<body>
  
    <!-- Zone contrôlée par Vue.js -->
    <div id="mon-app">
        <!-- L'interpolation : Les doubles accolades affichent la variable -->
        <h1>{{ message }}</h1>
    </div>

    <!-- Notre script JavaScript -->
    <script>
        // Création de l'application Vue
        const app = Vue.createApp({
            // 'data' est une fonction qui retourne nos variables
            data() {
                return {
                    message: 'Bonjour, Vue.js !'
                }
            }
        });

        // On "attache" l'application à la balise qui possède l'id "mon-app"
        app.mount('#mon-app');
    </script>
</body>
</html>
```

## 2. Explication des concepts

- **L'importation CDN** : La balise `<script src="...">` permet de télécharger Vue.js directement depuis internet pour que ton navigateur le comprenne.
- **`Vue.createApp({...})`** : C'est la commande magique pour initialiser Vue.js. Tout ce qui est à l'intérieur définira le comportement de ton application.
- **La fonction `data()`** : C'est ici que tu déclares toutes les données (variables) dont ton interface aura besoin. Elle doit toujours retourner (`return`) un objet avec tes variables.
- **L'interpolation `{{ }}`** : Dans le code HTML, on utilise les doubles accolades pour demander à Vue.js d'afficher le contenu d'une variable qui se trouve dans `data()`.
- **`app.mount('#mon-app')`** : On dit à Vue.js : "Prends le contrôle de l'élément HTML qui porte l'identifiant `mon-app`". Tout ce qui est à l'intérieur de cet élément sera géré par Vue.

---

## 💡 Prêt(e) pour ton premier exercice ?

Ne regarde pas la solution, essaie de le faire toi-même ! Lis les consignes que je vais te donner dans notre discussion.

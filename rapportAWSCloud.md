# Projet 3 - AWS

Par Shawn Séguin et Antoine Plouffe

#### Github

https://github.com/AntoPlouffee/Projet3-ExplorationTech.git

## Introduction

Nous avons décidés de reprendre l'application de convertion du projet 2 et le mettre sur le cloud. Il y a plusieurs services offerts qui nous permettraient de faire cela, des services gratuits à des services payant à prix fix ou à crédit. Des exemples de services sont IBM, Microsoft Azure, RedHat, Google Cloud, Oracle, etc. Nous avons décidés d'explorer et d'utiliser les services cloud d'Amazon, soit AWS.

## description de la technologie choisie

Amazon Web Services (AWS) est une division de la compagnie Amazon qui offre des services infonuagiques pour les entreprises ou des individus. AWS offre plus de 90 services en calcul, en stockage de données, en réseau, en base de données, en déploiement, en applications webs et mobiles, et plus encore.

## les raisons de votre choix en expliquant en quoi la technologie sélectionnée est pertinente pour vous

C'est pertinent d'utiliser des outils du cloud populaire. Amazon est le plus grand fournisseur de services infonuagique du monde. Maitriser ces outils et ces services pourrait nous avantager et nous démarquer en entreprise parmis les autres informaticiens. C'est une habileté importante à maitriser pour devenir développeur full stack. Surtout en PME, là ou les équipes sont souvent très petites, c'est un atout de connaitre les procédures de déploiement et de configuration d'une application.

## les résultats de l'exploration technique

Il est très facile de trouver de la documentation pour toutes sortes de projet dû à la popularité et à la grandeur du fournisseur des services. Pour déployer notre application Node.JS, il y a plusieurs moyens. Elastic Beanstalk (EB) est une librairie qui facillite grandement le déploiement d'une application web. EB permet la personnalisation de configuration d'un serveur linux. Donc, il existe des configurations de base pour des développeurs moins expérimentés en déploiement, ou pour des développeurs qui s'y connaissent.

## des exemples concrets d'application

Des applications qui utilisent AWS sont les suivants :
- Netflix
- Twitch
- ESPN
- AirBnB
- NASA
- Walt Disney

## et des recommandations pour son utilisation éventuelle dans des projets

Nous recommandons l'utilisation de les services de déploiement infonuagique de AWS.
Il y a beaucoup de tutoriels officiels sur l'utilisation de ses services, dont Elastic Beanstalk. Également, il y a beaucoup de forums d'utilisateurs qui permettent un déboggage plus facile et rapide. La popularité des services permet de ne pas d'être bloqué à cause de manque de documentation.
De plus, les services sont très variés. Il y a des hébergements dans le cloud qui sont personnalisés pour les besoins des utilisateurs, et permet de faire des essais gratuitement.

## Ce que nous avons fait

Problèmes que nous avons eu :
- Les fonctions async
  - Le programme n'arrivait pas à aller chercher les données dans le body de la requête assez rapidement. Donc, au lieu d'en faire un call async, nous avons 
- La déconnection du compte d'Elastic BeanStalk


#### Utilisation de l'api

Nous avons réussi à déployer une API NodeJS sur une machine linux d'AWS en utilisant Elastic Beanstalk. L'API est  actuellement disponible en ligne.

Pour appeler l'api, il faut utiliser ce lien : http://explosionteteboom.eba-p3pu73kb.us-east-2.elasticbeanstalk.com/api/converter
En POST, avec le body :

```json
{
    "type" : "foot2meter",
    "value" : 12
}
```

Résultat de l'API que nous avons mis
![](/imagesRapport/resultatAPI.PNG)

Résultats de l'API par défaut d'Elastic Beanstalk
![](/imagesRapport/resultatDefaultAPI.PNG)

Initialement, le nom du projet s'appelait Projet3, sauf que Elastic Beanstalk reconnaissait déjà Projet3 comme un projet déjà existant. Donc, nous avons choisi un nom de projet plus cocasse pour être certain de ne pas avoir un nom de projet déjà exsitant, d'où vient le nom explosionteteboom.
# Modale-Plugin

Modale-Plugin est un plugin React très simple permettant de créer un composant de fenêtre modale.
Vous pouvez customiser le titre de la modale, le corps et la fonction callback de fermeture.

## Contexte

Ce projet est réalisé dans le cadre d'une formation OpenClassroom. Le but du projet est de remplacer une library jQuery par un plugin React.

## Installation

Lien Github : https://github.com/FloMoit/modale-plugin

NPM:

```
npm i @fmoitrier/modale-plugin
```

This project uses [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) dependencies

## Usage

To install the dependencies, run the following command:

ModalTitle : Le titre affiché dans le header de la fenêtre modale.
onClose : Fonction callback de fermeture de la fenêtre modale.

```javascript
import { ModaleHRnet } from "modale-plugin";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return;
  {
    openModal && (
      <ModalePlugin onClose={setOpenModal} textModal={"ModalTitle"}>
        <NavLink className="LinkOfModal" to={"LinkTo"}>
          Click here to view the user list
        </NavLink>
      </ModalePlugin>
    );
  }
}
```

L'icone de fermeture (x) dans le coin superieur droit permet de fermer la fenêtre.

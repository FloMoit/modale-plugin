# ModalePlugin

The ModalePlugin, is a customizable React component designed for easy integration into web applications, specifically for the HRnet site. It provides a modal dialog interface where you can display messages to the user and capture user interaction. The modal can be easily installed using npm or yarn. It requires three parameters: textModal for the notification message, linkModal for the link text, and linkTo for the page name. The modal's visibility is controlled by a state variable openModal, which can be toggled true or false.

## Installation

## Usage

textModal : The text to display as the title of the modal box.
linkModal : The text to display as the link to follow.
LinkTo : The URL where the link leads to.

```javascript
import { ModaleHRnet } from "modale-plugin";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return;
  {
    openModal && (
      <ModalePlugin
        onClose={setOpenModal}
        textModal="User successfully created !">
        <NavLink className="LinkOfModal" to={"UsersTable"}>
          Click here to view the user list
        </NavLink>
      </ModalePlugin>
    );
  }
}
```

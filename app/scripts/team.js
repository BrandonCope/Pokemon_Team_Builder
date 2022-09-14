import { elementFactory } from "./helper_functions.js";

export function createTeamPage({ parentElt }) {
  parentElt.innerHTML = "";
  const contentDiv = elementFactory({
    eltType: "div",
    classNames: ["row", "align-items-start", "text-center"],
  });
  createContent({ parentElt: contentDiv });

  console.log(contentDiv);
  parentElt.appendChild(contentDiv);
}

function createContent({ parentElt }) {
  const teamDiv = createDiv({
    parentElt,
    classNames: ["col", "row", "align-center", "rounded"],
    attrs: [
      {
        name: "style",
        value:
          "height:95vh; width:49vw;margin:2px;overflow-y:scroll;background-color:blue;opacity:95%",
      },
    ],
  });

  const detailDiv = createDiv({
    parentElt,
    classNames: ["col"],
    attrs: [
      {
        name: "style",
        value:
          "border:solid 2px; height:95vh; width:49vw;margin:2px;background-color:pink;opacity:95%",
      },
    ],
  });

  createButton({
    parentElt: teamDiv,
    text: "Create New Team",
    eventType: "click",
    event: handleTeam,
  });

  createTeamContainer({ parentElt: teamDiv });
}

function createDiv({ parentElt, attrs }) {
  const div = elementFactory({
    parentElt,
    eltType: "div",
    attrs,
  });
  return div;
}

function createButton({ parentElt, eventType, event, text }) {
  elementFactory({
    parentElt,
    eltType: "button",
    classNames: ["btn", "btn-block", "btn-danger"],
    text,
    events: [{ eventType, event }],
    attrs: [{ name: "style", value: "margin: 3px" }],
  });
}

function handleTeam(e) {
  e.preventDefault();
  const parentElt = e.target.parentElement;
  const nameInput = promptNewTeamName();
  if (nameInput) {
      elementFactory({
        parentElt,
        eltType: "div",
        text: `${nameInput}`,
        classNames: ["rounded", "teams"],
        attrs: [
          { name: "style", value: "padding: 100px; margin: 10px; border-radius:" },
        ],
      });
  }
}

function promptNewTeamName() {
  let teamNum = parseInt(localStorage.getItem("teamNum"), 10) + 1;
  const storage = localStorage;
  const keys = Object.keys(storage);

    let nameInput;
    if (teamNum) {
        nameInput = prompt("Enter Your New Team Name", `Team ${teamNum}`);
        if (nameInput != null && nameInput != "") {
            if (!keys.includes(nameInput)) {
                localStorage.setItem(`${nameInput}`, "")
                localStorage.setItem("teamNum", `${teamNum}`)
                return nameInput
            } else {
                alert("That Team Name Already Exists!!!")
            }
        } 
    } else {
        localStorage.setItem("teamNum", "1");
        teamNum = parseInt(localStorage.getItem("teamNum"))
        nameInput = prompt("Enter Your New Team Name", `Team 1`);
        if (nameInput != null && nameInput != "") {
            localStorage.setItem(`${nameInput}`, "")
            return nameInput
        } 
    }
  } else {
    localStorage.setItem("teamNum", "1");
    teamNum = parseInt(localStorage.getItem("teamNum"));
    nameInput = prompt("Enter Your New Team Name", `Team 1`);
    if (nameInput != null && nameInput != "") {
      localStorage.setItem(`${nameInput}`, "");
      return nameInput;
    }
  }
}

function createTeamContainer({ parentElt }) {
  const storage = localStorage;
  console.log(storage);
  for (const key in storage) {
    if (Object.hasOwnProperty.call(storage, key)) {
      const element = storage[key];
      console.log(element);
      if (key != "activePage" && key != "teamNum" && key != "length") {
        elementFactory({
          parentElt,
          eltType: "div",
          text: `${key}`,
          classNames: ["rounded", "teams"],
          attrs: [
            {
              name: "style",
              value:
                "padding: 100px; margin: 10px; background-color: lightblue; border-radius:",
            },
          ],
        });
      }
    }
  }
}

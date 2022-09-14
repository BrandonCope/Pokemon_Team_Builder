import { elementFactory } from "./helper_functions.js";

export function createTeamPage({parentElt}) {
    parentElt.innerHTML = ""
    const contentDiv = elementFactory({
        eltType: "div",
        classNames: ["row", "align-items-start", "text-center"],
    })
    createContent({parentElt: contentDiv})
    
    console.log(contentDiv)
    parentElt.appendChild(contentDiv)
}

function createContent({parentElt}) {
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
        event: handleTeam
    })

    createTeamContainer({parentElt: teamDiv})
}

function createDiv({parentElt, attrs}) {
    const div = elementFactory({
        parentElt,
        eltType: "div",
        attrs
    })
    return div;
}

function createButton({parentElt, eventType, event, text}) {
    elementFactory({
        parentElt,
        eltType: "button",
        classNames: ["btn", "btn-block", "btn-danger"],
        text,
        events: [{eventType, event}],
        attrs: [{name: "style", value: "margin: 3px"}]
    })
}

function handleTeam(e) {
    e.preventDefault();
    const parentElt = e.target.parentElement;
    const nameInput = promptNewTeamName()
    console.log(parentElt)
    console.log(nameInput)
    elementFactory({
        parentElt,
        eltType: "div",
        text: `${nameInput}`,
        classNames: ["rounded"],
        attrs: [
            {name: "style", value: "padding: 100px; margin: 10px; background-color: lightblue; border-radius:"},
    ]
    })
}

function promptNewTeamName() {
    const teamNum = parseInt(localStorage.getItem("teamNum"), 10) + 1;
    let nameInput;
    teamNum ? 
    (nameInput = prompt("Enter Your New Team Name", `Team ${teamNum}`),
    localStorage.setItem("teamNum", `${teamNum}`))
    : (localStorage.setItem("teamNum", "1"), nameInput = prompt("Enter Your New Team Name", `Team 1`));
    localStorage.setItem(`${nameInput}`, "")
    return nameInput
}

function createTeamContainer({parentElt}) {
    const storage = localStorage;
    console.log(storage)
    for (const key in storage) {
        if (Object.hasOwnProperty.call(storage, key)) {
            const element = storage[key];
            console.log(element)
            if (key != "activePage" && key != "teamNum" && key != "length") {
                elementFactory({
                    parentElt,
                    eltType: "div",
                    text: `${key}`,
                    classNames: ["rounded"],
                    attrs: [
                        {name: "style", value: "padding: 100px; margin: 10px; background-color: lightblue; border-radius:"},
                ]
                })
            }
        }
    }
}
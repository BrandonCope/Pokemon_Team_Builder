import { elementFactory } from "./helper_functions.js";

export function createTeamPage({parentElt}) {
    parentElt.innerHTML = ""
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "teamList_content")
    createContent({parentElt: contentDiv})
    console.log(contentDiv)
    parentElt.appendChild(contentDiv)
}

function createContent({parentElt}) {
    const teamDiv = createDiv({parentElt});
    const detailDiv = createDiv({parentElt});

    const button = document.createElement("button")
    console.log(button)
    button.innerText = "Create New Team"
    button.onclick
    button.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("hello world")
    })
    teamDiv.appendChild(button)
}

function createDiv({parentElt}) {
    const div = elementFactory({
        parentElt,
        eltType: "div",
        attrs: [{name: "style", value: "border: 3px solid white; padding: 100px"}]
    })
    return div;
}

function createButton({parentElt, className, eventType, event, text}) {
    const button = elementFactory({
        parentElt,
        eltType: "button",
        classNames: ["btn", "btn-block", className],
        text,
        events: [{eventType, event}],
        attrs: [{name: "style", value: "margin: 3px"}]
    })
    return button;
}

// function createButton({parentElt, text, eventType, event}) {
//     elementFactory({
//         parentElt,
//         eltType: "button",
//         text,
//         events: [{eventType, event}],
//     })
// }

function handleTeam(e) {
    e.preventDefault();
    const nameInput = prompt("Enter Your New Team Name")
    localStorage.setItem("nameInput", "Hello")
    console.log(nameInput)
}

function editInputs(e) {
    const editBtn = e.target
    console.log(editBtn)
    // const cardBody = editBtn.parentElement;
    // const card = cardBody.parentElement;
    // const {image, name, location, description} = promptEdits(card, cardBody);
    // validateInputs({image, name, location, description, card, cardBody});
}
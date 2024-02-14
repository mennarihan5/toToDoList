// HEADER COMOPNENT
class Header extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style.css">
        <div class="header">
            <slot></slot>
        </div>
        `;
    }
}
customElements.define("my-header", Header)

// PROGRESS COMPONENT
class Progress extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style.css">
        <div class="progress">
            <slot></slot>
        </div>
        `;
    }
}
customElements.define("my-progress", Progress)

// LIST
class List extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"}); 
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        <ul class="list">
                <div class="list-item-wrapper">
                <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                <div class="done"><i class="fa-solid fa-check"></i></div>
                    <li class="list-item">Meditation</li>
                </div>
                
                <div class="list-item-wrapper">
                    <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                    <div class="done"><i class="fa-solid fa-check"></i></div>
                    <li class="list-item">Pick up Anna</li>
                </div>

                <div class="list-item-wrapper">
                    <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                    <div class="done"><i class="fa-solid fa-check"></i></div>
                    <li class="list-item">Set up meeting with Jay</li>
                </div>

                <div class="list-item-wrapper">
                    <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                    <div class="done"><i class="fa-solid fa-check"></i></div>
                    <li class="list-item">Finish Daily Ui</li>
                </div>

                <div class="list-item-wrapper">
                    <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                    <div class="done"><i class="fa-solid fa-check"></i></div>
                    <li class="list-item">Second edits on article</li>
                </div>

                <div class="list-item-wrapper">
                    <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                    <div class="done"><i class="fa-solid fa-check"></i></div>
                    <li class="list-item">Email Chris</li>
                </div>
            </ul>
        `;
        const circles = this.shadowRoot.querySelectorAll(".circle-icon");
        const done = this.shadowRoot.querySelectorAll(".done");
        const list = this.shadowRoot.querySelector(".list")
       
   
        circles.forEach(circle => {
            circle.addEventListener("click", () => {
                circle.classList.add("green");        
            }); 
        });
        done.forEach(el => {
            el.addEventListener("click", () => {
                el.classList.add("done"); 
            })
        })
    }       
}
customElements.define("my-list", List)


// // RECURRING LISTS
class Recurring extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style.css">
        <div class="recurring">
        <slot></slot>
        </div>
        `;
    }
}
customElements.define("my-recurring", Recurring)

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

// LIST & PROGRESS BAR
class List extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"}); 
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        <div class="progress">
            <div class="progress-color">
            </div>
        </div>
        <div class="percentage">
            <p>0% complete</p>
        </div>
        <ul class="list">
                <div class="list-item-wrapper">
                    <div class="check-wrapper">
                        <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                        <div class="done-check"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <li class="list-item">Meditation</li>
                </div>
                
                <div class="list-item-wrapper">
                    <div class="check-wrapper">
                        <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                        <div class="done-check"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <li class="list-item">Pick up Anna</li>
                </div>

                <div class="list-item-wrapper">
                    <div class="check-wrapper">
                        <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                        <div class="done-check"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <li class="list-item">Set up meeting with Jay</li>
                </div>

                <div class="list-item-wrapper">
                    <div class="check-wrapper">
                        <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                        <div class="done-check"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <li class="list-item">Finish Daily Ui</li>
                </div>

                <div class="list-item-wrapper">
                    <div class="check-wrapper">
                        <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                        <div class="done-check"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <li class="list-item">Second edits on article</li>
                </div>

                <div class="list-item-wrapper">
                    <div class="check-wrapper">
                        <div class="circle-icon"><i class="fa-regular fa-circle"></i></div>
                        <div class="done-check"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <li class="list-item">Email Chris</li>
                </div>
            </ul>
        `;

        const checkWrapper = this.shadowRoot.querySelectorAll(".check-wrapper");
       
        checkWrapper.forEach(check => {
            check.addEventListener("click", ()=> {
                !check.classList.contains("green") ? check.classList.toggle("green"): check.classList.toggle("green");
                
                !check.childNodes[3].classList.contains("done") ? check.childNodes[3].classList.add("done"): check.childNodes[3].classList.remove("done");

                this.progressBar();
            })
        }) 
    }  

    progressBar() {
        const totalTasks = this.shadowRoot.querySelectorAll(".check-wrapper").length;
        const completedTasks = this.shadowRoot.querySelectorAll(".check-wrapper.green").length;
        const percentage = Math.round((completedTasks/totalTasks) * 100);
        const progressColor = this.shadowRoot.querySelector(".progress-color");
        const percentageText = this.shadowRoot.querySelector(".percentage p");

        percentageText.textContent = `${percentage}% compelete`;
        progressColor.style.width = `${percentage}%`;

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

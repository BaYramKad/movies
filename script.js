"use strict";
class Listeners {
    constructor(body, content, formModal, eventPopup) {
        this.body = document.querySelector(body);
        this.content = document.querySelector(content);
        this.formModal = document.querySelector(formModal);
        this.eventPopup = document.querySelector(eventPopup);

        this.content.style.position = "fixed";
        this.body.scrollTop = 0;
        this.elementsForm = [];
    }

    addPopupAccount() {
        this.formModal.style.display = "flex";
    }

    findElements() {
        for (let elem of this.formModal.elements) {
            if (elem.tagName.toLowerCase() !== "button" && elem.type !== "button") {
                this.elementsForm.push(elem);
            }
        } 
    }

    valid(event) {
        this.elementsForm.forEach(elem => {
            let patternValue = /^\d+$/;
            if (!elem.value) {
                elem.style.borderBottom = "2px solid red";
                event.preventDefault();
            } else {
                elem.style.borderBottom = "";
            }
    
            if (elem.id === "phone" && !patternValue.test(elem.value)) {
                elem.style.borderBottom = "2px solid red";
                event.preventDefault();
            }
        });
    }

    animateMenu() {
        let count = -90;
        const animateMenu = setInterval(() => {
            count++;
            this.content.style.top = count * 3 + "px";
            if (count === -55){
                this.content.style.top = count * 1 + "px";
                this.content.style.transition = "0.5s";
            } else if (count === 0){
                clearInterval(animateMenu);
            }
        }, 5);
    }
    init() {
        this.eventPopup.addEventListener("click", this.addPopupAccount.bind(this));
        this.formModal.addEventListener("submit", this.valid.bind(this));
        this.animateMenu();
        this.findElements();
    }
}

const listeners = new Listeners("body", ".content", "#form-modal", "#event-popup");
listeners.init();
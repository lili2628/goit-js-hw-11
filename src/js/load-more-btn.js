export default class LoadMoreBtn {
    constructor({selector, hidden = false}) {
        this.button = document.querySelector(selector);;

        hidden && this.hide();
    }

    enable() {
        this.button.disabled = false;
    }

    disabled() {
        this.button.disabled = true;
    }

    show() {
        this.button.classList.remove('is-hidden');
    }

    hide() {
        this.button.classList.add('is-hidden');
    }
    
}
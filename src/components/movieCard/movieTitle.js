class MovieTitle {
  #title;

  constructor(title) {
    this.#title = title;
    this.element = this.element();
  }

  element() {
    const p = document.createElement("p");
    p.classList.add("item-title");
    p.textContent = this.#title;

    return p;
  }
}

export default MovieTitle;

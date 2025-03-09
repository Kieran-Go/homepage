export class Project {
    constructor(name, description, img, 
        sourceCode = "https://github.com/Kieran-Go", live = "https://github.com/Kieran-Go") {

        this._name = name;
        this._description = description;
        this._img = img;
        this._sourceCode = sourceCode;
        this._live = live;
    }

    // Getters
    get name() { return this._name; }
    get description() { return this._description; }
    get img() { return this._img; }
    get sourceCode() { return this._sourceCode; }
    get live() { return this._live; }

    // Setters
    set name(name) { this._name = name; }
    set description(description) { this._description = description; }
    set img(img) { this._img = img; }
    set sourceCode(sourceCode) { this._sourceCode = sourceCode; }
    set live(live) { this._live = live; }
}

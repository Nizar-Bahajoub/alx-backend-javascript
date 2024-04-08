export default class Currency {
    constructor(code, name) {
        if (typeof name != 'string'){
            throw new TypeError('Name must be a string');
        }
        if (typeof code != 'string') {
            throw new TypeError('Code must be a string')
        }
        this._name = name;
        this._code = code;
    }

    /**
     * @param {String} name
     */
    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = name;
    }

    get name(){
        return this._name;
    }

    /**
     * @param {String} code
     */
    set code(code){
        if (typeof code != 'string') {
            throw new TypeError('Code must be a string')
        }
    }

    get code(){
        return this._code;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}

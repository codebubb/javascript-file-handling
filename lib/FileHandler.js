class FileHandler {

    constructor (event) {
        const files = event.target.files;
        this.files = Array.prototype.slice.call(files);
    }

    getFileNames() {
        return this.files.map(file => file.name);
    }

}

const Generator = require("yeoman-generator")

module.exports = class extends Generator{
    writing () {
        this.fs.write(
            this.destinationPath('parkxr.txt'),
            '610'
        )
    }
}
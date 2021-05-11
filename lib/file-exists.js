import { accessSync, constants } from 'fs'

function fileExists(file) {
    try {
        accessSync(file, constants.W_OK)
        return true
    } catch (err) {
        return false
    }
}

export default fileExists

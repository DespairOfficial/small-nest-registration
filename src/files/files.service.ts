import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as path from 'path'
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
@Injectable()
export class FilesService {
    async createFile(file): Promise<String> {
        try {
            const fileName = uuidv4() + '.jpg'
            console.log(fileName)
            const filePath = path.resolve(__dirname, '..', 'static')
            console.log(filePath)
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true })
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        } catch (error) {
            throw new HttpException(
                'Error during file writing ',
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }
}

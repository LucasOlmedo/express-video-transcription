import { BaseFileService } from './baseFileService.js';
import pdf from 'pdf-parse/lib/pdf-parse.js';

class PdfFileService extends BaseFileService {

    constructor(file, targetLanguage) {
        super(file, targetLanguage);
    }

    async extractText() {
        try {
            const dataBuffer = this.file.buffer;
            const data = await pdf(dataBuffer);

            return data.text;
        } catch (error) {
            throw new Error(`Error extracting text from PDF file: ${error.message}`);
        }
    }
}

export { PdfFileService };
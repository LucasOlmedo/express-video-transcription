import { BaseFileService } from './baseFileService.js';
import mammoth from 'mammoth';

class DocxFileService extends BaseFileService {

    constructor(file, targetLanguage) {
        super(file, targetLanguage);
    }

    async extractText() {
        try {
            const { value } = await mammoth.extractRawText({ buffer: this.file.buffer });
            return value;
        } catch (error) {
            throw new Error(`Error extracting text from DOCX file: ${error.message}`);
        }
    }
}

export { DocxFileService };
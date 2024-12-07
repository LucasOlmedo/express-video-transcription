import { BaseFileService } from './baseFileService.js';

class TextPlainFileService extends BaseFileService {

    constructor(file, targetLanguage) {
        super(file, targetLanguage);
    }

    async extractText() {
        try {
            return this.file.buffer.toString('utf-8');
        } catch (error) {
            throw new Error(`Error extracting text from text file: ${error.message}`);
        }
    }
}

export { TextPlainFileService };
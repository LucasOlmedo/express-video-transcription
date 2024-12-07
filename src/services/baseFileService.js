import { translateText } from './translationService.js';

class BaseFileService {

    constructor(file, targetLanguage) {
        this.file = file;
        this.targetLanguage = targetLanguage;
    }

    async process() {
        try {
            const transcription = await this.extractText();
            const translation = await translateText(transcription, this.targetLanguage);
            return translation;
        } catch (error) {
            throw new Error(`Error transcribing file: ${error.message}`);
        }
    }

    async extractText() {
        throw new Error('Method not implemented');
    }
}

export { BaseFileService };
import { BaseFileService } from "./baseFileService.js";

class AudioFileService extends BaseFileService {
    constructor(file, targetLanguage) {
        super(file, targetLanguage);
    }

    async extractText() {

    }
}

export { AudioFileService };
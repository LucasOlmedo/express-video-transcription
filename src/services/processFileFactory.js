import { isTextPlainFile, isPdfFile, isDocxFile, isAudioFile } from "../utils/fileUtils.js";
import { TextPlainFileService } from "./textPlainFileService.js";
import { PdfFileService } from "./pdfFileService.js";
import { DocxFileService } from "./docxFileService.js";
import { AudioFileService } from "./audioFileService.js";

const ProcessFileFactory = (file, targetLanguage) => {

    if (isTextPlainFile(file)) {
        return new TextPlainFileService(file, targetLanguage);
    }

    if (isPdfFile(file)) {
        return new PdfFileService(file, targetLanguage);
    }

    if (isDocxFile(file)) {
        return new DocxFileService(file, targetLanguage);
    }

    if (isAudioFile(file)) {
        return new AudioFileService(file, targetLanguage);
    }

    throw new Error("File format not supported");
};

export { ProcessFileFactory };
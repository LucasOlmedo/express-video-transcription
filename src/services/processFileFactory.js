import { isTextPlainFile, isPdfFile, isDocxFile } from "../utils/fileUtils.js";
import { TextPlainFileService } from "./textPlainFileService.js";
import { PdfFileService } from "./pdfFileService.js";
import { DocxFileService } from "./docxFileService.js";

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
};

export { ProcessFileFactory };
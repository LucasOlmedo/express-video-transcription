const isTextPlainFile = (file) => {
    return file.mimetype === "text/plain";
};

const isPdfFile = (file) => {
    return file.mimetype === "application/pdf";
}

const isDocxFile = (file) => {
    return file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
}

export { isTextPlainFile, isPdfFile, isDocxFile };
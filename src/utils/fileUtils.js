const availableAudioFormats = [
    "audio/mpeg", "audio/ogg", "audio/wav", "audio/webm",
    "audio/aac", "audio/flac", "audio/3gpp", "audio/3gpp2",
    "audio/mp4", "audio/mp4a-latm", "audio/opus", "audio/vorbis",
    "audio/x-aiff", "audio/x-matroska", "audio/x-mpegurl",
    "audio/x-ms-wma", "audio/x-pn-realaudio", "audio/x-wav",
];

const isTextPlainFile = (file) => {
    return file.mimetype === "text/plain";
};

const isPdfFile = (file) => {
    return file.mimetype === "application/pdf";
}

const isDocxFile = (file) => {
    return file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
}

const isAudioFile = (file) => {
    return availableAudioFormats.includes(file.mimetype);
}

export { isTextPlainFile, isPdfFile, isDocxFile, isAudioFile };
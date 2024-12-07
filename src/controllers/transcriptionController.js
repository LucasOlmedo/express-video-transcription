import { ProcessFileFactory } from "../services/processFileFactory.js";

const process = async (req, res) => {
    try {
        const { targetLanguage } = req.body;
        const file = req.file;

        if (!file) {
            throw new Error("No file uploaded");
        }

        const processFileFactory = ProcessFileFactory(file, targetLanguage);
        const result = await processFileFactory.process();

        res.send(result);

    } catch (error) {

        res.status(500).send({
            message: "Internal server error",
            error: error.message
        });
    }
}

export { process };
import { translate } from '@vitalets/google-translate-api';

const translateText = async (text, targetLanguage) => {
    try {
        const result = await translate(text, { to: targetLanguage });
        return result.text;
    } catch (error) {
        throw new Error(`Error translating text: ${error.message}`);
    }
};

export { translateText };
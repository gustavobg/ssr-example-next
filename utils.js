import removeAccents from 'remove-accents';

// eslint-disable-next-line import/prefer-default-export
export const slugify = text => removeAccents(text.toString().toLowerCase())
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars
    .replace(/-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')            // Trim - from end of text
;

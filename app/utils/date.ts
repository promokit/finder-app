export const getDate = (datetime: number): string => {
    const date = new Date(datetime);

    return date.toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
};

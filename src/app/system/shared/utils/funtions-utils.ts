export function itemArrayByEnum(enumValue: any) {
    return Object.keys(enumValue)
        .filter(k => typeof enumValue[k] === 'number')
        .map(label => ({ label, value: enumValue[label] }));
}
export function itemArrayByEnumString(enumValue: any) {
    return Object.keys(enumValue)
        .filter(k => typeof enumValue[k] === 'string')
        .map(label => ({ label, value: enumValue[label] }));
}


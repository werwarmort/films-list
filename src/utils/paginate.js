export function paginate(items, pageNumber, pageSize) {
    const statrIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(statrIndex, pageSize);
}

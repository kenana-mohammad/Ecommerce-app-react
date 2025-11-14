export function filterProducts(products, searchTerm, category) {
    if (!products.length < 0) return [];

    let filtered = products;

    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(term)
        );
    }
    if (category !== "All") {
        filtered = filtered.filter(p => p.category === category);
    }

    return filtered;

}
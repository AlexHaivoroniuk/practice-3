
export default class EnhancedSet extends Set {
    union(s) {
        return new EnhancedSet([...this, ...s]);
    }

    intersection(s) {
        if (this.size === 0 || s.size === 0) {
            return new EnhancedSet([]);
        }
        return new EnhancedSet([...[...this].filter(item => s.has(item)), ...[...s].filter(item => this.has(item))]);
    }

    difference(s) {
        return new EnhancedSet([...this].filter(item => !s.has(item)));
    }

    symmetricDifference(s) {
        return new EnhancedSet([...[...this].filter(item => !s.has(item)), ...[...s].filter(item => !this.has(item))]);
    }

    isSuperset(s) {
        return s.isSubset(this);
    }

    isSubset(s) {
        if (this.size === 0) {
            return true;
        }
        return [...this].reduce((acc, curItem) => {
            const bool = s.has(curItem);
            return acc && bool;
        });
    }
}

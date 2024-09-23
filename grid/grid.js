class Grid {
    constructor(rows, cols) {
        this.rowsCount = rows;
        this.colsCount = cols;
        this.grid = Array.from({ length: rows }, () => Array(cols).fill(undefined));
    }

    _parseParams(row, col) {
        if (typeof row === 'object') {
            return { row: row.row, col: row.col };
        }
        return { row, col };
    }

    set(row, col, value) {
        const { row: r, col: c } = this._parseParams(row, col);
        if (this._isInBounds(r, c)) {
            this.grid[r][c] = value;
        }
    }

    get(row, col) {
        const { row: r, col: c } = this._parseParams(row, col);
        return this._isInBounds(r, c) ? this.grid[r][c] : undefined;
    }

    indexFor(row, col) {
        const { row: r, col: c } = this._parseParams(row, col);
        return this._isInBounds(r, c) ? r * this.colsCount + c : undefined;
    }

    rowColFor(index) {
        const row = Math.floor(index / this.colsCount);
        const col = index % this.colsCount;
        return this._isInBounds(row, col) ? { row, col } : undefined;
    }

    neighbours(row, col) {
        const { row: r, col: c } = this._parseParams(row, col);
        const directions = [
            { row: r - 1, col: c }, // North
            { row: r + 1, col: c }, // South
            { row: r, col: c - 1 }, // West
            { row: r, col: c + 1 }, // East
        ];
        return directions.filter(({ row, col }) => this._isInBounds(row, col));
    }

    neighbourValues(row, col) {
        return this.neighbours(row, col).map(pos => this.get(pos));
    }

    nextInRow(row, col) {
        const { row: r, col: c } = this._parseParams(row, col);
        return this._isInBounds(r, c + 1) ? this.get(r, c + 1) : undefined;
    }

    nextInCol(row, col) {
        const { row: r, col: c } = this._parseParams(row, col);
        return this._isInBounds(r + 1, c) ? this.get(r + 1, c) : undefined;
    }

    north(row, col) {
        return this.get(row - 1, col);
    }

    south(row, col) {
        return this.get(row + 1, col);
    }

    west(row, col) {
        return this.get(row, col - 1);
    }

    east(row, col) {
        return this.get(row, col + 1);
    }

    rows() {
        return this.rowsCount;
    }

    cols() {
        return this.colsCount;
    }

    size() {
        return this.rowsCount * this.colsCount;
    }

    fill(value) {
        for (let r = 0; r < this.rowsCount; r++) {
            for (let c = 0; c < this.colsCount; c++) {
                this.set(r, c, value);
            }
        }
    }

    //tjek om det valid celler
    _isInBounds(row, col) {
        return row >= 0 && row < this.rowsCount && col >= 0 && col < this.colsCount;
    }
}

export default Grid;

type State = {
    cursor: Position
}

type Snake = {
    id: string,
    cells: Array<Position>
}

type Position = {
    x: number,
    y: number
}

export { State, Snake, Position }

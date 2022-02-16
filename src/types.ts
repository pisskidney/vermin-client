type Config = {
    debug: boolean,
    fps: number
}

type State = {
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
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

export { Config, State, Snake, Position }

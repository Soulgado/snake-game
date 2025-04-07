// branded types for uniqueness
// for axis
export type X = number & { __brand: "X"}; 
export type Y = number & { __brand: "Y"};
export type Point = [X, Y];

// size of field
export type Size = number & { __brand: "Size"};

// type for storing field coordinates
export type Shape = Point[];

// states of cells
export enum CellState {
    EMPTY = 0, // empty cell
    HEAD = 1, // head of the snake
    SNAKE = 2, // body of the snake
    APPLE = 3  // apple 
}

export interface GameOptions {
    width: number;
    height: number;
    initialSnakeSize: number;
    initialSnakeSpeed: number;
    maxSnakeSize: number;
}

export enum GameState {
    IDLE = 0,
    RUNNING = 1,
    PAUSED = 2,
    VICTORY = 3,
    GAMEOVER = 4, 
    LOADING = 5
}

export enum SnakeDirection {
    TOP = 0,
    RIGHT = 1,
    DOWN = 2,
    LEFT = 4
}

// events object for presenter
export interface IEvents {
    on<T extends object>(event: string, callback: (data: T) => void): void;
    emit<T extends object>(event: string, data?: T): void;
    trigger<T extends object>(event: string, context?: Partial<T>): (data: T) => void;
}

export interface IComponent {
    container: HTMLElement;
}

export interface ICell {
    state: CellState;
    set(state: CellState): CellState;
}

export interface IField {
    board: ICell[];
    clearBoard(): void;
    get(coords: Point): ICell;
    set(coords: Point, state: CellState): ICell;
}

export interface ISnake {
    length: number;
    direction: SnakeDirection;
    speed: number;
    initialSize: number;
    changeDirection(direction: SnakeDirection): void;
    onEatingApple(): void;
    generateStartingPosition(): Point;
}

export interface IApple {
    position: Point;
    generateNewPosition(): Point;
}

export interface IGame {
    gameState: GameState;
    gameOptions: GameOptions
    isValidPosition(): boolean;
    isReachedMaxSize(): boolean;
    setState(gameState: GameState): void;
}

export enum Events {
    START = "game:start",
    GAMEOVER = "game:over",
    VICTORY = "game:victory",
}



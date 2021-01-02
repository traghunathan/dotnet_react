let data = 42;

data = 10;

export interface ICar {
    color: string;
    model: string;
    topSpeed?: number;
}

const car1: ICar = {
    color: 'blue',
    model: 'BMW'
}

const car2: ICar = {
    color: 'Red',
    model: 'Honda',
    topSpeed: 120
}

const multiply = (x: number, y: number) => {
    return x*y;
}

export const cars = [car1, car2]
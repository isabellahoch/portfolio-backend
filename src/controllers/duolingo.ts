import { Request, Response } from 'express';
const Duolingo = require('duolingo-api');

const credential = {
    username: 'isabellahawk',
    id: 289518283
};

let duolingo = new Duolingo(credential);

async function getDataFields() {
    const myFields = ['totalXp', 'courses', 'streak'];
    return await duolingo.getDataByFields(myFields);
}

async function getMetadata() {
    return await duolingo.getRawData();
}


export const fetchDuolingoInfo = (req: Request, res: Response) => {

    getMetadata().then(data => {
        console.log(data);
    })
    getDataFields().then(data => {
        res.status(200).json(data);
    });
};
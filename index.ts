import { Handler } from 'aws-lambda';

type Event = {
    key1: string
    key2: string
    key3: string
};

type ResultSuccess = {
    ok: true
}
type ResultError = {
    ok: false
    message: string
}
type Result = ResultSuccess | ResultError


// do not use callback, use async/await
export const handler: Handler<Event, Result> = async (event, context) => {
    console.log('EVENT: \n' + JSON.stringify(event, null, 2));
    console.log(`key1 + key2 + key3: ${event.key1} + ${event.key2} + ${event.key3}`);
    console.log(`FunctionName: ${context.functionName}`);

    const err = Math.random() > 0.5 ? true : false;

    if (err) {
        return {
            ok: false,
            message: 'Error message here...'
        };
    } 

    return {
        ok: true
    };
};
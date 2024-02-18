import { Context } from 'aws-lambda';
import { handler } from './index';


const event = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

const ctx = {
    functionName: 'test-function',
    functionVersion: '1',
    invokedFunctionArn: 'arn:aws:lambda:us-east-1:123456789012:function:test-function',
    // ...
} as Context;

// The handler type (defined in @types/aws-lambda) includes a callback parameter, but we don't use it in our handler function.
// To pass the TypeScript compiler check, you should provide an empty callback function to the handler.
// The callback function will never be called unless you include it in your handler function.
const promise = handler(event, ctx, (err, result) => {});

// If your handler returns something value, you can use the promise to handle the result.
// If your handler does not return anything, you can ignore the promise.
if (typeof promise === 'object' && promise.then instanceof Function) {
    promise.then((result) => {
        console.log('Local invocation result:')
        console.log(JSON.stringify(result, null, 2));
    }).catch((err) => {
        console.error('Local invocation error:')
        console.error(err);
    });
}
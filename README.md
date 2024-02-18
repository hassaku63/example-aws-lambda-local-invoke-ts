# README

This is minimum example to develop and invoke locally Lambda Function (node.js)

## Prerequisite

- node.js 20.x
- Docker
- GNU Make
- curl

## Usage

### Invoke locally with docker container

```bash
$ npm i

# build index.ts & build container (it will expose local port 9000)
# fixed value "lambda-local-ts:latest" is used as image name and image tag in this task
$ make lambda-local
...
18 Feb 2024 07:15:58,453 [INFO] (rapid) exec '/var/runtime/bootstrap' (cwd=/var/task, handler=)

# invoke lambda locally
# it requests local endpoint with sample event data (sample.json)
$ make test-invoke
make test-invoke
Invoking lambda
{"ok":false,"message":"Error message here..."}
```

### Invoke locally without container

If you don't need a container for local execution of Lambda handlers, you can also support local execution by directly calling the handler function from another module.

Please refer to invoke-local.ts for sample code in such cases.

```ts
$ npx ts-node invoke-local.ts
EVENT: 
{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}
key1 + key2 + key3: value1 + value2 + value3
FunctionName: test-function
Local invocation result:
{
  "ok": false,
  "message": "Error message here..."
}
```

## Reference

1. https://docs.aws.amazon.com/lambda/latest/dg/nodejs-image.html
2. https://docs.aws.amazon.com/lambda/latest/dg/images-test.html
3. https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html

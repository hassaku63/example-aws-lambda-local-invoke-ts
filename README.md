# README

This is minimum example to develop and invoke locally Lambda Function (node.js)

## Prerequisite

- node.js 20.x
- Docker
- GNU Make
- curl

## Usage

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

## Reference

- https://docs.aws.amazon.com/lambda/latest/dg/nodejs-image.html
- https://docs.aws.amazon.com/lambda/latest/dg/images-test.html
TSC=npx tsc

.PHONY: ts-build image-build lambda-local test-invoke

ts-build:
	@$(TSC)

image-build: ts-build
	@echo "Building docker image (use fixed name)"
	@docker build --platform linux/amd64 -t lambda-local-ts:latest .

lambda-local: image-build
	@echo "Running lambda locally"
	@docker run -p 9000:8080 lambda-local-ts:latest

test-invoke:
	@echo "Invoking lambda"
	@curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d @sample.json

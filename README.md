
# demo project for claudia api builder routing


Sets up various routes that print out how they got called and path parameters for troubleshooting purposes. Load them with CURL to see where they got routed to:

* `/direct`
* `/pets`
* `/pets/{type}` 
* `/users/{all+}` 
* `/users` 
* `/`

## deploy initial version

```
npm run create
```

## switch to AWS_PROXY routing

```
npm run use-aws-proxy
```

## switch to API Builder routing

```
npm run use-api-builder
```



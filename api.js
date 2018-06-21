const API = require('claudia-api-builder'),
	requestFormat = process.env.REQUEST_FORMAT,
	api = new API({requestFormat: requestFormat}),
	routes = ['/direct', '/pets', '/pets/{type}', '/users/{all+}', '/users', '/'],
	createRoute = function (route) {
		api.get(route, request => ({
			routedTo: route,
			requestFormat: requestFormat,
			args: (requestFormat === 'AWS_PROXY') ? request.pathParameters : request.pathParams
		}));
	};

routes.forEach(route => createRoute(route));

module.exports = api;



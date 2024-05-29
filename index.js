import Fastify from 'fastify';

const fastify = Fastify({
	logger: true,
});

fastify.get('/', async (request, reply) => {
	return { hello: 'world' };
});

fastify.listen({ port: 3000, host: '127.0.0.1' }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}

	console.log('\x1b[36m%s\x1b[0m', `Server listening on ${address}`);
});

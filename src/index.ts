import server from './server';
server.start(() => {
  console.log('Server GraphQL Running');
  return {port: 4000}
});


// interface PgClientConfig {
//   user?: string; // default process.env.PGUSER || process.env.USER
//   password?: string; //or function, //default process.env.PGPASSWORD
//   host?: string; // default process.env.PGHOST
//   database?: string; // default process.env.PGDATABASE || user
//   port?: number; // default process.env.PGPORT
//   connectionString?: string; // e.g. postgres://user:password@host:5432/database
//   ssl?: any; // passed directly to node.TLSSocket, supports all tls.connect options
//   types?: any; // custom type parsers
//   statement_timeout?: number; // number of milliseconds before a statement in query will time out, default is no timeout
//   query_timeout?: number; // number of milliseconds before a query call will timeout, default is no timeout
//   application_name?: string; // The name of the application that created this Client instance
//   connectionTimeoutMillis?: number; // number of milliseconds to wait for connection, default is no timeout
//   idle_in_transaction_session_timeout?: number; // number of milliseconds before terminating any session with an open idle transaction, default is no timeout
// }

export function setupDbClientConfig() {
    const databaseUrl = process.env.USE_DEV_DB
        ? process.env.DEV_DATABASE_URL
        : process.env.DATABASE_URL;
    console.log("databaseUrl", databaseUrl);
    const config = {
        connectionString: databaseUrl,
        ssl: {
            rejectUnauthorized: true,
        },
    };
    return config;
}

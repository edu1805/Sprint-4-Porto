
const dbConfig = {
    user: process.env.ORACLE_DB_USER || 'rm555309',
    password: process.env.ORACLE_DB_PASSWORD || '181005',
    connectString: process.env.ORACLE_DB_CONNECTIONSTRING || 'oracle.fiap.com.br:1521/ORCL',
};

export default dbConfig;
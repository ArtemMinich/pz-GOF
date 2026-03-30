import { Database } from "./Database";

export { Database } from "./Database";

console.log("\n=== Singleton ===\n");

const db1 = Database.getInstance();
const db2 = Database.getInstance();
const db3 = Database.getInstance();

console.log(`  Три виклики getInstance():`);
console.log(`  db1 === db2 ? ${db1 === db2}`);
console.log(`  db2 === db3 ? ${db2 === db3}`);
console.log(`  Усі посилаються на один об'єкт з id: ${db1.query("")}`);

console.log();
console.log(`  Запит через db1: ${db1.query("SELECT * FROM users")}`);
console.log(`  Запит через db2: ${db2.query("INSERT INTO orders VALUES (1)")}`);
console.log(`  Запит через db3: ${db3.query("DELETE FROM temp")}`);
console.log(`  Один і той самий DB id — один екземпляр обслуговує всі запити.`);

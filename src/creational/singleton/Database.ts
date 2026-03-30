export class Database {
  private static instance: Database | null = null;
  private id = Math.floor(Math.random() * 10000);

  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  query(sql: string): string {
    return `[DB #${this.id}] ${sql}`;
  }
}

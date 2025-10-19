import {pool} from "./db";
import fs from "fs";

const schema = fs.readFileSync('src/db/schema.sql', 'utf-8');

(async () => {
    try{
        await pool.query(schema);
        console.log('✅ Tabelas criadas com sucesso!');
        process.exit(0);
    }catch (err){
        console.error('❌ Erro ao criar tabelas:', err);
        process.exit(1);
    }
})();
const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
// Configuração do Cypress com task personalizada para salvar logs de erro em disco
module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // Registra a task para salvar logs
      on('task', {
        gravarLog(mensagem) {
          // Cria uma data/hora formatada (padrão brasileiro)
          const agora = new Date().toLocaleString('pt-BR');
          const linhaDoLog = `[${agora}] - ${mensagem}\n`;

          // Define o caminho do arquivo (pasta cypress/logs/)
          const pastaLog = path.join(__dirname, 'cypress', 'logs');
          const arquivoLog = path.join(pastaLog, 'test_errors.log');

          // Garante que a pasta existe e adiciona o log ao arquivo
          if (!fs.existsSync(pastaLog)) {
            fs.mkdirSync(pastaLog, { recursive: true });
          }
          fs.appendFileSync(arquivoLog, linhaDoLog);

          return null; // Tasks do Cypress precisam retornar null ou um valor
        } // <--- Fechamento da função gravarLog
      }); // <--- Fechamento do método on('task', { ... })

      // implement node event listeners here
      return config;
    },
  },
});

# Aplicação para checar o consumo de memória RAM

## Do que se trata?
Esta é uma aplicação bem simples que, ao ser ativada, informa o consumo de memória RAM ao usuário.

## Como ativar?
- Cerfique-se de possuir o Node instalado
- Clone este repositório com o comando `git clone <URL do repositório>.git` (ou baixe o repositório como arquivo ZIP)
- Por meio de um terminal (prompt de comando), utilize o comando `node server.js` para ativar o servidor da aplicação
- Acesse a aplicação em `http://localhost:3000/usage`

### Observação
- Caso deseje executar apenas o script que informa o uso da RAM em tempo real, ao invés de utilizar `node server.js`, use `node pcRamUsage.js`

### Observação 2
- O foco desta aplicação foi apenas a própria funcionalidade dela. Por esta razão, foram utilizadas apenas as funcionalidades disponíveis no Node, sem bibliotecas externas.
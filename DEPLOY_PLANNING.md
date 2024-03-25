# Memoteca
# Preparando o Ambiente

# Pré-requisitos
- Node v16.14.2
- Angular CLI 14.0 (**npm install -g @angular/cli@14.0.0**)
- JSon server (**npm i json-server@0.17.4**)

# Rodando a aplicação

## Back-end
	**criar o arquivo db.json**
	**npm init -y**

- Acessaremos em seguida o package.json. Na seção "scripts": {} temos o código abaixo:
"test": "echo \"Error: no test specified\" && exit 1"
Mudaremos o comando "test" para "start" e substituiremos o conteúdo das aspas duplas.
"start": "json-server --watch db.json --port 3000"
- Dessa forma, configuramos o JSON Server para consultar o arquivo db.json e executar a API na porta 3000.
- Como teste, vamos executar um comando no terminal, ainda dentro da pasta backend.
**npm start**
http://localhost:3000/pensamentos

## Front-end
-Na pasta raiz do projeto executar **npm start**

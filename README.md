# Exemplo de teste unitário com Jest

Esse é o exemplo de código + testes feito em sala de aula no dia 13/04/2023. Para configurar um projeto do início siga os passos abaixo:

**1. Crie o diretório do seu projeto**

```
mkdir <nome_do_diretorio>
```

**2. Inicie um projeto com npm no diretório**

```bash
cd <nome_do_diretorio>
npm init -y
```

**3. Adicione as dependências do projeto**

```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env
```

**3. Inicialize o arquivo de configurações do Jest**

```bash
npx jest --init
```

O `npx` só é necessário caso você não tenha a cli do **Jest** instalada de maneira global. Pra checar, digite `which jest` e verifique a saída. Caso tenha, apenas `jest --init` é suficiente.

Esse comando fará algumas perguntas em uma ordem que pode não ser a mesma que foi apresentada durante a aula. As perguntas com as respostas se encontram abaixo para referência:

```
✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes
```

**4. Crie o arquivo de configuração do Babel**

Crie um arquivo chamado `babel.config.js` e inclua a seguinte instrução nele.

```javascript
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

**5. Execute o comando de teste quando necessário**

Para executar os testes apenas uma vez, utilize `npm test`. Caso queira monitorar as mudanças do projeto e reexecutar os testes a cada mudança, use `npm test -- --watchAll`.

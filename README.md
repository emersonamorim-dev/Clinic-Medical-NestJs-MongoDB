## API de Clinic Medical com NestJs e MongoDB

Codificação de uma API de clínica médica construída com NestJS e Mongoose programado em Typescript. A API permite a criação, recuperação, atualização e exclusão de pacientes.

**Estrutura do Projeto**
O projeto é estruturado em três partes principais:

1. Model: Define a estrutura de dados do paciente.
2. Service: Contém a lógica de negócios para manipular os dados do paciente.
3. Controller: Gerencia as solicitações e respostas HTTP.

### Model
O modelo PatientModel define a estrutura de dados para um paciente. Cada paciente tem um nome, idade, sexo, telefone e endereço. Todos os campos, exceto o endereço, são obrigatórios.

###Service
O serviço ClinicService contém a lógica de negócios para manipular os dados do paciente. Ele fornece métodos para criar, recuperar, atualizar e excluir pacientes.

### Controller
O controlador ClinicController gerencia as solicitações e respostas HTTP. Ele usa o serviço ClinicService para manipular os dados do paciente e retorna respostas HTTP adequadas.


### Rotas
A API fornece as seguintes rotas:

POST /clinic/patients: Cria um novo paciente.
GET /clinic/patients: Recupera todos os pacientes.
GET /clinic/patients/:id: Recupera um paciente pelo ID.
PUT /clinic/patients/:id: Atualiza um paciente pelo ID.
DELETE /clinic/patients/:id: Exclui um paciente pelo ID.

Endpoint de Requisição Post segue o corpo em Json para cadastro via Postman:
http://localhost:3000/clinic/patients
{
  "nome": "Emerson Amorim",
  "idade": 42,
  "sexo": "Masculino",
  "telefone": "1199981981",
  "endereco": "rua 181"
}


### Como usar
Para usar a API, você precisa ter o Node.js e o MongoDB instalados em seu sistema. Depois de instalados, siga estas etapas:

Clone o repositório.
Instale as dependências com npm install.

Inicie o servidor com npm run start.
A API agora está disponível em http://localhost:3000.


Autor:
**Emerson Amorim**

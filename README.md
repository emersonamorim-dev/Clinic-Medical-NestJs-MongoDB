## API de Clinic Medical com NestJs e MongoDB

Codificação de uma API de clínica médica construída com NestJS e Mongoose programado em Typescript. A API permite a criação, recuperação, atualização e exclusão de pacientes. Implementação de Teste Unitário em Jest do clinic.controller.spec.ts para deixar o código mais testável.

**Estrutura do Projeto**
O projeto é estruturado em três partes principais:

1. Model: Define a estrutura de dados do paciente.
2. Service: Contém a lógica de negócios para manipular os dados do paciente.
3. Controller: Gerencia as solicitações e respostas HTTP.
4. DTO: significa Data Transfer Object. É um padrão de design usado para transferir dados entre camadas de software e/ou sistemas de maneira eficiente e consistente.

### Model
O modelo PatientModel define a estrutura de dados para um paciente. Cada paciente tem um nome, idade, sexo, telefone e endereço. Todos os campos, exceto o endereço, são obrigatórios.

### Service
O serviço ClinicService contém a lógica de negócios para manipular os dados do paciente. Ele fornece métodos para criar, recuperar, atualizar e excluir pacientes.

### Controller
O controlador ClinicController gerencia as solicitações e respostas HTTP. Ele usa o serviço ClinicService para manipular os dados do paciente e retorna respostas HTTP adequadas.

### DTO
O PatientDTO é usado para transferir dados de pacientes entre diferentes partes do sistema. Ele define a estrutura dos dados do paciente que serão usados na aplicação. Aqui estão os campos definidos na classe PatientDTO:


### Rotas
A API fornece as seguintes rotas:

- POST /clinic/patients: Cria um novo paciente.
- GET /clinic/patients: Recupera todos os pacientes.
- GET /clinic/patients/:id: Recupera um paciente pelo ID.
- PUT /clinic/patients/:id: Atualiza um paciente pelo ID.
- DELETE /clinic/patients/:id: Exclui um paciente pelo ID.

Endpoint de Requisição Post segue o corpo em Json para cadastro via Postman:
http://localhost:3000/clinic/patients
1. {
2.   "nome": "Emerson Amorim",
3.   "idade": 42,
4.   "sexo": "Masculino",
5.   "telefone": "1199981981",
6.   "endereco": "rua 181"
7. }


### Como usar
Para usar a API, você precisa ter o Node.js e o MongoDB instalados em seu sistema. Depois de instalados, siga estas etapas:

Clone o repositório.
Instale as dependências com npm install.

Inicie o servidor com npm run start.
A API agora está disponível em http://localhost:3000.


Autor:
**Emerson Amorim**

<template>
    <div class="container">
      <div class="desktop">
        <table>
          <tr>
            <th>Dia</th>
            <th>Entrada 1</th>
            <th>Saída 1</th>
            <th>Entrada 2</th>
            <th>Saída 2</th>
            <th>Ações</th>
          </tr>
          <tr v-for="datas of data">
            <td>{{ datas.created_at }}</td>
            <td>{{ datas.hours }}</td>
            <td>{{ datas.hours }}</td>
            <td>{{ datas.hours }}</td>
            <td>{{ datas.hours }}</td>
            <td style="font-size: 20px; cursor: pointer">
              <font-awesome-icon icon="cog" />
              <font-awesome-icon icon="exclamation-triangle" />
            </td>
          </tr>
        </table>
      </div>
      <div class="responsive">
        <div class="responsive-styles">
          <p style="margin-right: 2px;">Dia</p>
          <div v-for="datas of data">
            <p>{{ datas.created_at }}</p>
          </div>
        </div>
        <div class="responsive-styles2">
          <p style="margin-right: 2px;">Entrada 1</p>
          <div v-for="datas of data">
            <p>{{ datas.hours }}</p>
          </div>
        </div>
        <div class="responsive-styles">
          <p style="margin-right: 2px;">Saída 1</p>
          <div v-for="datas of data">
            <p>{{ datas.hours }}</p>
          </div>
        </div>
        <div class="responsive-styles2">
          <p style="margin-right: 2px;">Entrada 2</p>
          <div v-for="datas of data">
            <p>{{ datas.hours }}</p>
          </div>
        </div>
        <div class="responsive-styles">
          <p style="margin-right: 2px;">Saída 2</p>
          <div v-for="datas of data">
            <p>{{ datas.hours }}</p>
          </div>
        </div>
        <div class="responsive-styles2">
          <p style="margin-right: 2px;">Ações</p>
            <font-awesome-icon icon="cog" />
            <font-awesome-icon icon="exclamation-triangle" />
        </div>
      </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
      data() {
        return {
          data: [],
          errors: []
        }
      },
      // Axios GET pega os dados do meu arquivo db.json que é uma Fake API (json-server - https://github.com/typicode/json-server) e faz um .map para separar o "created_at" e "hours" de dentro do response.data
      created() {
        axios.get('http://localhost:3000/datas')
        .then(response => {
          // this.data = response.data;
          this.data = response.data.map((item) => {
            return {
              created_at: item.timecard_group_hours[0].created_at,
              hours: item.timecard_group_hours[0].hours,
            };
          });
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    }
    </script>

<!-- Adicionado o atributo "scoped" para limitar este CSS apenas a este componente -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.responsive {
  display: none;
}
@media screen and (max-width: 992px) {
  .desktop {
    display: none;
  }
  .responsive {
    display: block;
    margin: 10px;
  }
  .responsive-styles {
    display: flex;
    color: #FFF;
    font-size: 14px;
    background-color: #434a52;
    padding: 10px;
    font-family: 'Trebuchet MS';
  }
  .responsive-styles2 {
    display: flex;
    color: #FFF;
    font-size: 14px;
    background-color: #3a424a;
    padding: 10px;
    font-family: 'Trebuchet MS';
  }
}

table {
  border-radius: 10px;
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

th {
  background-color: #2f363e;
  color: #FFFFFF;
  font-family: 'Trebuchet MS';
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
th:hover {
  color: #41b883;
  cursor: default;
}

td {
  background-color: #434a52;
  color: #FFFFFF;
  font-family: 'Trebuchet MS';
}
td:hover {
  color: #41b883;
  cursor: default;
}

th, td {
  min-width: 180px;
  padding: 10px 20px;
}
</style>

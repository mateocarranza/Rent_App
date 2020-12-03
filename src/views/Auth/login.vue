<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-3 mt-50">
        <he class="title is-3">Iniciar sesion</he>
        <hr />
        <form action="#" @submit.prevent="login">
            
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="juancarranza@gmail.com"
                v-model="mail"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="*************"
                v-model="pass"
              />
            </div>
          </div>

          <button type="submit" class="button is-primary">Iniciar</button>
        </form>

        <div class="notification is-warning is-light mt-10" v-if="error">
            {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
 import '@/firebase/init.js'
 import firebase from 'firebase'
export default {
  data() {
    return {
      mail: '',
      pass: '',
      error: ''
    };
  },
  name: 'Login',
  methods: {
    login() {
      if (this.mail && this.pass) {
        //Enviamos Formulario
        firebase.auth().signInWithEmailAndPassword(this.mail, this.pass)
        .then(user =>{
            this.$router.push({name: 'dashboard'})
            console.log(user)
        }).catch(err => {
            this.error = err.menssage
        })
      } else {
          this.error = "Todos los campos son requeridos"
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-3 mt-50">
        <he class="title is-3">Crea tu cuenta</he>
        <hr />
        <form action="#" @submit.prevent="register">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Juan Carranza"
                v-model="name"
              />
            </div>
          </div>

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

          <button type="submit" class="button is-primary">Registrarme</button>
        </form>

        <div class="notification is-warning is-light mt-10" v-if="error">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
import "@/firebase/init.js";
import firebase from "firebase";
export default {
  data() {
    return {
      name: "",
      mail: "",
      pass: "",
      error: "",
    };
  },
  name: "Register",
  methods: {
    register() {
      if (this.name && this.mail && this.pass) {
        //Enviamos Formulario
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.mail, this.pass)
          .then((user) => {
            if (user) {
              user.user.updateProfile({
                  displayName: this.name,
                })
                .then((u) => {
                  this.name = "";
                  this.mail = "";
                  this.pass = "";
                  this.$router.push({ name: "dashboard" });
                  console.log(u);
                })
                .catch((err) => {
                  this.error = err.message;
                });
            }
            console.log(user);
          })
          .catch((err) => {
            this.error = err.message;
          });
      } else {
        this.error = "Todos los campos son requeridos";
      }
    },
  },
};
</script>
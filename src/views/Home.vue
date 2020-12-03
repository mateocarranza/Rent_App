<template>
  <div class="home">
    <div class="title">
      <p>Hola </p>
      <p class="text-bold">Empezando a buscar tu casa</p>
    </div>
    <div class="tags">
      <div class="content">
        <div class="avatar-tag selected">
          <i class="bx bx-home-alt bx-sm"></i>
        </div>
      </div>
    </div>
    <CardApp
      @click="redirect(`/view`)"
      :dptos="dptos"
    />
    <div style="margin-bottom: 60px"></div>
  </div>
</template>

<script>
import CardApp from "@/components/CardApp.vue";
import firebase from 'firebase';
export default {
  name: "Home",
  components: {
    CardApp,
  },
  data() {
    return {
      user: null    
    };
  },
  mounted() {
  },
  methods: {
    redirect(parameter) {
      this.$router.push(parameter);
    },
    GetUser() {
      firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }else{
        this.user = null
      }
    })
    },
  },
};
</script>


<style lang="less">
.home {
  z-index: 1000;
  background-color: #f8fbff;
  padding: 10px;
  .tags {
    border-radius: 20px;
    position: sticky;
    width: 100%;
    top: 0;
    margin-bottom: 10px;
    z-index: 3001;
    background-color: white;
    .content {
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      .avatar-tag {
        margin: 10px;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        color: rgba(140, 138, 136);
        transition: all 0.25s ease;
        &.selected {
          color: white;
          background-color: rgba(70, 208, 218);
        }
      }
    }
  }
  .input {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 15px;
    i {
      position: absolute;
      right: 0;
      margin-right: 10px;
      font-size: 1.1rem;
    }
    input {
      padding: 10px;
      border: none;
      outline: none;
      width: 100%;
      border-radius: 10px;
      background-color: white;
    }
  }
  .title {
    margin-bottom: 30px;
    margin-top: 70px;
    p {
      color: rgba(214, 216, 219);
    }
    .text-bold {
      font-weight: bold;
      color: rgba(20, 73, 123);
    }
  }
}
</style>
<<<<<<< Updated upstream

<script>
// @ is an alias to /src
import CardApp from "@/components/CardApp.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    CardApp,
  },
  created() {
    this.getDpto();
  },
  computed: {
    ...mapState("dptosNamespace", ["dptos"])
  },
  methods: {
    ...mapActions("dptosNamespace", ["getDpto"]),
    redirect(parameter) {
      this.$router.push(parameter);
    },
  },
};
</script>
=======
>>>>>>> Stashed changes

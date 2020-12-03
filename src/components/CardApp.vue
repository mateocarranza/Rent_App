<template>
  <div>
    <div
      v-for="(dpto, index) in dptos"
      :key="index"
      @click="click(dpto)"
      class="card"
    >
      <div class="card-content">
        <div class="tag-card">
          <i class="bx bx-current-location"></i>{{ dpto.location }}
        </div>
        <div class="footer-card">
          <div class="action">
            <button><i class="bx bx-heart"></i></button>
          </div>
          <div class="footer-card-content">
            <div class="footer-card-left">
              <div class="title">
                <h3>{{ dpto.title }}</h3>
              </div>
              <div class="user">
                <div class="content-user">
                  <div class="img-content">
                    <img :src="dpto.imgUser" alt="" />
                  </div>
                  <div class="username">{{ dpto.username }}</div>
                </div>
                <div class="starts">
                  <span :key="index" v-for="(item, index) in dpto.start"
                    ><i class="bx bxs-star"></i
                  ></span>
                  <small>{{ dpto.start }} Starts</small>
                </div>
              </div>
            </div>
            <div class="footer-card-right">
              <div class="price">
                <p>USD {{ dpto.price }}</p>
              </div>
              <div class="rooms">
                <div class="rooms-items">
                  <i class="bx bx-bed"></i>
                  {{ dpto.bed_rooms }}
                </div>
                <div class="rooms-items">
                  <i class="bx bx-bath"></i>
                  {{ dpto.bath_rooms }}
                </div>
                <div v-if="dpto.wifi" class="rooms-items">
                  <i class="bx bx-cloud-light-rain"></i>
                </div>
                <div class="rooms-items">
                  <i class="bx bx-cloud-light-rain"></i>
                  {{ dpto.mts }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img :src="dpto.imgCard" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card {
    margin-top: 10px;
  .card-content {
    box-shadow: 0px 5px 10px -2px rgba(74, 54, 251, 0.2);
    .footer-card {
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      .action {
        position: absolute;
        bottom: 36%;
        right: 10%;
        z-index: 3000;
        button {
          &:hover {
            transform: translate(0, 2px);
          }
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0px 10px 20px -2px rgba(15, 17, 26, 0.25);
          border: none;
          outline: none;
          border-radius: 50px;
          background-color: white;
          padding: 8px;
          i {
            color: rgb(232, 63, 103);
            font-weight: bold;
          }
        }
      }
      .footer-card-content {
        border-radius: 40px;
        padding: 8px;
        position: absolute;
        bottom: 0%;
        width: 100%;
        display: flex;
        background-color: #fff;
        align-items: center;
      }
      .footer-card-right {
        .price {
          p {
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: -0.3px;
          }
        }
        height: 100%;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        .rooms {
          margin-top: 13px;
          display: flex;
          justify-content: space-between;
          width: 80%;
          font-size: 12px;
          .rooms-items {
            i {
              color: rgba(var(--text-gray));
            }
            color: rgba(var(--text-gray));
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .footer-card-left {
        margin-left: 16px;
        .title {
          margin: 10px;
          text-align: start;
        }
        .user {
          display: flex;
          flex-direction: column;
          .starts {
            margin: 10px;
            text-align: start;
            display: flex;
            align-items: center;
            small {
              margin-left: 20px;
            }
            color: rgba(225, 207, 241);
            i {
              color: rgba(69, 208, 215);
            }
          }
          .content-user {
            display: flex;
            align-items: center;
            margin-left: 10px;
            .username {
              margin-left: 10px;
            }
          }
        }
        display: flex;
        flex-direction: column;
        width: 60%;
        .img-content {
          width: 30px;
          height: 30px;
          border-radius: 50px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    border-radius: 30px;
    overflow: hidden;
    width: 100%;
    height: 300px;
    position: relative;
    .tag-card {
      position: absolute;
      background-color: rgb(244, 242, 243);
      padding: 8px;
      z-index: 3000;
      top: 0;
      margin: 20px;
      border-radius: 15px;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      i {
        margin-right: 10px;
      }
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script>
import { mapActions } from "vuex";
export default {
  name: "CardApp",
  props: {
    dptos: Array,
  },
  created() {
    //console.log(this.start);
  },
  methods: {
      ...mapActions("dptosNamespace", ["guardarDpto"]),
      click(obj) {
          this.guardarDpto(obj)
          this.$emit('click');
      }
  }
};
</script>

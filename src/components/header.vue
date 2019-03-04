<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1><router-link to="/">默默博客</router-link></h1>
      <p>始于笔下</p>
      <div class="btns">
        <router-link to="/login">
          <button>立即登录</button>
        </router-link>
        <router-link to="/register">
          <button>注册账号</button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">默 默 博 客</router-link></h1>
      <router-link to="/create"><i class="edit el-icon-edit"></i></router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>

  import auth from '@/api/auth'
  window.auth = auth
  // import $ from 'jQuery'

  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        active:false
      }
    },

    computed: {
      ...mapGetters([
        'isLogin',
        'user'
      ])
    },

    created() {
      this.checkLogin()
    },

    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
      onLogout() {
        this.logout().then(()=>{
          this.$router.push('/')
        })
      },
      // activeButton(e){
      //   let buttons = document.querySelectorAll('button')
      //   console.log(buttons);
      //   for(let i=0;i<buttons.length;i++){
      //     buttons[i].classList.remove('active')
      //   }
      //   console.log(e.current);
      //   let activeBtn = $(e.currentTarget)
      //   activeBtn.addClass('active')
      // }
    }

  }
</script>


<style lang="less">

  @import "../assets/base.less";

  header.no-login {
    padding: 0 12% 30px 12%;
    background-color: #333;
    display: grid;
    justify-items: center;

    h1 {
      font-size: 40px;
      margin: 20px 0 0 0;
      text-transform: uppercase;

    }
    a{
      text-decoration: none;
      color: #fff;

    }

    p {
      font-size: 24px;
      font-family: cursive;
      margin: 10px 0 0 0;
      color: #fff;
    }

    .btns {
      margin-top: 20px;
    }

    button {
      display: inline-block;
      line-height: 1;
      cursor: pointer;
      background: #333;
      margin: 5px 15px;
      border: 1px solid #dcdfe6;
      color: #dcdfe6;
      outline: 0;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      &:focus{
        color: #333;
        background: white;
      }
    }
  }


  header.login {
    display: flex;
    align-items: center;
    background-color: #333;

    h1 {
      margin: 0;
      padding: 0;
      font-size: 40px;
      text-transform: uppercase;
      flex: 1;
      a{
        color: #fff;
      }
    }

    .edit {
      color: #fff;
      font-size: 30px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-left: 15px;
    }

    .user {
      position: relative;

      ul {
        display: none;
        position: absolute;
        right: 0;
        list-style: none;
        margin:0;
        padding: 0;
        background-color: #fff;

        a {
          text-decoration: none;
          color: #333;
          font-size: 12px;
          display: block;
          padding: 5px 10px;

          &:hover {
            background-color: #eaeaea;
          }
        }

      }

      &:hover ul {
        display: block;
      }
    }
  }



</style>

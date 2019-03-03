import {mapActions} from "vuex";

export default {
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    ...mapActions(['login','checkLogin','logout']),

    onLogin(){
      this.login({username: this.username, password:this.password})
        .then(()=>{
          this.$router.push({path: this.$route.query.redirect || '/my'})
        })

    }
  },
  created(){
    this.checkLogin().then(res=>{
      if (res){
        this.logout()
        this.$router.push({path: this.$route.query.redirect || '/'})
      }
    })
  }

}

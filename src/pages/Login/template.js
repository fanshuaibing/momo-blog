import {mapActions} from "vuex";
import blog from "../../api/blog";

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
          this.$router.push({path: this.$route.query.redirect || '/'})
        })

    }
  },
  created(){
    this.checkLogin().then(res=>{
      if(res){
        this.$router.push('/')
      }
    })
  }

}

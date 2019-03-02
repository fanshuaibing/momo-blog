import blog from '@/api/blog.js'


export default {
  data(){
    return {
      blogs:[],
      total:0,
      page:1
    }
  },
  methods:{
    onPageChange(newPage){
      console.log(newPage);
      blog.getIndexBlogs({page: newPage}).then(res=>{
        console.log(res);
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({path: '/',query:{page: newPage}})
      })
    }
  },
  created(){
    this.page = parseInt(this.$route.query.page)
    blog.getIndexBlogs().then(res=>{
      console.log(res);
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
  }
}

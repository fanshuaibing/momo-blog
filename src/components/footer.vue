<template>
  <footer>
    <div>
      <a target="_blank" title="GitHub" href="https://github.com/fatfanfan"><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-github"></use>
      </svg></a>
      <a target="_blank" title="博客" href="https://www.jianshu.com/u/21ccc68041d0"><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jianshu"></use>
      </svg></a>
    </div>

  </footer>
</template>

<style lang="less" >
footer {
  align-self: end;
  background-color:#333;
  font-size: 13px;
  padding: 10px;
  text-align: center;
  a{
    color: #999;
  }
.icon {
  width: 45px; height: 45px;
  vertical-align: -0.15em;
  fill: #999;
  padding: 1px 30px;
  overflow: hidden;
  &:hover{
    fill: white ;
  }
}
}

</style>

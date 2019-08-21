<template>
  <div class="search-container">
    <icon-base 
      icon-name="search"
      icon-color="#a4a5a4"
      width="25"
      height="25"
    >
      <search />
    </icon-base>
    <input type="text" placeholder="Search..."/>
  </div>
</template>

<script>
  import IconBase from '../Icons/IconBase';
  import Search from '../Icons/Search';

  export default {
    name: 'DataTable',
    components: {
      IconBase,
      Search,
    }
  }
</script>

<style lang="scss" scoped>
  @import 'style.scss'	
</style>

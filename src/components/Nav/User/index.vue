<template>
  <div class="user-info">
    <img src="http://www.gravatar.com/avatar" />
    <div class="info">
      <div>Dung Nguyen</div>
      <div>Inspector</div>
    </div>
    <div class="more">
      <icon-base 
        icon-name="more"
        icon-color="#fff"
      >
        <more />
      </icon-base>
    </div>
  </div>
</template>

<script>
  import IconBase from '../../Icons/IconBase';
  import More from '../../Icons/More';

  export default {
    name: 'User',
    components: {
      IconBase,
      More
    }
  }
</script>

<style lang="scss" scoped>
  @import 'style.scss'	
</style>

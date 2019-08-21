<template>
  <router-link :to="to" v-slot="{ isActive, navigate, href }">
    <a :href="href" @click="navigate" :class="[isActive && 'active']">
      <div class="nav-item" @click="navigate">
        <icon-base 
          :icon-name="iconName"
          :icon-color="isActive ? '#4dd5a9' : '#fff'"
        >
          <slot />
        </icon-base>
        <span>{{ label }}</span>
      </div>
    </a>
  </router-link>
</template>

<script>
  import IconBase from '../../Icons/IconBase';

  export default {
    name: 'NavItem',
    props: {
      to: {
        type: String,
      },
      label: {
        type: String,
      },
      iconName: {
        type: String,
      },
    },
    components: {
      IconBase
    }
  }
</script>

<style lang="scss" scoped>
  @import 'style.scss'	
</style>

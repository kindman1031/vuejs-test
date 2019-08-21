<template>
	<div class="inspections">
		<div class="header">
      <div class="title">Scheduled inspections</div>
      <div class="control">
        <button>
          <icon-base 
            icon-name="add"
            icon-color="#fff"
          >
            <add />
          </icon-base>
          <span>Add new</span>
        </button>
        <div class="divider" />
        <div class="notification">
          <icon-base 
            icon-name="bell"
            icon-color="#7e7e80"
          >
            <alarm />
          </icon-base>
          <icon-base 
            icon-name="down"
            icon-color="#3fbd95"
            height="20"
            width="20"
          >
            <down />
          </icon-base>
        </div>
      </div>
    </div>
    <data-table :table-data="inspections" :paginate="paginate"/>
	</div>
</template>

<script>
  import IconBase from '../../components/Icons/IconBase';
  import Alarm from '../../components/Icons/Alarm';
  import Down from '../../components/Icons/Down';
  import Add from '../../components/Icons/Add';
  import DataTable from '../../components/DataTable/index';
  import { mapActions, mapState } from 'vuex';
  import store from '../../store';

  export default {
    name: 'Inspections',
    components: {
      IconBase,
      Alarm,
      Down,
      Add,
      DataTable
    },
    methods: {
			...mapActions([
				'getInspections'
      ]),
      paginate: page => {
        store.dispatch('getInspections', page);
      }
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('getInspections', 1)
        .then(() => {
          next()
        })
		},
		computed: mapState([
			'inspections',
		])
  }
</script>

<style lang="scss" scoped>
  @import 'style.scss'	
</style>
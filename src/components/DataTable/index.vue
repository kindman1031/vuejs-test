<template>
  <div class="data-table">
    <div class="container">
      <div class="filter-container">
        <search-input />
        <date-picker v-model="time" range :shortcuts="shortcuts" :lang="lang" />
        <v-select v-model="selectedInspection" :options="['Vue.js','All inspections']" />
        <v-select v-model="selectedTemplate" :options="['Vue.js','All Templates']" />
      </div>
      <div class="table">
        <div class="header row">
          <div v-for="header in headers" :key="header" class="column">
            {{ header }}
          </div>
          <div class="column" />
        </div>
        <div class="body" v-if="!tableData.isFetching">
          <div v-for="item in tableData.data.data" :key="item.id" class="row">
            <div class="column">
              {{ item.startAt }}
            </div>
            <div class="column">
              {{ `${item.calendarEventsUsers[0].user.firstName} ${item.calendarEventsUsers[0].user.lastName}` }}
            </div>
            <div class="column">
              {{ item.inspection.property.address.street }}
            </div>
            <div class="column control">
              <icon-base 
                icon-name="edit"
                icon-color="#555"
                width="20"
                height="20"
              >
                <edit />
              </icon-base>
              <icon-base 
                icon-name="edit"
                icon-color="#555"
                width="20"
                height="20"
              >
                <more />
              </icon-base>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-container" v-if="!tableData.isFetching">
      <paginate
        :page-count="tableData.data.pagination.pages"
        :initial-page="Number(tableData.data.pagination.page)"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback(this)"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'page-item'">
      </paginate>
      <div class="pagination-info">
        5 of {{ tableData.data.pagination.total }} inspections
      </div>
    </div>
	</div>
</template>

<script>
  import IconBase from '../Icons/IconBase';
  import Edit from '../Icons/Edit';
  import More from '../Icons/More';
  import SearchInput from '../SearchInput';
  import DatePicker from 'vue2-datepicker';
  import './datepicker.scss';
  import vSelect from 'vue-select';
  import 'vue-select/dist/vue-select.css';
  import './select.scss';  
  import Paginate from 'vuejs-paginate';
  import './pagination.scss';  

  export default {
    name: 'DataTable',
    components: {
      IconBase,
      Edit,
      More,
      SearchInput,
      DatePicker,
      vSelect,
      Paginate
    },
    data() {
      return {
        time: '',
        lang: {
          placeholder: {
            dateRange: 'Date Range...'
          }
        },
        shortcuts: [
          {
            text: 'Today',
            onClick: () => {
              this.time = [ new Date(), new Date() ]
            }
          }
        ],
        selectedInspection: 'All inspections',
        selectedTemplate: 'All templates',
        headers: ['DATE/TIME', 'INSPECTION(S)', 'ADDRESS'],
      }
    },
    methods: {
      clickCallback: (comp) => (pageNum) => {
        console.log('pageNum', pageNum)
        comp.paginate(pageNum);
      }
    },
    props: {
      tableData: {
        type: Object
      },
      paginate: {
        type: Function
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import 'style.scss';
</style>

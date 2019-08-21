<template>
  <div class="app-nav">
    <div class="logo">
      <img :src="logo" />
    </div>
    <div class="items-container">
      <nav-item to="/inspections" icon-name="inspections" label="Inspections">
        <inspections />
      </nav-item>
      <nav-item to="/calendar" icon-name="calendar" label="Calendar">
        <calendar />
      </nav-item>
      <nav-item to="/contacts" icon-name="contacts" label="Contacts">
        <contacts />
      </nav-item>
      <nav-item to="/templates" icon-name="templates" label="Templates">
        <templates />
      </nav-item>
      <nav-item to="/metrics" icon-name="metrics" label="Metrics">
        <metrics />
      </nav-item>
      <nav-item to="/admin" icon-name="admin" label="Admin">
        <admin />
      </nav-item>
      <user class="user"/>
    </div>
	</div>
</template>

<script>
  import logo from "../../assets/logo.jpg";
  import IconBase from '../Icons/IconBase';
  import Inspections from '../Icons/Inspections';
  import Calendar from '../Icons/Calendar';
  import Contacts from '../Icons/Contacts';
  import Templates from '../Icons/Templates';
  import Admin from '../Icons/Admin';
  import Metrics from '../Icons/Metrics';
  import NavItem from "./NavItem/index";
  import User from "./User/index";

  export default {
    name: 'AppNav',
    data: () => ({
      logo,
    }),
    components: {
      IconBase,
      Inspections,
      Calendar,
      Contacts,
      Templates,
      Admin,
      Metrics,
      NavItem,
      User
    }
  }
</script>

<style lang="scss" scoped>
  @import 'style.scss'	
</style>

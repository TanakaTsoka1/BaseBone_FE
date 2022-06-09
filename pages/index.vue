<template>
  <div class="page">
    <div class="header">
      <h1>User list</h1>
      <NuxtLink to="/create">
        <b-button type="is-rounded" icon-left="account-plus">Add</b-button>
      </NuxtLink>
    </div>
    <b-table
      :striped="true"
      :hoverable="true"
      :data="users"
      :columns="columns"
      @click="onRowClick"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      columns: [
        { field: 'email', label: 'Email' },
        { field: 'msisdn', label: 'Phone Number' },
        { field: 'user_type', label: 'User Type' },
        { field: 'free_premium_items', label: 'Free Premium Items' },
      ],
    }
  },
  async fetch() {
    this.users = await fetch(
      'https://f7b0efc1-99d2-4a67-a280-f2632dc7ed81.mock.pstmn.io/users'
    )
      .then((res) => res.json())
      .then((data) => data.attributes)
  },
  methods: {
    onRowClick(user) {
      console.log(user)
      this.$router.push({
        path: '/' + user._id,
      })
    },
  },
}
</script>

<style scoped>
.header {
  height: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.header button {
  margin-right: 8px;
}
.right {
  float: right;
}
.left {
  float: left;
}
h1 {
  font-size: 20px;
}
.page {
  margin: 18px;
}
</style>

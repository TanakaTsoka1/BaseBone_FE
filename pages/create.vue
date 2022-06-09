<template>
  <div class="page">
    <div class="header">
      <NuxtLink to="/">
        <b-button type="is-rounded" icon-right="arrow-left" />
      </NuxtLink>
      <h1>Create user</h1>
    </div>
    <div class="form">
      <b-field grouped>
        <b-field label="Email" expanded>
          <b-input v-model="user.email"></b-input>
        </b-field>
        <b-field label="Phone Number" expanded>
          <b-input v-model="user.msisdn"></b-input>
        </b-field>
      </b-field>
      <b-field grouped>
        <b-field label="User Type" expanded>
          <b-input v-model="user.user_type"></b-input>
        </b-field>
        <b-field label="Free Premium Items">
          <b-numberinput
            controls-alignment="right"
            controls-position="compact"
            min="0"
            type="is-light"
            v-model="user.free_premium_items"
          ></b-numberinput>
        </b-field>
      </b-field>
      <b-button type="is-primary" class="right" @click="create" icon-left="plus"
        >Create</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { free_premium_items: 0 },
    }
  },
  methods: {
    async create() {
      await fetch(
        'https://f7b0efc1-99d2-4a67-a280-f2632dc7ed81.mock.pstmn.io/users',
        {
          method: 'POST',
          body: this.user,
        }
      )
        .then((res) => res.json())
        .then(({ status }) => {
          status == 'success' &&
            this.$router.push({
              path: '/',
            })
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
  justify-content: flex-start;
  align-items: center;
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
.page{margin:18px;}
</style>

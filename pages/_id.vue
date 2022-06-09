<template>
  <div class="page">
    <div class="header">
      <NuxtLink to="/">
        <b-button type="is-rounded" icon-right="arrow-left" />
      </NuxtLink>
      <h1>Details for {{ user.email }}</h1>
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
            defaultValue="0"
            v-model="user.free_premium_items"
          ></b-numberinput>
        </b-field>
      </b-field>
      <b-button
        type="is-primary"
        class="right"
        @click="submit"
        icon-left="content-save"
        >Save</b-button
      >
      <b-button
        type="is-danger"
        class="right"
        @click="deleteUser"
        icon-left="account-remove"
        >Delete</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    }
  },
  async fetch() {
    this.user = await fetch(
      'https://f7b0efc1-99d2-4a67-a280-f2632dc7ed81.mock.pstmn.io/users'
    )
      .then((res) => res.json())
      .then(({ attributes }) =>
        attributes.find(({ _id }) => _id == this.$route.params.id)
      )
  },
  methods: {
    async submit() {
      await fetch(
        'https://f7b0efc1-99d2-4a67-a280-f2632dc7ed81.mock.pstmn.io/users',
        {
          method: 'PATCH',
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
    async deleteUser() {
      await fetch(
        'https://f7b0efc1-99d2-4a67-a280-f2632dc7ed81.mock.pstmn.io/users?_id=' +
          this.user._id,
        {
          method: 'DELETE',
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
  margin-bottom: 12px;
}
.header button {
  margin-right: 8px;
}
.right {
  float: right;
  margin-left: 8px;
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

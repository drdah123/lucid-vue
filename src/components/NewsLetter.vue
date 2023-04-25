<script lang="ts">
interface Form {
  firstName: string;
  secondName: string;
  email: string;
  country: string;
  postalCode: string;
}

export default {
  data() {
    return {
      isEmailFocused: false,
      isWannaJoinMailList: false,
      form: {} as Form,
    };
  },
  methods: {
    onSubmit() {
      alert(
        this.form.firstName +
          "####" +
          this.form.secondName +
          "####" +
          this.form.email +
          "####" +
          this.form.country +
          "####" +
          this.form.postalCode
      );
    },
    onFocused() {
      this.isEmailFocused = true;
    },
    wannaJoinMailList() {
      this.isWannaJoinMailList = !this.isWannaJoinMailList;
    },
  },
};
</script>

<template>
  <div class="newsletter" id="newsletter">
    <div class="newsletter-head">
      <h2>Stay up to speed on the latest at Lucid.</h2>
    </div>
    <div class="newsletter-form">
      <form @submit.prevent="onSubmit">
        <div class="newsletter-form-item">
          <div v-if="isEmailFocused" class="newsletter-label">
            <label>email</label>
          </div>
          <div class="newsletter-form-item-input">
            <input
              type="email"
              placeholder="Email@email.com"
              required
              name="email"
              @focus="onFocused()"
              v-model="form.email"
            />
          </div>
        </div>
        <div v-if="isWannaJoinMailList">
          <div class="newsletter-form-item-input">
            <div><label>First name</label></div>
            <input
              type="text"
              placeholder="Abdulrahman "
              name="firstName"
              required
              v-model="form.firstName"
            />
          </div>
          <div class="newsletter-form-item-input">
            <div>
              <label>last name</label>
            </div>
            <input
              type="text"
              placeholder="alotebe"
              name="lastName"
              required
              v-model="form.secondName"
            />
          </div>
          <div class="newsletter-form-item-input">
            <div>
              <label>country</label>
            </div>
            <input
              type="tel"
              placeholder="Saudi Arabia"
              name="country"
              required
              v-model="form.country"
            />
          </div>
          <div class="newsletter-form-item-input">
            <div>
              <label>postal code</label>
            </div>
            <input
              type="tel"
              placeholder="1234-1222"
              name="postalCode"
              required
              v-model="form.postalCode"
            />
          </div>
        </div>

        <div v-if="isEmailFocused">
          <div class="newsletter-checkbox">
            <input type="checkbox" @click="wannaJoinMailList()" />
            <p>
              Join our mailing list for early access to product announcements,
              special events in your area, promotions, and more.
            </p>
          </div>
          <div class="newsletter-button">
            <button type="submit">
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.newsletter {
  text-transform: uppercase;
  background-color: #dbd4c5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 3.375rem 1.5625rem 1.75rem;
  color: #000;
}

.newsletter-form {
  padding: 2rem auto auto;
  margin-right: -5rem;
  flex: 1;
}

.newsletter-form-item-input input {
  height: 3.5rem;
  padding: 0 20px;
  border: 0;
  width: 35vw;
}
.newsletter-checkbox {
  display: flex;
  align-items: center;
}
.newsletter-checkbox p {
  font-size: 5px;
  font-weight: 400;
  width: 35vw;
}
.newsletter-checkbox input {
  height: 1.5rem;
  width: 1.5rem;
  margin: 1rem 1rem 1rem 0;
  border-radius: 50%;
  appearance: none;
  border: 1px black solid;
}
.newsletter-checkbox input:checked {
  background-color: #fff;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTkuODk0IDEuMjVMOC43ODEuMTAzQS4zMzIuMzMyIDAgMCAwIDguNTQyIDBhLjMzMi4zMzIgMCAwIDAtLjIzOS4xMDNMMy42NjQgNC44ODIgMS42OSAyLjg0OWEuMzMxLjMzMSAwIDAgMC0uNDc4IDBMLjEgMy45OTdhLjM1Mi4zNTIgMCAwIDAgMCAuNDkybDMuMzI2IDMuNDI3YS4zMzIuMzMyIDAgMCAwIC40NzcgMGw1Ljk5Mi02LjE3NGEuMzU3LjM1NyAwIDAgMCAwLS40OTIiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA4KSI+CiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8ZyBmaWxsPSIjNDA0MjNGIiBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPHBhdGggZD0iTS03LThoMjR2MjRILTd6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
  background-size: 1.5rem 1.5rem;
  background-position: center;
}
.newsletter-head {
  padding-right: 10%;
  flex: 1;
  align-self: flex-start;
}
.newsletter-button button {
  font-size: 16px;
  padding: 1rem 4.5rem;
  letter-spacing: 0.125px;
  background: rgb(27, 27, 27);
  color: #fff;
}

.newsletter-button button:hover {
  color: #000;
  background: #fff;
  animation: fadeIn 1s;
}
@media (min-width: 1024px) {
  .newsletter {
    padding: 6.25rem 5.625rem 6.5625rem;
  }
}
</style>

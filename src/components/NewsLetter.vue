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
    <div>
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
  overflow: hidden;
  width: 100vw;
  color: #000;
}

.newsletter-head h2 {
  margin-top: 10rem;
  width: 100%;
}
.newsletter-form {
  padding: 2rem auto auto auto;
  margin-right: -5rem;
}

.newsletter-form-item-input input {
  height: 3.5rem;
  padding: 0 20px;
  border: 0;
  width: 35vw;
  margin-right: 200px;
}
.newsletter-checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
}
.newsletter-head {
  width: 20%;
  margin: 0 5% 10% 10%;
}
.newsletter-button button {
  font-size: 16px;
  /* text-transform: none; */
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
</style>

<script lang="ts">
export default {};
</script>
<template>
  <footer>
    <div class="lucid-footer">
      <div class="footer-first-col">
        <div>
          <h2>Lucid Air</h2>
          <ul>
            <li><a href="##">Discover Air</a></li>
            <li>
              <a href="##">Design Yours</a>
            </li>
            <li>
              <a href="##">Reserve Now</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Lucid Gravity</h2>
          <ul>
            <li>
              <a href="##">Discover Gravity</a>
            </li>
            <li>
              <a href="##">Join the Waitlist</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-second-col">
        <h2>Lucid Motors</h2>
        <ul>
          <li>
            <a href="##">Company</a>
          </li>
          <li>
            <a href="##">Leadership</a>
          </li>
          <li>
            <a href="##">Careers </a>
          </li>
          <li>
            <a href="##">Stories </a>
          </li>
          <li>
            <a href="##">Tech Talks</a>
          </li>
          <li>
            <a href="##">Future Models </a>
          </li>
          <li>
            <a href="##">Investors </a>
          </li>
        </ul>
      </div>
      <div class="footer-third-col">
        <h2>More</h2>
        <ul>
          <li>
            <a href="##">Purchase & Ownership </a>
          </li>
          <li>
            <a href="##">Payment Calculator </a>
          </li>
          <li>
            <a href="##">FAQ </a>
          </li>
          <li>
            <a href="##">Contact Us </a>
          </li>
          <li>
            <a href="##">Locations </a>
          </li>
          <li>
            <a href="##">Events</a>
          </li>
          <li>
            <a href="##">Media Room</a>
          </li>
          <li>
            <a href="##">Awards and Accolades</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-of-footer">
      <div>
        <div>
          <select
            id="footer-lang-selector"
            aria-label="Change Locale"
            defaultValue="en"
          >
            <option value="en">United States – English</option>
            <option value="en-ca">Canada – English</option>
            <option value="fr-ca">Canada – Français</option>
            <option value="de-de">Deutschland - Deutsch</option>
            <option value="nl-nl">Nederland - Nederlands</option>
            <option value="de-ch">Schweiz - Deutsch</option>
            <option value="fr-ch">Suisse - Français</option>
            <option value="nb-no">Norge - Norsk</option>
            <option value="ar-sa">المملكة العربية السعودية – العربية</option>
          </select>
        </div>
        <p>©2022 Lucid. All rights reserved</p>
      </div>
      <div class="footer-of-footer-icons">
        <a href="##">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
        <a href="##">
          <font-awesome-icon icon="fa-brands fa-facebook" />
        </a>
        <a href="##">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a href="##">
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </a>
      </div>
      <div>
        <a href="##">Legal</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100vw;
  height: 120vh;
  background: #fff;
}

footer select {
  background: inherit;
}
.lucid-footer {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 8.125rem;
}
footer h2 {
  font-weight: 400;
  font-size: 1.5625rem;
  letter-spacing: -0.025em;
  margin-bottom: 0.75rem;
  margin-top: 10vh;
  color: #1b1b1b;
}
.footer-first-col {
  flex-basis: 25%;
}
.footer-second-col {
  flex-basis: 25%;
}
.footer-third-col {
  flex-basis: 25%;
}
footer ul {
  margin-left: -11%;
}

footer a {
  color: #1b1b1b;
  font-size: 1.171875rem;
  line-height: 3rem;
}

footer a:hover {
  text-decoration: underline !important;
}

.footer-of-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20vw 10vh 10vw;
  color: #1b1b1b;
}
.footer-of-footer-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15vw;
  margin-right: 5vw;
}
.footer-of-footer-icons svg {
  font-size: 1.5rem;
}
.footer-of-footer select {
  border: 0;
  width: 20vw;
  font-size: 1rem;
  margin-top: 2.7rem;
}

@media (max-width: 670px) {
  .lucid-footer h2 {
    border-bottom: 1px solid rosybrown;
  }
  .lucid-footer {
    flex-direction: column;
    margin-left: 1%;
  }
  .lucid-footer li {
    flex-direction: column;
    margin-left: 5%;
  }
  .footer-of-footer {
    flex-direction: column;
  }
  #footer-lang-selector {
    width: 100%;
  }
  .footer-of-footer-icons a {
    padding: 0 1rem;
  }
  .footer-of-footer-icons {
    margin: 10% 50% 0 10%;
  }
}
</style>

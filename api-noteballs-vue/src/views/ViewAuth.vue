<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }">
          <a @click.prevent="register = false">Login</a>
        </li>
        <li :class="{ 'is-active': register }">
          <a @click.prevent="register = true">Cadastro</a>
        </li>
        <!-- <li :class="{ 'is-active' : register}">
            <a>Saiba +</a></li>
        <li :class="{ 'is-active' : register}">
            <a>Contato</a></li> -->
      </ul>
    </div>

    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">
          {{ formTitle }}
        </div>

        <form
        @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                type="email"
                placeholder="email-usuaio@email.com"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input
              v-model="credentials.password" 
              class="input" 
              type="password" 
              placeholder="********" 
              />
            </div>
          </div>
          <div class="field is-grouped is-grouped-right mt-6">
            <p class="control">
              <button class="button is-info">{{ formTitle }}</button>
            </p>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";

const register = ref(false);

const credentials = reactive ({
    email: '',
    password: '',
})

const formTitle = computed(() => {
  return register.value ? "Cadastrar" : "Login";
});

const onSubmit = () => {
    if (!credentials.email || !credentials.password){
        alert('Entre com um e-mail e/ou senha válidos!')
    } else {
        if(register.value){
            console.log("registro", credentials)
        } else {
            console.log(" login", credentials)
        }
    }
}

</script>

<style>
.auth-width {
  max-width: 400px;
  margin: 0 auto;
}
</style>
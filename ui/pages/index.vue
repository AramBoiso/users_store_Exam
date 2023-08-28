<template>
  <div class="col-md-4 offset-md-4">
    <div v-if="isVisible" class="alert alert-danger" role="alert">
       {{ errorMessage }}
    </div>
    <form class="card card-body">
      <h1 class="text-center h3 mb-3">Create User</h1>

      <input 
        type='text' 
        placeholder="First Name" 
        class="form-control mb-3"
        v-model="userData.firstName"
        required
        />

      <input 
        type='text' 
        placeholder="Last Name" 
        class="form-control mb-3"
        v-model="userData.lastName"
        required
      />

      <input 
        type='email' 
        placeholder="Email" 
        class="form-control mb-3"
        required
        v-model="userData.email"
        />

      <input 
        type='password' 
        placeholder="Password" 
        class="form-control mb-3"
        v-model="userData.password"
        required/>

      <input 
        type='password' 
        placeholder="Confirm Password" 
        class="form-control mb-3"
        v-model="userData.passwordConfirm"
        required/>

      <button
        @click.prevent="createUser()"
        class="btn btn-primary"
        :disabled="userData.password !== userData.passwordConfirm"
        >Save</button>
    </form>
  </div>
 
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const isVisible = ref(false);
  const errorMessage = ref('');

  useHead({
    title: 'Create'
  });

  const userData = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const createUser = async () => {

    console.log('Hola')

    delete userData.passwordConfirm;
    
    const { error } = await useFetch('http://localhost:3001/api/v1/users', {
      method: 'post',
      body: userData
    });

    if (error.value?.data) {
      errorMessage.value = error.value.data.message;
      isVisible.value = true;
      hiddenMessage();
    } else {
      return router.push('/users');
    }
  }

  const hiddenMessage = () => {
    setTimeout(() => { isVisible.value =  false }, 3000);
  }

</script>

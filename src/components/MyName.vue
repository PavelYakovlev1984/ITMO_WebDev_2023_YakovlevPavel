<template>
  <h1>Enter you Name</h1>
  <div
    class=""
    style="color: red"
  >
    {{ firstName }} - {{ lastName }}
  </div>
</template>
 
<script>
export default {
  name: "MyName",
  data: () => ({
    firstName: 'Yakovlev',
    lastName: 'Pavel'
  })
};
</script>

<style scoped>

</style>
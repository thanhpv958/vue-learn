<template>
  <b-table striped hover :items="items"></b-table>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { first_name: 'Dickerson', last_name: 'Macdonald' },
        { first_name: 'Larsen', last_name: 'Shaw' },
        { first_name: 'Geneva', last_name: 'Wilson' },
        { first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>

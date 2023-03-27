<template>
aqui debe estar el hijo
{{ msg }}
</template>


<script>
export default{
  props: ["msg"],
  data:function(){
    return{
        padre: ""
    }
  },
  watch(){
    padre.function();{
        this.$emit('padre',this.padre)
    }
  }
}
</script>
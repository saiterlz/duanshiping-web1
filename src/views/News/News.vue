<template>
    <div>
      <router-view />

    </div>
</template>

<script setup>
defineOptions({
  beforeRouteEnter(_to,_from,next){
    window.scroll(0,0);
    next();
  }
})
</script>

<style lang="less" scoped>

</style>
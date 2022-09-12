<template>
  <section class="content">
    <router-view />
  </section>
</template>

<style lang="scss">
.content-view>* {
  margin-bottom: max(var(--big-space), 10vh);
}
</style>
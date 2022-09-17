<template>
  <AdminLogin />

  <SectionNavigation />

  <SectionContent />

  <SectionFooter />
</template>

<script setup>
import AdminLogin from "./components/AdminLogin.vue"
import SectionNavigation from "./components/SectionNavigation.vue"
import SectionFooter from "./components/SectionFooter.vue"
import SectionContent from "./components/SectionContent.vue"
</script>

<style>
@import "@/scss/main.css";
</style>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  background:
    radial-gradient(circle at left top, rgba(255, 252, 252, .1) 0%, rgba(0, 0, 0, 0) 30%);
  background-color: $dominant;
  text-align: center;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  min-height: 90vh;
  color: $text-dark;
}

// Inputs
.input-text {
  padding: .8em;
  width: 100%;
  border-radius: 32px;
}

.hollow-input-text {
  @extend .input-text;
  background: transparent;
  color: $text-dark;
  border: 1px solid $complement;
}

.filled-input-text {
  @extend .input-text;
  background-color: $complement;
}

// Buttons
.filled-btn {
  padding: .5rem 1rem;
  background-color: $accent;
  color: $text-dark;
  letter-spacing: 1px;
  border-radius: 16px;
  transition: $default-transition;
}

.hollow-btn {
  padding: .5rem 1rem;
  border: 1px solid $complement;
  transition: $default-transition;

  &:hover {
    color: $accent;
    border: 1px solid $accent;
  }

  &:active {
    color: $complement;
    border: 1px solid $complement;
    transition: 0s;
  }
}

.icon-btn {
  background: transparent;
  color: $text-dark;
  font-size: 1rem;
  transition: $default-transition;

  &:hover {
    color: $accent;
  }
}

// Typography
.supertitle {
  font-size: 8rem;
  font-weight: bold;
}

.supertitle-res {
  $size: 8rem;
  @include hard-text-scale($size);
}

.title {
  font-size: 4rem;
  font-weight: bold;
}

.subtitle {
  font-size: 3rem;
  font-weight: normal;
}

.superdesc {
  font-size: 1.25rem;
  font-weight: normal;
}

.desc {
  font-size: 1rem;
  font-weight: normal;
}

.subdesc {
  font-size: .8rem;
  font-weight: normal;
}

.subdesc-res {
  $size: .8rem;
  @include hard-text-scale($size);
  font-weight: normal;
}

.align-left {
  text-align: left;
}


// Spacing
.small-mb {
  margin-bottom: .5rem;
}

.medium-low-mb {
  margin-bottom: 1rem;
}

.medium-mb {
  margin-bottom: 2rem;
}

.medium-high-mb {
  margin-bottom: 3rem;
}

.large-mb {
  margin-bottom: 5rem;
}


// Position
.floating-center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1;
}

// Layer
.overlay {
  display: none;
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}

// Effect
.glow {
  background-color: $dominant;
  color: $text-dark;
  border-radius: 5px;
  box-shadow: 0px 5px 10px $dominant-shade;
}
</style>
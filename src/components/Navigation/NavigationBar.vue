<template>
  <nav ref="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Categories</router-link>
  </nav>
</template>

<style>
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
  padding: var(--medium-padding);
  background-color: var(--dominant);
}

nav a {
  width: var(--navbar-link-width);
  height: var(--navbar-link-height);
  line-height: var(--navbar-link-height);
  letter-spacing: 1px;
  color: var(--complement);
}

nav a.router-link-exact-active {
  color: var(--accent);
}

nav a:hover {
  background-color: var(--complement);
  color: var(--dominant);
  transition: all 0.5s ease;
}
</style>
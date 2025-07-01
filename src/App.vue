<template>
  <h1>Hello App!</h1>
  <p>
    <!-- 顯示當前路由的全名 -->
    <strong>Current route path:</strong> {{ $route.fullPath }} 
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <br>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
<script setup>
import indoorIntelligence1 from '@/assets/images/IndoorIntelligence1.svg';
</script>

<template>
  <header class="header">
    <div class="header-items">
      <div class="logo">
        <img :src="indoorIntelligence1" alt="Logo" />
      </div>

      <nav class="nav">
        <ul class="list">
          <li class="list-item">about us</li>
          <li class="list-item">why us</li>
          <li class="list-item">services & products</li>
        </ul>
      </nav>

      <div class="contact">contact us</div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
}

.header-items {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

.logo img {
  width: 180px;
  height: auto;
  display: block;

  @media (max-width: 980px) {
    width: 130px;
  }

  @media (max-width: 780px) {
    width: 110px;
  }
}

.list {
  display: flex;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 980px) {
    font-size: 18px;
  }

  @media (max-width: 780px) {
    font-size: 14px;
  }
}

.contact {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 980px) {
    font-size: 18px;
  }

  @media (max-width: 780px) {
    font-size: 14px;
  }
}

@media (max-width: 980px) {
  .header-items {
    padding: 0 20px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .list {
    gap: 20px;
  }
}

@media (max-width: 780px) {
  .header {
    height: auto;
    padding: 10px 0;
  }

  .header-items {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
}
</style>

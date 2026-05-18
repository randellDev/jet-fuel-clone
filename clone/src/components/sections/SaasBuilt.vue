<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import warehouse from '@/assets/images/industry-logistics-and-warehouses_bg-v01-650x175.jpg';
import manufacturing from '@/assets/images/industry-manufacturing-and-production-facilities_bg-v01-650x175.jpg';
import school from '@/assets/images/industry-school-and-universities_bg-v01-650x175.jpg';

import RequestDemo from '../modal/RequestDemo.vue';

const sectionRef = ref(null);
const isInView = ref(false);
const showModal = ref(false);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isInView.value = entry.isIntersecting;
    },
    {
      threshold: 0.2,
    },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
    observer.disconnect();
  }
});
</script>

<template>
  <section
    ref="sectionRef"
    class="jf-section jf-section--jetfuel-safety"
    :class="{ show: isInView }"
  >
    <div class="jf-section-saas">
      <div class="container">
        <!-- LEFT SIDE -->
        <div class="container-col-left">
          <div class="title-wrap">
            <span>built for where people work & learn</span>
          </div>

          <p>
            Designed to keep professionals safe and comfortable in high-heat
            environments. By integrating cutting-edge cooling technology and
            smart monitoring, we help industrial workers stay protected,
            productive, and focused—no matter the conditions.
          </p>

          <button class="button" @click="showModal = true">
            talk to specialist
          </button>
        </div>

        <!-- RIGHT SIDE -->
        <div class="container-col-right">
          <div class="image-col">
            <div class="image-gap">
              <div class="image-wrapper">
                <span>Schools & Universities</span>
              </div>
              <img :src="school" alt="Schools & Universities" />
            </div>

            <div class="image-gap">
              <div class="image-wrapper">
                <span>Logistics & Warehouse</span>
              </div>
              <img :src="warehouse" alt="Logistics & Warehouse" />
            </div>

            <div class="image-gap">
              <div class="image-wrapper">
                <span>Manufacturing & Production Facilities</span>
              </div>
              <img :src="manufacturing" alt="Manufacturing Facilities" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <RequestDemo v-if="showModal" @close="showModal = false" />
</template>

<style lang="scss">
.jf-section-saas {
  background-image: url('@/assets/images/section-industry_bg-v02-7680x2400.jpg');
  background-position: center;
  background-size: auto 100%;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 180px;
  padding: 120px 140px;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 80px;
  }
}

.container-col-left {
  display: flex;
  flex-direction: column;
  gap: 40px;

  span {
    font-weight: 600;
    font-size: 70px;
    text-transform: uppercase;
    line-height: 110%;
    color: white;
  }

  p {
    font-size: 22px;
    line-height: 130%;
    color: white;
  }
}

.button {
  width: 334px;
  height: 60px;
  border-radius: 16px;
  border: 2px solid red;
  background: red;
  cursor: pointer;

  font-weight: 700;
  font-size: 24px;
  color: white;
  text-transform: uppercase;
}

.container-col-right {
  display: flex;
}

.image-col {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.image-wrapper {
  height: 45px;
  width: 651px;
  background: white;
  padding: 13px 32px;
  display: flex;
  align-items: center;

  span {
    font-weight: 800;
    font-size: 16px;
  }
}

@keyframes slideFromLeft {
  from {
    transform: translateX(-90px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideFromRight {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.container-col-left span,
.container-col-left p,
.button,
.image-gap {
  opacity: 0;
}

.show .container-col-left span {
  animation: slideFromLeft 0.9s ease forwards;
}

.show .container-col-left p {
  animation: slideFromLeft 0.9s ease forwards;
  animation-delay: 0.3s;
}

.show .button {
  animation: slideFromLeft 0.9s ease forwards;
  animation-delay: 0.5s;
}

.show .image-gap {
  animation: slideFromRight 1s ease forwards;
}

.image-gap:nth-child(1) {
  animation-delay: 0.2s;
}
.image-gap:nth-child(2) {
  animation-delay: 0.4s;
}
.image-gap:nth-child(3) {
  animation-delay: 0.6s;
}
</style>

<script setup>
const emit = defineEmits(['close']);
</script>

<template>
  <div class="modal-backdrop" @click="emit('close')">
    <div class="modal-overlay" @click.stop>
      <div class="close" @click="emit('close')">X</div>

      <div class="title-content">
        <h1 class="title">request a demo</h1>

        <p>
          Experience JetFuel Safely in action. Fill out the form below, and our
          <br />
          team will get in touch shortly.
        </p>
      </div>

      <form class="form">
        <div class="field">
          <label>Name</label>
          <input type="text" />
        </div>

        <div class="field">
          <label>Email</label>
          <input type="email" />
        </div>

        <div class="field">
          <label>Company</label>
          <input type="text" />
        </div>

        <button class="submit">
          <h3>SUBMIT DEMO REQUEST</h3>
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-overlay {
  width: 620px;
  height: 703px;
  padding: 8px 16px;
  background-color: #231f20;
  position: relative;
}

.close {
  color: white;
  margin-left: 570px;
  padding-top: 18px;
  cursor: pointer;
}

.title-content {
  text-align: left;
}

.title-content > h1.title {
  font-weight: 600;
  font-size: 44px;
  color: #ffffff;
  text-align: start;
  margin-right: 170px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.title-content p {
  font-size: 16px;
  color: white;
  margin-bottom: 2px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 4px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  color: white;
  font-weight: 700;
}

.field input {
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  border: 1.5px solid #7b7b7b;
  background: #535353;
  color: white;
}

.submit {
  margin-top: 32px;
  width: 588px;
  height: 60px;
  background-color: #ed1c24;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  color: white;
  text-transform: uppercase;
  font-size: 18px;

  cursor: pointer;
  border: none;
}
</style>

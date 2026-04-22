<template>
  <div class="search-container">
    <h1 class="main-title">
      AWMC <span class="title-bold">知识库</span>
    </h1>
    
    <div class="search-box-wrapper">
      <input type="text" 
             placeholder="键入以搜索文档..." 
             class="custom-search-input"
             @click="triggerSearch" readonly>
      <div class="search-icon">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
    </div>
  </div>
</template>

<script setup>
// 触发 VitePress 原生搜索框的逻辑
const triggerSearch = () => {
  const searchBtn = document.querySelector('.DocSearch-Button') || document.querySelector('.local-search-button');
  if (searchBtn) searchBtn.click();
}
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
}
.main-title {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 3rem;
  letter-spacing: 0.2em;
  color: var(--vp-c-text-2);
}
.title-bold {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.search-box-wrapper {
  position: relative;
  width: 100%;
  max-width: 600px;
  group: hover;
}
.custom-search-input {
  width: 100%;
  padding: 1.25rem 2rem;
  font-size: 1.125rem;
  text-align: center;
  border-radius: 1.5rem;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  cursor: text;
}
.custom-search-input:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.custom-search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}
.search-icon {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  color: var(--vp-c-text-3);
  pointer-events: none;
}
</style>
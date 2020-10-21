<template>
  <div class="searchBar">
    <div class="search-bar">
      <van-icon name="search" class="search" size="16px" color="#858C96" />
      <input
      v-model="searchWord"
      class="search-bar-input"
      :focus="focus"
      :disabled="disabled"
      :maxlength="maxlength"
      :placeholder="hotSearch.length === 0?'搜索':hotSearch"
      type="text"
      @input="onChange"
      confirm-type="search"
      @confirm="onConfirm"
      >
      <van-icon name="clear" class="clear" size="16px" color="#858C96" @click="onClearClick" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 10
    },
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearchBarClick() {
      this.$emit('onClick')
    },
    onClearClick() {
      this.searchWord = ''
      this.$emit('onClear')
    },
    onChange(e) {
      const { value } = e.mp.detail
      this.$emit('onChange', value)
    },
    // 点击虚拟键盘搜索事件
    onConfirm(e) {
      const { value } = e.mp.detail
      this.$emit('onConfirm', value)
    },
    setValue(v) {
      this.searchWord = v
    },
    getValue() {
      return this.searchWord
    }
  }
}
</script>

<style lang="scss" scoped>
.searchBar {
  padding: 15px 15.5px;
  .search-bar {
    display: flex;
    align-items: center;
    height: 40px;
    box-sizing: border-box;
    background: #f5f7f9;
    border-radius: 20px;
    padding: 12px 17px;
    .search-bar-input {
      flex: 1;
      margin: 0 8px;
    }
    .search,
    .clear {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
}
</style>

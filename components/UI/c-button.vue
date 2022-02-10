<template>
  <button :class="__class" class="btn-default" :disabled="disabled">
    <component :is="icon" v-if="icon" class="c-icon" :size="15"></component>
    <slot></slot>
  </button>
</template>

<script setup>

let props = defineProps({
  size: {
    type: String,
    default: 'medium'
  },
  type: {
    type: String,
    default: 'pry'
  },
  round: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Object
  },
  iconOnly: {
    type: Boolean,
    defult: false
  },
  full: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

let base = 'btn-default'
let sizes = {
  small: 'btn-sm',
  medium: 'btn-md',
  big: 'btn-lg'
}
let types = {
  pry: {
    __class: 'btn-pry',
    text: '#fff'
  },
  sec: {
    __class: 'btn-sec',
    text: '#fff'
  },
}

let __class = computed(() => {
  let __base = ((types[props.type] && types[props.type].__class) || types['pry'].__class) + ' ' + (sizes[props.size] || sizes['medium']);
  if (props.full)
    __base += ' w-full'
  if (props.disabled)
    __base += ' fade-40'

  return __base
})

</script>

<style scoped>
button {
  cursor: pointer;
}
.btn-default {
  display: flex;
  align-items: center;
  border-radius: 3px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
  color: #333;
  font-family: var(--font-inter);
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
.btn-default:hover {
  background-color: #f5f5f5;
  border-color: #e6e6e6;
}
.btn-default:active {
  background-color: #e6e6e6;
  border-color: #e6e6e6;
}
.btn-default:focus {
  outline: none;
}
.btn-sm {
  padding: 0.5rem 0.5rem;
}
.btn-md {
  padding: 10px 16px;
}
.btn-lg {
  padding: 1rem 1rem;
}
.c-icon {
  margin-right: 0.5rem;
}
.btn-sec {
  background-color: var(--color-sec);
  color: #fff;
}
.btn-sec:hover {
  background-color: #561dcf;
}
.btn-sec:active {
  background-color: #7850cf;
}
</style>
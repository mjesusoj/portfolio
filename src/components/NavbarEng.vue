<template>
  <div class="static">
    <div class="flex justify-center lg:float-right">
        <button 
            class='switch active'
            ref="isActive"
            id='switch'
          >
            <router-link to="/" @click="englishBtn">
              <img src="../assets/spain.svg.png" width="50" height="50" alt="Bandera España">
            </router-link>
            <router-link to="/eng">
              <span>ENG</span>
            </router-link>
        </button>
    </div>
    <Disclosure as="nav" class="flex sm:justify-center" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <!-- Mobile menu button-->
                  <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                      <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
                  </DisclosureButton>
              </div>

              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div class="hidden sm:block sm:ml-6">
                      <div class="flex space-x-4">
                        <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <DisclosurePanel class="sm:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
              <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
          </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

    import '../assets/css/language.css'

    const navigation = [
        { name: 'Home', href: '#eng', current: true },
        { name: 'About Me', href: '#about-me', current: false },
        { name: 'Soft Skills', href: '#soft-skills', current: false },
        { name: 'Proyects', href: '#projects', current: false },
        { name: 'Interest', href: '#interest', current: false },
    ]
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>
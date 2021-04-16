<template>
  <div class="container">
    <div>{{ mountains }}</div>
    <b-table :data="mountains">
      <b-table-column field="name" label="Name" v-slot="props">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column field="location" label="Sted" v-slot="props">
        <a :href="getMapsUrl(props.row.location)" target="_blank"> {{ props.row.location }} </a>
      </b-table-column>
      <b-table-column field="peak" label="Toppunkt" v-slot="props">
        {{ props.row.peak }} moh
      </b-table-column>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState(['mountains'])
  },
  methods: {
    getMapsUrl (location: string) {
      return `https://www.google.com/maps/search/${location}`
    }
  }
})
export default class Mountains extends Vue {}
</script>

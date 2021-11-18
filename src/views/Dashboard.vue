<template>
  <div class="projects">
    <h4 class="grey--text">Dashboard</h4>
    <v-container class="my-5">
      <v-layout row class="mb-4 mr-4">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              class="mr-2"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort by person name</span>
        </v-tooltip>
      </v-layout>

      <v-card
        text
        v-for="project in projects"
        :key="project.title"
        :class="`project ${project.status} `"
      >
        <v-layout row wrap :class="`pa-4 mb-1 `">
          <v-flex xs12 md6>
            <div class="caption grey--text pa-3">Project Title</div>
            <div class="pa-3">{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text pa-3">Person</div>
            <div class="pa-3">{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text pa-3">Due date</div>
            <div class="pa-3">{{ project.due }}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div class="float-right pr-3">
              <v-chip
                small
                :color="
                  project.status === 'complete'
                    ? '#3cd1c2'
                    : project.status === 'ongoing'
                    ? 'rgb(248, 96, 69)'
                    : 'orange'
                "
                class="my-4 white--text"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Marvel",
          person: "Stanlee",
          due: "1st jan 2019",
          status: "ongoing",
        },
        {
          title: "Spiderman",
          person: "Peter parker",
          due: "1st May 2019",
          status: "complete",
        },
        {
          title: "Iron man",
          person: "Tony stark",
          due: "11th Dec 2021",
          status: "ongoing",
        },
        {
          title: "Black panther",
          person: "Wakanda forever",
          due: "2nd mar 2018",
          status: "complete",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 10px solid #3cd1c2;
}

.project.ongoing {
  border-left: 10px solid rgb(248, 96, 69);
}
</style>

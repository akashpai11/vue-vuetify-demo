<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container fluid class="mt-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header class="red--text font-weight-bold">{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="font-weight-bold grey--text">
              Due by : {{ project.due }}
            </div>
            <div class="pt-2">{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Imped cumque, aliquid sit vero quos aliquam? Id delectus laborum possimus odit culpa fuga perspiciatis, impedit sed omnis consequuntur, alias consequatur incidunt.",
        },
        {
          title: "Spiderman",
          person: "Peter parker",
          due: "1st May 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Imped cumque, aliquid sit vero quos aliquam? Id delectus laborum possimus odit culpa fuga perspiciatis, impedit sed omnis consequuntur, alias consequatur incidunt.",
        },
        {
          title: "Iron man",
          person: "Tony stark",
          due: "11th Dec 2021",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Imped cumque, aliquid sit vero quos aliquam? Id delectus laborum possimus odit culpa fuga perspiciatis, impedit sed omnis consequuntur, alias consequatur incidunt.",
        },
        {
          title: "Iron man 2",
          person: "Tony stark",
          due: "10th May 2020",
          status: "completed",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Imped cumque, aliquid sit vero quos aliquam? Id delectus laborum possimus odit culpa fuga perspiciatis, impedit sed omnis consequuntur, alias consequatur incidunt.",
        },
        {
          title: "Black panther",
          person: "Wakanda forever",
          due: "2nd mar 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Imped cumque, aliquid sit vero quos aliquam? Id delectus laborum possimus odit culpa fuga perspiciatis, impedit sed omnis consequuntur, alias consequatur incidunt.",
        },
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((item) => item.person === "Tony stark");
    },
  },
};
</script>

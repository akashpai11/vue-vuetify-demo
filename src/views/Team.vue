<template>
  <div class="team">
    <h4 class="grey--text">Team page</h4>

    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat align="center" class="ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img
                  src="https://avatars.dicebear.com/api/bottts/:seed.svg"
                  alt="John"
                />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        { name: "Akash Pai", role: "Web developer" },
        { name: "Akshay shenoy", role: "Mobile developer" },
        { name: "Chirag Shet", role: "System engineer" },
      ],
    };
  },
};
</script>

<style scoped></style>

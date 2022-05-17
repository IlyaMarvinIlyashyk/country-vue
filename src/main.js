import { createApp } from "vue";
import App from "./App.vue";
// import SearchResults from "./components/SearchResults.vue";
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";

const app = createApp(App);

app.component("nav-bar", NavBar);
app.component("search-bar", SearchBar);
// app.component("search-results", SearchResults);

app.mount("#app");

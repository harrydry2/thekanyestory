import axios from "axios";
import { $, $$ } from "./bling";

export default function ajaxVote(e) {
  e.preventDefault();
  axios.post(this.action).then(res => {
    this.querySelector(".iUpVoteIcon").classList.toggle("votedTrue");
    this.nextSibling.textContent = res.data.upVotes.length;
  });
}

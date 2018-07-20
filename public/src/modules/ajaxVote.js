import axios from "axios";
import { $, $$ } from "./bling";

export default function ajaxVote(e) {
  e.stopPropagation();
  axios.post(this.dataset.upvote).then(res => {
    this.querySelector(".iUpVoteIcon").classList.toggle("votedTrue");
    this.nextSibling.textContent = res.data.upVotes.length;
  });
}

import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";
import axios from "axios";

import ajaxVote from "./modules/ajaxVote";
import ajaxCommentVote from "./modules/ajaxCommentVote";
import "./modules/modal";

const upVoteForms = $$(".votingButton");
upVoteForms.on("click", ajaxVote);

const upVoteCommentForms = $$("form.commentButton");
upVoteCommentForms.on("submit", ajaxCommentVote);

if (document.querySelector(".p1")) {
  $$(".ideaList__inner").on("click", function(e) {
    const url = `http://localhost:8000${this.dataset.location}`;
    window.location.href = url;
    return false;
  });
}

import express from "express";

import { getProfile } from "../controller/getProfile.js";

const Router = express.Router();

Router.get("/", getProfile);

export default Router;

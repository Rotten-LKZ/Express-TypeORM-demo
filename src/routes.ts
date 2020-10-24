
import express from 'express';

interface callback {
  (request: express.Request, response: express.Response): void;
}

type Routes = {
  path: string;
  type: "GET" | "POST" | "DELETE" | "PUT";
  cb: callback;
}[];

export const routes: Routes = [
  { path: "/", type: "GET", cb: (requst, response) => {response.send("Welcome to home page.")} },
  { path: "/user", type: "GET", cb: (requst, response) => {response.send("Welcome to home page.")} },
];

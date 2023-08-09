#!/usr/bin/env node
//! to tell our computer the we want to use node to execute this file

import fs from "fs"

// fs.readdir(".", (err, fileNames)=>{
//   if(err){
//     console.log("err", err)
//     throw new Error(err)
//   }

//   console.log("fileNames", fileNames)
// })

fs.readdir(process.cwd(), (err, fileNames)=>{
  if(err){
    console.log("err", err)
    throw new Error(err)
  }

  console.log("fileNames", fileNames)
})
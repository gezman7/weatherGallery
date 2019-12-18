import React, { useState } from "react";
// import puppeteer from "puppeteer";

// function extractAddressFromString(elementString: string) {
//   let urlIndex = elementString.search("http");
//   let shorterElementString = elementString.slice(
//     urlIndex,
//     elementString.length
//   );
//   let urlEndIndex = shorterElementString.search('"');
//   let realAddress = shorterElementString.slice(0, urlEndIndex);

//   return realAddress;
// }

// async function getPaintLinkFromColors(
//   color1: string,
//   color2: string,
//   color3: string
// ) {
//   const browser = await puppeteer.launch({ headless: false });
//   console.log("launch");
//   const testSite = "https://google.com";
//   const urlSite = `https://artsexperiments.withgoogle.com/artpalette/colors/${color1}-${color2}-${color3}`;
//   const page = await browser.newPage();
//   console.log("new page");

//   await page.goto(urlSite, { waitUntil: "networkidle2" });
//   console.log(" go to");
//   const query = ".item-image";
//   await page.waitForSelector(query);

//   // fetching only one picture for starts. -- should become more.
//   const textContent = await page.evaluate((query: string) => {
//     let imgQuery = document.querySelector(query);
//     let result = imgQuery ? imgQuery.innerHTML : "error";
//     return result;
//   }, query);

//   const addressPic = extractAddressFromString(textContent);
//   console.log(addressPic);

//   await browser.close();
// }

// export default getPaintLinkFromColors;

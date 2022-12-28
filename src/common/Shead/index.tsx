import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { UseThemeEffect } from "../../Hooks";

const Shead: NextPage<{seoTitle : string}> = ({seoTitle}) => {
  UseThemeEffect()
  return (
        <Head>
        <title>S&C | {seoTitle}</title>
        <meta name="description" content="S&C"/>
        <meta name="author" content="hawnbinyoo"/>
        <meta name="keyword" content="frontend, react"/>
        </Head>
    )
}

export default Shead
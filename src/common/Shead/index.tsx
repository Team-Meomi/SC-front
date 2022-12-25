import React from "react";
import Head from "next/head";
import { NextPage } from "next";

const Shead: NextPage<{seoTitle : string}> = ({seoTitle}) => {
  return (
        <Head>
        <title>S&C | {seoTitle}</title>
        </Head>
    )
}

export default Shead
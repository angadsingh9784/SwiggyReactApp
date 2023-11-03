import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

import React from 'react'

const Shimmer = () => {
    return (
        <>
            <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />
            <ShimmerSimpleGallery card imageHeight={300} />
            <ShimmerSimpleGallery card imageHeight={300} caption />
        </>
    )
}

export default Shimmer


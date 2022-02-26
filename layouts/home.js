import Footer from '@components/Footer'
import Container from '@components/Container'
import RecentPostContainer from '@components/RecentPostContainer'
import { Banner } from '@components/custom-tw-components'
import PageBanner from '@components/PageBanner'
import Image from 'next/image'
import utilStyles from '@styles/utils.module.scss'
import React, { useState } from 'react'

const HomeLayout = ({ blog }) => {
    return (
        <Container>
            <Banner>
                <Image className={utilStyles.circleImage} width={135} height={135} src={"/images/animoji.gif"} alt="Blue Eu" />
                <PageBanner
                    title={"Failure leads to understanding."}
                    subtitle={"If you're a living organism, failure in life is inevitable. \nWe fail by default. So why not we learn from it?"}
                />
            </Banner>
            <RecentPostContainer title={"Recent Posts"} link={"blog"} posts={blog} />
            <Footer />
        </Container>
    )
}

export default HomeLayout
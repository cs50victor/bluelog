import { getAllPosts } from '@lib/doc'
import Container from '@components/Container'
import CPSection from '@components/CPSection'
import metadata from '@data/metadata'
import Footer from '@components/Footer'

export default function Code({ posts }) {
    const baekjoonPosts = posts.filter(post => { return post.dir == 'Baekjoon' })
    const leetcodePosts = posts.filter(post => { return post.dir == 'Leetcode' })
    const programmersPosts = posts.filter(post => { return post.dir == 'Programmers' })
    const customMeta = {
        title: `${metadata.title} - CP`
    }

    return (
        <Container customMeta={customMeta}>
            <CPSection posts={leetcodePosts ? leetcodePosts : []} value={"Leetcode"} />
            <CPSection posts={baekjoonPosts ? baekjoonPosts : []} value={"Baekjoon OJ"} />
            <CPSection posts={programmersPosts ? programmersPosts : []} value={"프로그래머스"} />
            <Footer />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = getAllPosts("cp")
    return {
        props: {
            posts
        }
    }
}
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/sass/utils.module.scss'
import Link from 'next/link'

export default function Post({ postData }) {
    return (
        <Layout>
            <li className={`${utilStyles.postHeader} ${postData.lang} text-primary bg-card_bg dark:bg-dark_card_bg dark:text-dark_primary shadow-[0px_1px_5px_1px_#80afe7] dark:shadow-[0px_1px_5px_1px_black]`}>
                <title>{postData.title}</title>
                <h1 className={`text-primary dark:text-dark_primary text-xl font-semibold`}>{postData.title}</h1>
                <div className={`text-secondary dark:text-dark_secondary text-sm pt-1`}>{postData.subtitle}</div>
                <div className={`text-secondary dark:text-dark_secondary text-xs pt-3`}>
                    <Date dateString={postData.date} />
                </div>
                <div className={`${utilStyles.tags} flex justify-end`}>
                {postData.tags.map((tag,i) => (
                    <div key={i} className={"px-2 m-1 text-xs bg-tags_bg text-secondary dark:bg-dark_tags_bg dark:text-dark_secondary"}>
                        {tag}
                    </div>
                ))}
              </div>
            </li>
            <div className={utilStyles.availableLanguage}>
                {postData.availableLanguage.map((post, i) => (
                    <div key={i}>
                        <Link href={`/posts/${post.lang}/${post.slug}`}>
                            <a className={"text-primary bg-tags_bg"}>{post.langName}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <article className={`text-primary dark:text-dark_primary`}>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
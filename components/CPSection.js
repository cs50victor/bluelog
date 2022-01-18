import utilStyles from '@styles/utils.module.scss'
import NavLink from '@components/NavLink';
import tw from 'tailwind-styled-components'

const CPSection = props => {
    return (
        <section className={"mt-8 text-center"}>
            <CPHeader>
                <NavLink link={props.link} className={"text-primary dark:text-dprimary"} value={props.value} />
            </CPHeader>
            <ul className={`${utilStyles.list} flex flex-wrap justify-center`}>
                {props.posts.map(p => (
                    <>
                        {p.subPosts.map(({id, level}) => (
                            <li className={`${level} list-none text-xs p-1 m-1.5 w-20 text-center rounded shadow-[0_0_1.5px_0.5px_#cbcbcb] duration-300`} key={id[1]}>
                                <NavLink link={`/cp/${p.dir}/${id[0]}-${id[1]}`} value={`${id[1]}`} />
                            </li>
                        ))}
                    </>
                ))}
            </ul>
        </section>
    )
}

const CPHeader = tw.h1`
    text-lg 
    font-semibold 
    text-primary 
    dark:text-dprimary 
    mt-8 
    pb-2
`

export default CPSection;
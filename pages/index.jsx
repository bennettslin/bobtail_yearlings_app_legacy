import { Fragment as ___ } from 'react'
import Link from 'next/link'

export default () => (
    <___>
        <div>Bobtail Yearlings</div>
        <div>
            <Link
                {...{ href: '/News' }}
            >
                <a>News</a>
            </Link>
        </div>
        <div>
            <Link
                {...{ href: '/About' }}
            >
                <a>About</a>
            </Link>
        </div>
        <div>
            <Link
                {...{ href: '/Lyrics' }}
            >
                <a>Lyrics</a>
            </Link>
        </div>
    </___>
)

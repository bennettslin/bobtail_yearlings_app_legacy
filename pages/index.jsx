import { Fragment as ___ } from 'react'
import cx from 'classnames'

import Link from 'next/link'

import './style.scss'

export default () => (
    <___>
        <div
            {...{
                className: cx(
                    'Root'
                )
            }}
        >Bobtail Yearlings</div>
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

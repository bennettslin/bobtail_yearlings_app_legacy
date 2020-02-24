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
        >Bobtail Yearlings 02/24</div>
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
        <div>
            <Link
                {...{ href: '/Scores' }}
            >
                <a>Scores</a>
            </Link>
        </div>
        <div>
            <Link
                {...{ href: '/Method' }}
            >
                <a>Method</a>
            </Link>
        </div>
        <div>
            <Link
                {...{ href: '/Bio' }}
            >
                <a>Bio</a>
            </Link>
        </div>
        <div>
            <Link
                {...{ href: '/Pics' }}
            >
                <a>Pics</a>
            </Link>
        </div>
        <div>
            <Link
                {...{ href: '/Shop' }}
            >
                <a>Shop</a>
            </Link>
        </div>
        <div>
            <Link
                {...{ href: '/Shows' }}
            >
                <a>Shows</a>
            </Link>
        </div>
        <div>
            <Link
                {...{ href: '/Misc' }}
            >
                <a>Misc</a>
            </Link>
        </div>
    </___>
)

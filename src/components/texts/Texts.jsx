import clsx from 'clsx'
import React from 'react'

export function H1({children}) {
  const style = clsx(
    'font-bold',
    'text-2xl',
    'text-gray-800',
    'dark:text-gray-100',
  )

  return (
    <h1 className={style}>{children}</h1>
  )
}

export function H2({children}) {
  const style = clsx(
    'font-bold',
    'text-xl',
    'text-gray-700',
    'dark:text-gray-50',
  )

  return (
    <h2 className={style}>{children}</h2>
  )
}

export function H3({children}) {
  const style = clsx(
    'font-bold',
    'text-lg',
    'text-gray-600',
    'dark:text-gray-50',
  )

  return (
    <h3 className={style}>{children}</h3>
  )
}

export function P({children}) {
  const style = clsx(
    'text-gray-600',
    'dark:text-gray-200',
    'text-lg'
  )

  return (
    <p className={style}>{children}</p>
  )
}
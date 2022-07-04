import Link from 'next/link'

export default function ButtonAdmin({ children, to }) {
  return (
    <>
      <Link href={to}>
        <a className='btn'>{children}</a>
      </Link>
      <style jsx>{`
        .btn {
          background: #517201;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;                    
          padding: 3rem 2rem;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  )
}

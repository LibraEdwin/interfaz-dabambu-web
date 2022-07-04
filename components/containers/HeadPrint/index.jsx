import { HeadPrintWrapper, HeadTitle, HeadDates } from './headPrint.style'

export default function HeadPrint({ title, fromDate, toDate }) {
  return (
    <HeadPrintWrapper>
      <HeadTitle>
        <h4>DaBambú</h4>
        <h3>{title}</h3>
      </HeadTitle>
      <HeadDates>
        <span>
          Desde:
          <p>{fromDate}</p>
        </span>
        <span>
          Hasta:
          <p>{toDate}</p>
        </span>
      </HeadDates>
    </HeadPrintWrapper>
  )
}

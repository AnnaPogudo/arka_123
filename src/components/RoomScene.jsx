import { useId } from 'react'

function RoomScene({ layout = 'empty', label = 'Интерьер пространства — концептуальная визуализация' }) {
  const clipId = useId().replaceAll(':', '')
  const chairs = layout === 'seminar' ? [250, 335, 420, 505, 590, 675] : [292, 420, 548, 676]
  return (
    <svg className="room-scene" viewBox="0 0 1000 560" role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${clipId}-wall`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#343a35" />
          <stop offset="1" stopColor="#202723" />
        </linearGradient>
        <linearGradient id={`${clipId}-floor`} x1="0" x2="1">
          <stop offset="0" stopColor="#d0c5b1" />
          <stop offset=".5" stopColor="#ede6d9" />
          <stop offset="1" stopColor="#b7ab96" />
        </linearGradient>
        <clipPath id={`${clipId}-windows`}>
          <path d="M180 351V185a64 64 0 0 1 128 0v166Zm202 0V185a64 64 0 0 1 128 0v166Zm202 0V185a64 64 0 0 1 128 0v166Z" />
        </clipPath>
        <linearGradient id={`${clipId}-sky`} x1="0" x2="0" y2="1">
          <stop stopColor="#83a1a4" />
          <stop offset=".7" stopColor="#dfbd89" />
          <stop offset="1" stopColor="#667b70" />
        </linearGradient>
      </defs>
      <rect width="1000" height="560" fill="#ede8dd" />
      <path d="M0 20 105 72v280L0 453Z" fill="#38413b" />
      <path d="M1000 20 895 72v280l105 101Z" fill="#303a34" />
      <path d="M0 20h1000L895 72H105Z" fill="#d4cbbc" />
      <path d="M105 72h790v280H105Z" fill={`url(#${clipId}-wall)`} />
      <path d="M0 453 105 352h790l105 101-170 107H170Z" fill={`url(#${clipId}-floor)`} />
      <g clipPath={`url(#${clipId}-windows)`}>
        <rect x="160" y="118" width="680" height="235" fill={`url(#${clipId}-sky)`} />
        <path d="M500 145 555 200 500 255 445 200Z" fill="#d2e2df" stroke="#f6e5bd" strokeWidth="4" />
        <path d="M462 241h76v112h-76Z" fill="#536c63" />
        <path d="M474 252h52v101h-52Z" fill="#7f9587" />
        <path d="M160 300c150-52 220 18 340-4 135-25 206-43 340 7v50H160Z" fill="#60796c" />
      </g>
      <g clipPath={`url(#${clipId}-windows)`} fill="#f2dfbb" opacity=".15">
        <path d="m160 124 210 0-90 235h-120Z" />
        <path d="m450 117 94 0-92 241h-82Z" />
      </g>
      <g fill="none" stroke="#f4eddd" strokeWidth="8" opacity=".92">
        <path d="M180 351V185a64 64 0 0 1 128 0v166m74 0V185a64 64 0 0 1 128 0v166m74 0V185a64 64 0 0 1 128 0v166" />
        <path d="M244 118v233m202-233v233m202-233v233" strokeWidth="3" opacity=".65" />
      </g>
      <g fill="#465049" opacity=".85">
        {Array.from({ length: 10 }, (_, index) => <path key={index} d={`M${108 + index * 79} 76v274`} stroke="#525b53" strokeWidth="1" />)}
      </g>
      <path d="M105 352h790" stroke="#c9bda8" strokeWidth="5" />
      <g fill="#f5e6c6" opacity=".75">
        <ellipse cx="260" cy="79" rx="58" ry="5" />
        <ellipse cx="500" cy="79" rx="58" ry="5" />
        <ellipse cx="740" cy="79" rx="58" ry="5" />
      </g>
      {layout !== 'empty' && (
        <g className="room-furniture">
          {layout === 'workshop' && (
            <g>
              <path d="M34 177h67v106H34Z" fill="#d6d0c3" stroke="#f0e9dc" strokeWidth="3" />
              <path d="M42 186h51v39H42Z" fill="#63756b" />
              <text x="67" y="211" textAnchor="middle" fill="#f1eadf" fontSize="10" letterSpacing="2">ИДЕИ</text>
            </g>
          )}
          {chairs.map((x, index) => {
            const y = 380 + (index % 2) * 24
            return (
              <g key={x} transform={`translate(${x} ${y})`}>
                <ellipse cx="26" cy="34" rx="42" ry="9" fill="#554c3f" opacity=".2" />
                <path d="M-11 5h72v13h-72Z" fill="#735841" />
                <path d="m-5 18 4 36m54-36-5 36" stroke="#403b32" strokeWidth="4" />
                <path d="M4-23h45v24H4Z" rx="5" fill="#495a50" />
                <path d="M8 0v15m37-15v15" stroke="#354239" strokeWidth="4" />
              </g>
            )
          })}
          <g transform="translate(285 432)">
            <path d="m0 0 428 0-50 50H50Z" fill="#8a6a4d" />
            <path d="m50 50 5 45m321-45-5 45" stroke="#514237" strokeWidth="8" />
            <path d="m24 7 370 0" stroke="#b59572" strokeWidth="3" />
          </g>
          {layout === 'workshop' && <path d="M390 427h26v4h-26m65-6h24v5h-24m66 0h20v4h-20" stroke="#e8dfce" strokeWidth="4" strokeLinecap="round" />}
        </g>
      )}
      <g fill="#faf7ef" opacity=".5">
        <path d="m170 495 186-112 14 3-153 112Z" />
        <path d="m846 495-186-112-14 3 153 112Z" />
      </g>
    </svg>
  )
}

export { RoomScene }

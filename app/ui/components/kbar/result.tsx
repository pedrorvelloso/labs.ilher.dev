import clsx from 'clsx'
import { ActionImpl } from 'kbar'

interface ResultProps {
  active: boolean
  item: string | ActionImpl
}

export const Result = ({ active, item }: ResultProps) => {
  if (typeof item == 'string') {
    return (
      <p className="pt-3 pb-1 px-6 text-xs uppercase text-neutral-500">
        {item}
      </p>
    )
  }
  return (
    <div
      className={clsx(
        'px-4 py-2 mx-2 hover:bg-neutral-200 text-base hover:text-neutral-800 rounded-lg group cursor-pointer flex items-center justify-between box-border',
        {
          'bg-neutral-200 text-neutral-800': active,
          'text-neutral-300': !active,
        },
      )}
    >
      <div className="flex items-center gap-x-2">
        {item.icon}
        <span className="group-hover:text-neutral-800">{item.name}</span>
      </div>
      {item.shortcut && (
        <div className="text-xs flex items-center space-x-2 uppercase">
          {item.shortcut.map((kbd) => (
            <span key={kbd} className="font-mono bg-black bg-opacity-20 p-1">
              {kbd}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

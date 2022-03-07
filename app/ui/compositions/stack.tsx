import { Grid } from '../components/grid'
import { Icon } from '../components/icon'
import { Text } from '../components/typograph'

export const Stack = () => {
  return (
    <div className="bg-stack-sm md:bg-stack h-[289px] border-t border-b border-neutral-800 mt-28 lg:mt-0 mb-28">
      <Grid className="text-gray-300 h-full">
        <div className="row-start-1 col-span-full md:col-span-3 lg:col-span-4 flex flex-col justify-center">
          <h2 className="text-2xl text-indigo-500 mb-6">Stack</h2>
          <Text>
            I&apos;m looking to learn a lot of new stuff. But these are my main
            tools that I like to use on a daily basis.
          </Text>
        </div>
        <div className="md:col-start-6 lg:col-start-10 col-span-full md:col-span-3 items-center justify-center md:justify-between flex gap-9">
          <Icon name="node" className="text-5xl md:text-[56px]" />
          <Icon name="react" className="text-5xl md:text-[56px]" />
          <Icon name="typescript" className="text-5xl md:text-[56px]" />
        </div>
      </Grid>
    </div>
  )
}

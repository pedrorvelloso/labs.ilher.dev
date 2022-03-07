import { Grid } from '../components/grid'
import { Icon } from '../components/icon'
import { Text } from '../components/typograph'

export const Stack = () => {
  return (
    <div className="bg-stack-sm md:bg-stack h-[289px] border-t border-b border-neutral-800 mt-28 lg:mt-0 mb-28">
      <Grid className="max-w-5xl mx-auto px-9 md:px-16 text-gray-300 h-full">
        <div className="col-span-full row-start-1 md:col-span-3 flex flex-col justify-center">
          <h2 className="text-2xl text-indigo-500 mb-6">Stack</h2>
          <Text>
            I&apos;m looking to learn a lot of new stuff. But these are my main
            tools that I like to use on a daily basis.
          </Text>
        </div>
        <div className="md:col-start-10 col-span-full md:col-span-3 items-center justify-center flex gap-9">
          <Icon name="node" size={56} />
          <Icon name="react" size={56} />
          <Icon name="typescript" size={56} />
        </div>
      </Grid>
    </div>
  )
}

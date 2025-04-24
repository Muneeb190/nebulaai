import { TextShimmer } from '@/components/ui/text-shimmer';

function TextShimmerColor() {
  return (
    <TextShimmer
      duration={6}
      className='text-xl lg:text-4xl font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
    >
      A decentralised supercomputer designed to meet the demand for next Gen AI
    </TextShimmer>
  );
}

export default TextShimmerColor


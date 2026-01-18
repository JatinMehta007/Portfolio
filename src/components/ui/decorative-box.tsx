import { Section, Box } from '@radix-ui/themes';

export default function MyDemo({children}) {
  return (
    <Box py="" style={{  borderRadius: 'var(--radius-3)' }} className='[border-image:repeating-linear-gradient(45deg,_#3f3f46_0,_#3f3f46_8px,_transparent_8px,_transparent_16px)_1] border p-2'>
      {/* This Section provides the vertical padding */}
      <Section size="10" className="decorative-lines">
      {children}
      </Section>
    </Box>
  );
}
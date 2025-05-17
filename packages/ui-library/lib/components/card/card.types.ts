export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

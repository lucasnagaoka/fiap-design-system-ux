export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAltText: string;
};

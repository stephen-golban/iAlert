export interface WelcomeSlide {
  id: string;
  title: string;
  description?: string;
  icon: React.FC<{ className?: string }>;
  illustration: any;
}

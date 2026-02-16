import {
  Section,
  SupplementCard,
  BiohackBox,
  ChapterTitle,
  Paragraph,
  SubTitle,
  MonoSubTitle,
  List,
  ComparisonBox,
  TableOfContents,
} from '@/components/ContentBlocks'
import { Checklist } from '@/components/Checklist'
import { DiagnosticQuiz } from '@/components/DiagnosticQuiz'
import { Cover } from '@/components/Cover'

export const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl font-bold text-white mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold text-brand-red mb-3 mt-8" {...props} />,
  p: (props: any) => <p className="text-gray-300 leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-5 space-y-2 mb-4" {...props} />,
  li: (props: any) => <li className="text-gray-300" {...props} />,
  Section,
  SupplementCard,
  BiohackBox,
  ChapterTitle,
  Paragraph,
  SubTitle,
  MonoSubTitle,
  List,
  ComparisonBox,
  Checklist,
  DiagnosticQuiz,
  Cover,
  TableOfContents,
}

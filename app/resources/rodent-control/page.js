import ResourceDetail from '../ResourceDetail';

const resource = {
  file: '/%D9%85%D9%83%D8%A7%D9%81%D8%AD%D8%A9%20%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%B1%D8%B6.jpg',
  type: 'image',
  downloadName: 'Poster - Rodent Control.jpg',
  translations: {
    en: {
      title: 'Poster: Rodent Control',
      description: 'Practical steps to keep food storage clean and reduce rodent risks.',
    },
    ar: {
      title: 'ملصق مكافحة القوارض',
      description: 'خطوات عملية للحفاظ على نظافة أماكن التخزين وتقليل مخاطر القوارض.',
    },
  },
};

export default function RodentControlPage() {
  return <ResourceDetail resource={resource} />;
}

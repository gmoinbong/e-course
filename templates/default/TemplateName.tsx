import st from './TemplateName.module.scss';

interface TemplateNameProps { }

export const TemplateName = ({ }: TemplateNameProps) => (
  <div className={st.templateName} >
    TemplateName Component
  </div>
);
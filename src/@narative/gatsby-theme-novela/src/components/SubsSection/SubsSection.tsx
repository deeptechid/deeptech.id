import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const SubsSection = styled.section<{ narrow?: boolean }>`
  width: 100%;
  max-width: 50%;
  margin: 0 auto;

  ${mediaqueries.desktop`
    max-width: 850px;
  `};

  ${p =>
    p.narrow
      ? mediaqueries.tablet`
          max-width: 527px;
        `
      : mediaqueries.tablet`
          max-width: 567px;
        `}

  ${mediaqueries.phablet`
    max-width: 100%;
  `};
`;

export default SubsSection;

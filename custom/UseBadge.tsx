import React from 'react';
import { Badge } from "@/components/ui/badge"

type TechnologyItem = {
  techno: string;
};

type BadgesProps = {
  technologies: TechnologyItem[];
};

const UseBadge: React.FC<BadgesProps> = ({ technologies }) => {
  const badges = technologies.map((element: TechnologyItem) => (
    <Badge key={element.techno} variant="outline">
      {element.techno}
    </Badge>
  ));

  return <div>{badges}</div>;
};

export default UseBadge;
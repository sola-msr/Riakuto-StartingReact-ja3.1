import React, { FC } from 'react';
import useSWR from 'swr';

import MemberList from 'components/organisms/MemberList';
import getMembers from 'domains/github/services/get-members';

const EnhancedMemberList: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data: users = [] } = useSWR([orgCode, 'members'], getMembers);

  return <MemberList users={users} />;
};

export default EnhancedMemberList;
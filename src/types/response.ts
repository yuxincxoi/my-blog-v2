export type ResponseResult = {
  id: string;
  properties: {
    제목: {
      title: {
        plain_text: string;
      }[];
    };
    카테고리: {
      select: {
        name: string;
      };
    };
    작성자: {
      created_by: {
        name: string;
      };
    };
    게시일: {
      created_time: string;
    };
  };
};

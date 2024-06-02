import { useDebounceFn } from 'ahooks';
import { Helmet } from 'react-helmet-async';

import { RichTextEditor } from '@/components';

const description = 'توضیحات اولیه';

export default function Home() {
  const { run: updateDescription } = useDebounceFn(
    (updatedDescription: string) => {
      console.log({ updatedDescription });
    },
  );

  return (
    <>
      <Helmet>
        <title>صفحه اصلی</title>
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>

      <div className='mx-40 my-60'>
        <RichTextEditor
          placeholder='توضیحات را اینجا وارد کنید'
          options={{
            content: description,
            onUpdate: ({ editor }) => {
              updateDescription(editor.getHTML());
            },
          }}
        />
      </div>
    </>
  );
}

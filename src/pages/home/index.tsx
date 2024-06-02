import { useDebounceFn } from 'ahooks';
import { Image, Typography } from 'antd';
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

      <main>
        <div className='mx-40 my-48'>
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

        <div className='absolute bottom-0 left-0 m-5'>
          <Typography.Link href='https://github.com/AliBagheri2079/rich-text-editor'>
            <Image
              src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
              width={40}
              height={40}
              preview={false}
            />
          </Typography.Link>
        </div>
      </main>
    </>
  );
}

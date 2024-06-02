import { Result } from 'antd';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>خطای 404</title>
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>

      <div className='flex h-dvh items-center justify-center'>
        <Result
          status='404'
          title='404'
          subTitle='با عرض معذرت این صفحه دردسترس نیست.'
        />
      </div>
    </>
  );
}

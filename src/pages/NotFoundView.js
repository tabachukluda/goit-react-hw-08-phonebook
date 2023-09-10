import errorImage from '../img/pageNotFound.png';
import s from './Pages.module.css';

export default function NotFoundView() {
  return (
    <main role="alert" className={s.main}>
      <img src={errorImage} width="650" alt="Error" className={s.img} />
      <h1 className={s.title}>Page not found 😨</h1>
    </main>
  );
}
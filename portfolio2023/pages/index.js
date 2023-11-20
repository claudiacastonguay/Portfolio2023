import Header from '../comps/Header';
import Footer from '../comps/Footer';
import Link from 'next/link';

export default function Page() {
    return <main>
    <Header homecolor={"#15C4B6"} homefont="27pt"/>

    <div>
        <Footer />
    </div>

    </main>
  }
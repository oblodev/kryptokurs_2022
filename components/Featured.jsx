import styles from "../styles/Featured.module.scss";
import Image from "next/image";
import blockchain from "../public/images/blockchain.jpg";
import moment from "moment";
import Link from "next/link";

function Featured({ featuredPost }) {
  console.log(featuredPost);
  const post = featuredPost[featuredPost.length - 1].node;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>
          <span>//</span> Aktualnosci ze swiata kryptowalut
        </h2>
        <Link href={`/post/${post.slug}`}>
          <div className={styles.featured}>
            <div className={styles.imgWrapper}>
              <Image
                src={blockchain}
                className={styles.img}
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className={styles.feature}>
              <p>{post.categories[0].name}</p>
              <h3>{post.title}</h3>
              <p>{moment(post.createdAt).format("DD.MM.YYYY")}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Featured;

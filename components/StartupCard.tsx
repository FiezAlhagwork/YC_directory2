/* eslint-disable @next/next/no-img-element */
import { StartupTypeCard } from "@/app/(root)/page";
import { formatData } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createAt,
    views,
    author: { authorId, name },
    title,
    category,
    _id,
    image,
    description
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_data">{formatData(_createAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className=" text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-20-medium line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="avatr"
            width={48}
            height={48}
            className=" rounded-full "
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">
              {description}
          </p>
          
          <img src="/robot.jpg" alt="placeholder" className="startup-card_img"  />

      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`} >
        <p className="text-16-medium">{category}</p>
        </Link>
        <button className="startup-card_btn" >
          <Link href={`/startup/${_id}`} >
            Details
          </Link>
        </button>
      </div>

    </li>
  );
};

export default StartupCard;

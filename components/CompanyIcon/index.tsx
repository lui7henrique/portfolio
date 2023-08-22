import Image from "next/image";
import { GetExperiencesQuery } from "src/graphql/generated/graphql";

type CompanyIconProps = Pick<
  GetExperiencesQuery["experiences"][0],
  "companyLogo" | "companyName" | "companyColor"
>;

export const CompanyIcon = (props: CompanyIconProps) => {
  const { companyName, companyColor, companyLogo } = props;

  return (
    <figure
      className={"w-10 h-10 relative rounded-xl lg:w-12 lg:h-12 flex items-center justify-center"}
      style={{
        backgroundColor: companyColor.hex,
      }}
    >
      <Image src={companyLogo.url} alt={companyName} className="p-2" width={48} height={48}
      />
    </figure>
  );
};

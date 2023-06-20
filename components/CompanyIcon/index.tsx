import Image from "next/image";

type CompanyIconProps = {
  companyName: string;
};

export const CompanyIcon = (props: CompanyIconProps) => {
  const { companyName } = props;

  const component: Record<string, JSX.Element> = {
    Hyperlocal: (
      <figure className={`w-12 h-12 relative rounded-xl bg-blue-700`}>
        <Image
          src={`/logos/hyperlocal-white.svg`}
          fill
          alt="hyperlocal-logo"
          className="p-3"
        />
      </figure>
    ),
    hubxp: (
      <figure className={`w-12 h-12 relative rounded-xl bg-zinc-900`}>
        <Image
          src={`/logos/hubxp.svg`}
          fill
          alt="hyperlocal-logo"
          className="p-2"
        />
      </figure>
    ),
  };

  return component[companyName];
};

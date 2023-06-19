export const useCompany = () => {
  const getColor = (company: string) => {
    const colors: Record<string, string> = {
      hubxp: "bg-zinc-900",
      Hyperlocal: "bg-red-600",
    };

    const color = colors[company];

    return color;
  };

  const getIcon = (company: string) => {
    const icons: Record<string, string> = {
      hubxp: "hubxp.svg",
      Hyperlocal: "hyperlocal-white.svg",
    };

    return icons[company];
  };

  return { getColor, getIcon };
};

export const SectionHeader = ({
    title,
    eyebrow,
    description,
}:  {
    title : string;
    eyebrow : string;
    description : string;
}) => {
  return (
    <>
    <div className="flex justify-center ">
   <p className="uppercase tracking-widest bg-gradient-to-r from-emerald-400 via-teal-500 to-teal-600 text-3xl text-center bg-clip-text text-transparent font-bold animate-gradient">
   {eyebrow}</p>
   </div>
   <h2 className="text-3xl md:text-5xl text-center mt-5">{title}</h2>
   <p className="text-center md:text-lg lg:text-xl text-white/60 mt-3 max-w-md mx-auto">{description}</p>
  </>
  );
};

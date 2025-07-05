export default function Header({ title }) {
  return (
    <div className="mt-[100px]">
      <div className="text-center items-center justify-center  mx-auto mb-[50px]">
        <h2 className="text-3xl font-bold capitalize">{title}</h2>
      </div>
    </div>
  );
}

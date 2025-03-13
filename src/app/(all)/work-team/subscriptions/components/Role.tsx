interface RoleProps {
    index: number;
    title: string;
    desc: string;
}

const Role: React.FC<RoleProps> = ({ index, title, desc }) => {
    return (
        <div className=" w-full pr-4 flex flex-col gap-4">
                <div className="flex items-center font-bolder">
                    <span className="text-2xl font-bolder"  style={{ fontWeight:"bolder"}}>{index + 1}.</span>
                    <h3 className="text-xl font-bold text-right pr-2" style={{ marginBottom: 0 ,fontWeight:"bolder"}}>{title}</h3>
                </div>
            <p className='text-lg text-right ml-16'>
                {desc}
            </p>
        </div>
    );
}

export default Role;
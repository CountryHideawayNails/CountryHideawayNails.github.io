import Loading from "./Loading";
import { useState, useEffect } from "react";
import pullServices, { type Service, type ServiceGroup } from "../../data/services";

export default function ServiceGroupLists() {
    const [is_loading, setIsLoading] = useState<boolean>(true);
    const [services, setServices] = useState<ServiceGroup[]>([]);

    useEffect(() => {
        async function getServices() {
            setIsLoading(true);
            setServices(await pullServices());
            setIsLoading(false);
        }
        
        getServices();
    }, []);

    return (
        <Loading
            is_loading={is_loading}
            content={<>{services.map((group: ServiceGroup) => (
                <div className="border rounded-2xl px-8 py-4 max-w-[500px] w-[500px] bg-[#ffebbd]">
                    <h1 className="text-xl sm:text-2xl lg:text-4xl">{group.title}</h1>
                    <hr className="pb-2" />
                    {group.services.map((service: Service) => (
                        <>
                            <div className="flex pb-1">
                                <p className="font-bold">{service.title}</p>
                                <div className="flex-grow border-b-2 border-dotted min-w-[20px]"></div>
                                <p>{service.cost}</p>
                            </div>
                            {service.description === undefined
                                ? <></>
                                : <div>
                                    <p className="ml-8">*&nbsp;{service.description}</p>
                                </div>
                            }
                        </>
                    ))}
                </div>
            ))}</>}
        />
    );
}
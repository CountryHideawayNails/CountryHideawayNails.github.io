import "../../styles/service_lists.css";
import { useState, useEffect, type JSX } from "react";
import pullServices, { type ServiceGroup } from "../../scripts/services";

function ServiceLists(): JSX.Element | JSX.Element[] {
    const [is_loading, setLoading] = useState<boolean>(true);
    const [groups, setGroups] = useState<ServiceGroup[]>([]);

    async function getServices(): Promise<void> {
        setLoading(true);
        setGroups(await pullServices());
        setLoading(false);
    }

    useEffect(() => {
        getServices();
    }, []);

    if (is_loading) {
        return <h1>LOADING...</h1>
    }

    return groups.map((group, group_index) => (<div key={`Service-Group-${group_index}`}>
        <div className="bg-chn-black text-bright font-la-belle-aurore text-lg service-group-title">
            -&nbsp;{group.title}&nbsp;-
        </div>

        <div className="services-container">
            {group.services.map((service, service_index) => (
                <div
                    key={`Service-${group_index}-${service_index}`}
                    className={service_index % 2 === 0 ? "weight-bold" : ""}
                >
                    <div className="service-main-line">
                        <span>
                            {service.title}
                        </span>

                        <span className="service-dotted-line" />

                        <span>
                            {service.cost}
                        </span>
                    </div>
                    
                    {
                        service.description !== undefined &&
                        <span>
                            *{service.description}
                        </span>
                    }
                </div>
            ))}
        </div>
    </div>))
}

export default ServiceLists;
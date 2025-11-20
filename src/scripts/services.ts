interface Service {
    title: string;
    description?: string;
    cost: string;
};

interface ServiceGroup {
    title: string;
    services: Service[];
};

async function pullServices(): Promise<ServiceGroup[]> {
    const sheet_name: string = "Prices";
    const sheet_id: string = "12xu4YemBzrVUCpqfeey_VMzdUp5XXMY5tfM6HHZSjn8";

    const query: string = encodeURIComponent(
        "SELECT * ORDER BY D"
    );

    const response: Response = await fetch(
        `https://docs.google.com/spreadsheets/d/${sheet_id}` +
        `/gviz/tq?tq=${query}&sheet=${sheet_name}`
    );

    const raw_text: string = await response.text();
    const matched_text: RegExpMatchArray | null = raw_text.match(/(?<=\().*(?=\);)/s);
    if (matched_text === null) {
        return [];
    }
    
    const json: any = JSON.parse(matched_text[0]);
    const rows: any = json?.table?.rows;
    if (!rows) {
        return [];
    }

    const services: ServiceGroup[] = [];

    let service_index: number = -1;
    let last_group: string = "";
    rows.forEach((row: any) => {
        const cur_group: string = row.c[3]?.v ?? "";
        if (last_group !== cur_group) {
            ++service_index;
            last_group = cur_group;
            services.push({
                title: cur_group,
                services: [],
            });
        }
        
        services[service_index].services.push({
            title: row.c[0]?.v ?? "",
            description: row.c[1]?.v,
            cost: `$${(row.c[2]?.v ?? 0).toFixed(2)}`,
        })
    });

    return services.sort((group_a: ServiceGroup, group_b: ServiceGroup) => {
        const name_a: string = group_a.title;
        const name_b: string = group_b.title;

        if (name_a < name_b) {
            return -1;
        }

        if (name_a > name_b) {
            return 1;
        }

        return 0;
    });
}

export { type Service, type ServiceGroup };
export default pullServices;
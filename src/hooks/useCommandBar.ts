import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// CommandBar
import { init } from 'commandbar';

const useCommandBar = () => {
	const router = useRouter();

    const componentWillUnmount = () => {
        console.log('CommandBar Hooks Unmount')
    };

    const componentDidMount = () => {
        init('91aaa579'); // TODO: Move ID to .env
        window.CommandBar.boot('34aa5745-51c7');
    }

    // Callback Functions
    const sortByTransactions = () => {
        console.log('Sort by Transaction');
    }

    const sortByLocations = () => {
        console.log('Sort by Locations');
    }

    const showVerifiedOnly = () => {
        console.log('Show Verified Account');
    }

    const getAdvanceFilters = (data: any) => {
        console.log('Get Advance Filters', data);
    }

    const onSearchContacts = () => {
        console.log('Search Contacts');
    }

    const consoleLog = (data: any) => {
        console.log(data);
    }

	// Life Cycle
	useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, []);

    // Initialized CommandBar Router
	useEffect(() => {
		const routerFunc = (newUrl: any) => router.push(newUrl);
      	
        // Add Router
        window.CommandBar.addRouter(routerFunc);

        // Add Callback
        window.CommandBar.addCallback('sortByLocations', sortByLocations);
        window.CommandBar.addCallback('sortByTransactions', sortByTransactions);
        window.CommandBar.addCallback('showVerifiedOnly', showVerifiedOnly);
        window.CommandBar.addCallback('getAdvanceFilters', getAdvanceFilters);
        window.CommandBar.addCallback('consoleLog', consoleLog)

        // Add Context
        window.CommandBar.addContext("activeLocations",
            [
                { label: "38 Yukon Dr. Lowell, MA 01851", id: 1 },
                { label: "440 Arcadia St.Waxhaw, NC 28173", id: 2 },
                { label: "172 Valley Lane Hopkinsville, KY 42240", id: 3 },
                { label: "7328 Meadow Street New Kensington, PA 15068", id: 4 },
                { label: "21 Gainsway St.Apex, NC 27502", id: 5 },
                { label: "21 South Fremont Court Morgantown, WV 26508", id: 6 },
                { label: "99 Ohio Street Upper Darby, PA 19082", id: 7 },
                { label: "7753 Cobblestone Dr.Fresno, CA 93706", id: 8 },
                { label: "184 East Rd.Meadville, PA 16335", id: 9 },
                { label: "338 Oak Meadow Drive Indianapolis, IN 46201", id: 10 },
            ],
            {
                "renderOptions": {
                "labelKey": "label"
                },
                "quickFindOptions": {
                "quickFind": true,
                }
            }
        );

        window.CommandBar.addContext("teams",
            [
                { label: "Isabela Cannon", id: 1 },
                { label: "Ingrid Cooley", id: 2 },
                { label: "Quintin Wells", id: 3 },
                { label: "Sloane Harvey", id: 4 },
                { label: "Xzavier Ray", id: 5 },
                { label: "Kirsten Fox", id: 6 },
                { label: "Krista Smith", id: 7 },
                { label: "Briana Chandler", id: 8 },
                { label: "Aisha Whitney", id: 9 },
            ],
            {
                "renderOptions": {
                "labelKey": "name"
                },
                "quickFindOptions": {
                "quickFind": true,
                }
            }
        );

        window.CommandBar.addContext("customersEmail",
            [
                { label: "naupa@yahoo.com", id: 1 },
                { label: "munge@optonline.net", id: 2 },
                { label: "adamk@icloud.com", id: 3 },
                { label: "yumpy@verizon.net", id: 4 },
                { label: "raines@verizon.net", id: 5 },
                { label: "flaviog@yahoo.ca", id: 6 },
                { label: "chlim@icloud.com", id: 7 },
                { label: "oechslin@yahoo.com", id: 8 },
                { label: "gamma@optonline.net", id: 9 },
            ],
            {
                "renderOptions": {
                "labelKey": "label"
                },
                "quickFindOptions": {
                "quickFind": true,
                }
            }
        );

        window.CommandBar.addContext("activeTasks",
            [
                { name: "Send Email to Manuel", id: 1 },
                { name: "Confirm Mark with Deliverables", id: 2 },
                { name: "Make reports at 5pm", id: 2 },
            ],
            {
                "renderOptions": {
                "labelKey": "name"
                },
                "quickFindOptions": {
                "quickFind": true,
                }
            }
        );

    }, []);

}

export default useCommandBar;
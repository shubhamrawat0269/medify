import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabComp = () => {
  return (
    <Tabs>
      <TabList>
        <Tab className="flex flex-col gap-1">
          <span className="text-sm font-bold">Today</span>
          <span className="text-sm text-green-700">11 slots available</span>
        </Tab>
        <Tab className="flex flex-col gap-1">
          <span className="text-sm font-bold">Tomorrow</span>
          <span className="text-sm text-green-700">17 slots available</span>
        </Tab>
        <Tab className="flex flex-col gap-1">
          <span className="text-sm font-bold">Fri, May 21</span>
          <span className="text-sm text-green-700">20 slots available</span>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <div className="mt-5 mb-5">
            <div className="flex gap-10 items-center mb-3">
              <div className="text-sm font-bold w-28">Monday</div>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
            </div>
            <div className="flex gap-10 items-center  mb-3">
              <div className="text-sm font-bold w-28">Tuesday</div>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
            </div>
            <div className="flex gap-10 items-center  mb-3">
              <div className="text-sm font-bold w-28">Wednesday</div>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-5 mb-5">
            <div className="flex gap-10 items-center mb-3">
              <div className="text-sm font-bold w-28">Monday</div>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
            </div>
            <div className="flex gap-10 items-center  mb-3">
              <div className="text-sm font-bold w-28">Tuesday</div>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
            </div>
            <div className="flex gap-10 items-center  mb-3">
              <div className="text-sm font-bold w-28">Wednesday</div>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-5 mb-5">
            <div className="flex gap-10 items-center mb-3">
              <div className="text-sm font-bold w-28">Monday</div>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
            </div>
            <div className="flex gap-10 items-center  mb-3">
              <div className="text-sm font-bold w-28">Tuesday</div>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
            </div>
            <div className="flex gap-10 items-center  mb-3">
              <div className="text-sm font-bold w-28">Wednesday</div>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
              <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                <span>10:30AM</span>
              </button>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabComp;

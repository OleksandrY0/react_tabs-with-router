import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useNavigate, useParams } from 'react-router-dom';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const activeIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={activeIndex === -1 ? 0 : activeIndex}
        onSelect={index => navigate(`/tabs/${tabs[index].id}`)}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id}>{tab.title}</Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id}>{tab.content}</TabPanel>
        ))}
      </Tabs>

      {activeIndex === -1 && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};

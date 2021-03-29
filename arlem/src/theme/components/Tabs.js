import React from 'react'


function Tabs({component, display}) {
    const tabs = [
        {
          icon: 'fa-home',
          text: 'Workplace Details',
          component: 'workplace-create',
          category: 'workplace'
        },
        {
          icon: '',
          text: 'Tangibles',
          component: ''
        },
        {
          icon: 'fa-user',
          text: 'Add Person',
          component: 'person-create',
          category: 'tangible'
        },
        {
          icon: 'fa-bicycle',
          text: 'Add Thing',
          component: 'thing-create',
          category: 'tangible'
        },
        {
          icon: 'fa-map-marker',
          text: 'Add Place',
          component: 'place-create',
          category: 'tangible'
        },
        {
          icon: '',
          text: 'Configurables',
          component: ''
        },
        {
          icon: 'fa-th',
          text: 'Add App',
          component: 'app-create',
          category: 'configurable'
        },
        {
          icon: 'fa-mobile',
          text: 'Add Device',
          component: 'device-create',
          category: 'configurable'
        },
        {
          icon: '',
          text: 'Triggers',
          component: ''
        },
        {
          icon: 'fa-lightbulb-o',
          text: 'Add Predicate',
          component: 'predicate-create',
          category: 'trigger'
        },
        {
          icon: 'fa-exclamation-circle',
          text: 'Add Warning',
          component: 'warning-create',
          category: 'trigger'
        },
        {
          icon: 'block',
          text: 'Add Hazard',
          component: 'hazard-create',
          category: 'trigger'
        },
        {
          icon: 'fa-cog',
          text: 'Add Detectable',
          component: 'detectable-create',
          category: 'trigger'
        },
        {
          icon: '',
          text: 'Sensors',
          component: ''
        },
        {
          icon: 'fa-fingerprint',
          text: 'Add Sensor',
          component: 'sensor-create',
          category: 'sensor'
        }
      ]
    return (
        <>
            {
                tabs.map(tab => (
                    <Tile icon={tab.icon} text={tab.text} />
                ))

            }
        </>
    )
}

export default Tabs

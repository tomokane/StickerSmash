import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
        <Tabs.Screen name="Home" options={{ title: "Home"}} />
        <Tabs.Screen name="About" options={{ title: "About"}} />
        </Tabs>
    );
}
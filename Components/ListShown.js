
// // import React in our code
// import React, {useState} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   Switch,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';

// // import for the animation of Collapse and Expand
// import * as Animatable from 'react-native-animatable';

// // import for the collapsible/Expandable view
// import Collapsible from 'react-native-collapsible';

// // import for the Accordion view
// import Accordion from 'react-native-collapsible/Accordion';

// // Dummy content to show
// // You can also use dynamic data by calling web service
// const CONTENT = [
//     {
//               "postId": 1,
//               "id": 1,
//               "title": "id labore ex et quam laborum",
//               "email": "Eliseo@gardner.biz",
//               "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//             },
//             {
//               "postId": 1,
//               "id": 2,
//               "title": "quo vero reiciendis velit similique earum",
//               "email": "Jayne_Kuhic@sydney.com",
//               "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//             },
//             {
//               "postId": 1,
//               "id": 3,
//               "title": "odio adipisci rerum aut animi",
//               "email": "Nikita@garfield.biz",
//               "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//             },
//             {
//               "postId": 1,
//               "id": 4,
//               "title": "alias odio sit",
//               "email": "Lew@alysha.tv",
//               "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//             },
//             {
//               "postId": 1,
//               "id": 5,
//               "name": "vero eaque aliquid doloribus et culpa",
//               "email": "Hayden@althea.biz",
//               "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
//             },
//             {
//               "postId": 2,
//               "id": 6,
//               "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
//               "email": "Presley.Mueller@myrl.com",
//               "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
//             },
//             {
//               "postId": 2,
//               "id": 7,
//               "name": "repellat consequatur praesentium vel minus molestias voluptatum",
//               "email": "Dallas@ole.me",
//               "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
//             },
//             {
//               "postId": 2,
//               "id": 8,
//               "title": "et omnis dolorem",
//               "email": "Mallory_Kunze@marie.org",
//               "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
//             },
// ];

// //To make the selector (Something like tabs)
// const SELECTORS = [
//   {title: 'name', value: 0},
//   {title: 'name', value: 1},
//   {title: 'name', value: 2},
//   {title: 'Reset all'},
// ];

// const App = () => {
//   // Default active selector
//   const [activeSections, setActiveSections] = useState([]);
//   // Collapsed condition for the single collapsible
//   const [collapsed, setCollapsed] = useState(true);
//   // MultipleSelect is for the Multiple Expand allowed
//   // True: Expand multiple at a time
//   // False: One can be expand at a time
//   const [multipleSelect, setMultipleSelect] = useState(false);

//   const toggleExpanded = () => {
//     // Toggling the state of single Collapsible
//     setCollapsed(!collapsed);
//   };

//   const setSections = (sections) => {
//     // Setting up a active section state
//     setActiveSections(
//       sections.includes(undefined) ? [] : sections
//     );
//   };

//   const renderHeader = (section, _, isActive) => {
//     // Accordion header view
//     return (
//       <Animatable.View
//         duration={400}
//         style={[
//           styles.header,
//           isActive ? styles.active : styles.inactive
//         ]}
//         transition="backgroundColor">
//         <Text style={styles.headerText}>
//           {section.title}
//         </Text>
//       </Animatable.View>
//     );
//   };

//   const renderContent = (section, _, isActive) => {
//     // Accordion Content view
//     return (
//       <Animatable.View
//         duration={400}
//         style={[
//           styles.content,
//           isActive ? styles.active : styles.inactive
//         ]}
//         transition="backgroundColor">
//         <Animatable.Text
//           animation={isActive ? 'bounceIn' : undefined}
//           style={{textAlign: 'center'}}>
//           {section.content}
//         </Animatable.Text>
//       </Animatable.View>
//     );
//   };

//   return (
//     <View style={{flex: 1}}>
//       <View style={styles.container}>
//         <ScrollView>
//           <Text style={styles.title}>
            
//             Listview in React
//             Native
//           </Text>

//           {/*Code for Single Collapsible Start*/}
//           {/* <TouchableOpacity onPress={toggleExpanded}>
//             <View style={styles.header}>
//               <Text style={styles.headerText}>
//                 Single Collapsible
//               </Text>
//               {/*Heading of Single Collapsible*/}
//             {/* </View>
//           </TouchableOpacity> */} 
//           {/*Content of Single Collapsible*/}
//           {/* <Collapsible
//             collapsed={collapsed}
//             align="center"
//           >
//             <View style={styles.content}>
//               <Text style={{textAlign: 'center'}}>
//                 This is a dummy text of Single Collapsible View
//               </Text>
//             </View>
//           </Collapsible> */}
//           {/*Code for Single Collapsible Ends*/}

//           {/* <View
//             style={{
//               backgroundColor: '#000',
//               height: 1,
//               marginTop: 10
//             }} />
//           <View style={styles.multipleToggle}>
//             <Text
//               style={styles.multipleToggle__title}
//             >
//               Multiple Expand Allowed?
//             </Text>
//             <Switch
//               value={multipleSelect}
//               onValueChange={(multipleSelect) =>
//                 setMultipleSelect(multipleSelect)
//               }
//             />
//           </View> */}
//           <Text style={styles.selectTitle}>
//             Please select below option to expand
//           </Text>

//           {/*Code for Selector starts here*/}
//           <View style={styles.selectors}>
//             {SELECTORS.map((selector) => (
//               <TouchableOpacity
//                 key={selector.title}
//                 onPress={
//                  () => setSections([selector.value])
//                 }
//               >
//                 <View style={styles.selector}>
//                   <Text
//                     style={
//                       activeSections.includes(selector.value) &&
//                       styles.activeSelector
//                     }>
//                     {selector.title}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//           {/*Code for Selector ends here*/}

//           {/*Code for Accordion/Expandable List starts here*/}
//           <Accordion
//             activeSections={activeSections}
//             // For any default active section
//             sections={CONTENT}
//             // Title and content of accordion
//             touchableComponent={TouchableOpacity}
//             // Which type of touchable component you want
//             // It can be the following Touchables
//             // TouchableHighlight, TouchableNativeFeedback
//             // TouchableOpacity , TouchableWithoutFeedback
//             expandMultiple={multipleSelect}
//             // If you want to expand multiple at a time
//             renderHeader={renderHeader}
//             // Header Component(View) to render
//             renderContent={renderContent}
//             // Content Component(View) to render
//             duration={400}
//             // Duration for Collapse and expand
//             onChange={setSections}
//             // Setting the state of active sections
//           />
//           {/*Code for Accordion/Expandable List ends here*/}
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//     paddingTop: 30,
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '300',
//     marginBottom: 20,
//   },
//   header: {
//     backgroundColor: '#F5FCFF',
//     padding: 10,
//   },
//   headerText: {
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   content: {
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   active: {
//     backgroundColor: 'rgba(255,255,255,1)',
//   },
//   inactive: {
//     backgroundColor: 'rgba(245,252,255,1)',
//   },
//   selectors: {
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   selector: {
//     backgroundColor: '#F5FCFF',
//     padding: 10,
//   },
//   activeSelector: {
//     fontWeight: 'bold',
//   },
//   selectTitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     padding: 10,
//     textAlign: 'center',
//   },
//   multipleToggle: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 30,
//     alignItems: 'center',
//   },
//   multipleToggle__title: {
//     fontSize: 16,
//     marginRight: 8,
//   },
// });

// Example of Collapsible/Accordion/Expandable List View in React Native
// https://aboutreact.com/collapsible-accordion-expandable-view/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

//import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

//import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';

//Dummy content to show
//You can also use dynamic data by calling web service
const CONTENT = [
  {
    title: 'item1',
    name:
      'id labore ex et quam laborum',
     email:"eliseo@gardner.biz",
     body:"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    title: 'item2',
    name:
      'quo vero reiciendis velit similique earum',
      email:"jayne_kuhic@sydney.com",
body:"est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    title: 'item3',
    name:"odio adipisci rerum aut animi",
    email:"nikita@garfield.biz",
    body:"quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  ];

//To make the selector (Something like tabs)
// const SELECTORS = [
//   { title: 'T&C', value: 0 },
//   { title: 'Privacy Policy', value: 1 },
//   { title: 'Return Policy', value: 2 },
//   { title: 'Reset all' },
// ];

const api = () => {
  // Ddefault active selector
  const [activeSections, setActiveSections] = useState([]);
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{  padding:10, backgroundColor:'pink',borderRadius:10}}>
          NAME:{section.name}
        </Animatable.Text>
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{  padding:10,marginTop:'5%' ,backgroundColor:'pink',borderRadius:10}}>
         E-MAIL: {section.email}
        </Animatable.Text>
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ padding:10,marginTop:'5%' ,backgroundColor:'pink',borderRadius:10 }}>
         BODY: {section.body}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
         

          <View style={{ backgroundColor: '#000', height: 1, marginTop: 10 }} />
          <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>
              Multiple Expand Allowed?
            </Text>
            <Switch
              value={multipleSelect}
              onValueChange={(multipleSelect) =>
                setMultipleSelect(multipleSelect)
              }
            />
          </View>
         

       
          {/*Code for Selector ends here*/}

          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={CONTENT}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={multipleSelect}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={renderHeader}
            //Header Component(View) to render
            renderContent={renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={setSections}
            //setting the state of active sections
          />
          {/*Code for Accordion/Expandable List ends here*/}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default api;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    padding:10,
    // justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
<img src="https://github.com/develotechnologies/ReactNativeBoilerPlate/blob/master/src/assets/images/develoITSolutions.png"/>

# ReactNativeBoilerPlate
Follow the steps below to run the project

1.  Clone Master Branch
2.  Open terminal in project's root directory.
3.  Run the command 

>yarn add @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-redux redux redux-thunk react-native-dimension react-native-keyboard-aware-scrollview

OR

> yarn

4. Run the project

<b>Android</b>
> npx react-native run-android

<b>IOS</b>
> cd ios/

> pod install

> cd ..

> npx react-native run-ios


<b>Added Features</b>

1. Redux Setup for 
    
    1. Auth
        
    2. Config 
        
2. Global Loader Modal Setup (Please Setup UI according to App Theme)
    
3. Bottom Alert for success, failure, warning etc. 
    
   NPM Package used for Alert is <a>https://github.com/lucasferreira/react-native-flash-message#readme</a>.
       
   Read documentation for usage.
   
Following Scripts added 
1. <b>yarn runios</b>

   OR
   
    <b>npm runios</b>
    
   [Which is short form of yarn && cd ios && pod install && cd .. && react-native run-ios]

2. <b>yarn assembleDebug</b> 

    OR
    
    <b>npm assembleDebug</b> 
    
    [Which will create android bundle, clean gradlew and assembleDebug]
    
    Note: Make sure "assets" folder is created at "android/app/src/main"

<em><b>Author<b/>: Shoaib Ahmed <b>[Develo IT Solutions Pvt Ltd.]<b/></em>

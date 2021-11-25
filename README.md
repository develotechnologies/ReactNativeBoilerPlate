<img src="https://github.com/develotechnologies/ReactNativeBoilerPlate/blob/Main/src/assets/images/demo.gif"/>

# Boiler Plate for React Native Projects
Our aim is to reduce time React Native Developers spend to configure and structure commonly used libraries including React-Navigation, Redux, Handling Authentication using Redux to switch between Navigation Stacks.

Follow the steps below to run the project

1.  Clone Master Branch
2.  Open terminal in project's root directory.
3.  Run the command 

        yarn add @react-navigation/native@^5.x @react-navigation/stack@^5.x react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-redux redux redux-thunk react-native-dimension react-native-keyboard-aware-scrollview

       OR

    yarn

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
   
<b>Following Scripts added </b>

1. Run Ios

    yarn runios

   OR
   
    npm runios
    
  This command runs following commands behind the scene
   
    yarn && cd ios && pod install && cd .. && react-native run-ios


2. Create Debug APK


        yarn assembleDebug

    OR
    
        npm assembleDebug
    
    This command runs following commands behind the scene    

        react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res    
        cd android && ./gradlew clean
        cd android && ./gradlew assembleDebug

    Note: Make sure "assets" folder is created at "android/app/src/main"

<em><b>Author<b/>: Shoaib Ahmed <b>[Develo IT Solutions Pvt Ltd.]<b/></em>

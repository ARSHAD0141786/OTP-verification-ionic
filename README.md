# OTP-verification-ionic
OTP verification by firebase in ionic.

Do the following in order : 
1. download the clone of this directory.
2. Make a firebase account goto firebase console and add an new project
3. run this command to know the SHA1 key : 
    keytool -list -v -keystore %USERPROFILE%/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
4. After that configure the firebase project (Make sure your package name should be same as id of config.xml in project repository).
5. Download google-services.json file from firebase and copy it in root directory of project.
6. Goto app.module file in project directory, Here is a commented line to remove this error do the following :
      a. Goto firebase project > Project Overview > Add App > Add firebase to your web app copy the config variable
      b. Paste the config variable into the app.module file.
7. run following command after connecting your phone:
    ionic cordova run android
8. Goto chrome type "chrome://inspect" into url bar and then inspect you device
9. As you run the app check the console of chrome.

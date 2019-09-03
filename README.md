# pokedexMobile
Pokedex made with NativeScript

After downloading the source code, you need to run the command:

npm install

tns platform add android

Google disabled the ability to connect to http urls, instead you either use https only or add cleartextTrafficPermitted="true" to the
Android Manifest located in the platform folder.

Create a folder xml, then create a file "network_security_config.xml" under the res folder

Add the following line to the AndroidManifest.xml:
android:networkSecurityConfig="@xml/network_security_config" in the <application> tag

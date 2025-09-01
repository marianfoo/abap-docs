  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Release 3.0](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-30.htm) → 

RFC - Remote Function Call in Release 3.0

[1\. Transactional RFC](#!ABAP_MODIFICATION_1@1@)

[2\. Asynchronous RFC](#!ABAP_MODIFICATION_2@2@)

[3\. Authorization checks when accessing function groups using RFC](#!ABAP_MODIFICATION_3@3@)

Modification 1

Transactional RFC
CALL FUNCTION... DESTINATION ... can now also be called using the addition IN BACKGROUND TASK. The calls are collected and executed as a logical unit of work ([LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenluw_glosry.htm "Glossary Entry")) on the target host ([destination](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendestination_glosry.htm "Glossary Entry")) at the next COMMIT WORK. The current program does not wait for the function modules to finish processing.

Modification 2

Asynchronous RFC
Normal [remote function calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenremote_function_call_glosry.htm "Glossary Entry") (calls using CALL FUNCTION .... DESTINATION ...) only enable an ABAP program to communicate with ABAP programs running in the background. This means that a program called in this way cannot interact with the user.
The calling program can be a dialog program and display a [screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") to the user, however this screen is always inactive.
The following call starts an ABAP function module in a new session for parallel processing:
[CALL FUNCTION ... STARTING NEW TASK ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_starting.htm)

The addition DESTINATION IN GROUP ... allows automatic load balancing within a group of application servers.

The addition DESTINATION dest enables parallel processing in a remote system.

Unlike in a normal function module call, the caller carries on processing immediately as soon as the function module (either local or remote) has been started (asynchronous call).
The called function module can now, for example, use CALL SCREEN ... to display a dynpro and interact with the user.

The command [WAIT UNTIL condition *\[*UP TO n SECONDS*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwait_until.htm) makes it possible to wait for the confirmation of an asynchronously called function module (this also requires the addition PERFORMING form ON END OF TASK. WAIT must be executed in the same [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Modification 3

Authorization checks when accessing function groups using RFC
If the [profile parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") auth/rfc\_authority\_check = 1 is set, the system checks authorization
against [authorization object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_RFC for the function group before calling the function.
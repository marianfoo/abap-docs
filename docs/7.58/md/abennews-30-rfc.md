  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 3.0](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-30.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%2C%20Remote%20Function%20Call%20in%20ABAP%20Release%203.0%2C%20ABENNEWS-30-RFC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

RFC, Remote Function Call in ABAP Release 3.0

[1\. Transactional RFC](#!ABAP_MODIFICATION_1@1@)
[2\. Asynchronous RFC](#!ABAP_MODIFICATION_2@2@)
[3\. Authorization Checks when Accessing Function Pools Using RFC](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Transactional RFC

CALL FUNCTION... DESTINATION ... can now also be called using the addition IN BACKGROUND TASK. The calls are collected and executed as a logical unit of work ([LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenluw_glosry.htm "Glossary Entry")) on the target host ([destination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_dest_glosry.htm "Glossary Entry")) at the next COMMIT WORK. The current program does not wait for the function modules to finish processing.

Modification 2   

Asynchronous RFC

Regular [remote function calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenremote_function_call_glosry.htm "Glossary Entry") (calls using CALL FUNCTION .... DESTINATION ...) only enable an ABAP program to communicate with ABAP programs running in the background. This means that a program called in this way cannot interact with the user.

The calling program can be a dialog program and display a [screen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") to the user, however this screen is always inactive.

The following call starts an ABAP function module in a new session for parallel processing:

[CALL FUNCTION ... STARTING NEW TASK ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_starting.htm)

The addition DESTINATION IN GROUP ... allows automatic load balancing within a group of application servers.

The addition DESTINATION dest enables parallel processing in a remote system.

Unlike in a regular function module call, the caller carries on processing immediately as soon as the function module (either local or remote) has been started (asynchronous call).

The called function module can now, for example, use CALL SCREEN ... to display a dynpro and interact with the user.

The statement [WAIT UNTIL condition *\[*UP TO n SECONDS*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_arfc.htm) makes it possible to wait for the confirmation of an asynchronously called function module (this also requires the addition PERFORMING form ON END OF TASK. WAIT must be executed in the same [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Modification 3   

Authorization Checks when Accessing Function Pools Using RFC

If the [profile parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") auth/rfc\_authority\_check is set, the system checks authorization against [authorization object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_RFC for the function pool before calling the function.
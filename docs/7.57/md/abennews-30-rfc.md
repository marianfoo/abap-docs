  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC, Remote Function Call in Release 3.0, ABENNEWS-30-RFC, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

RFC, Remote Function Call in Release 3.0

[1\. Transactional RFC](#!ABAP_MODIFICATION_1@1@)
[2\. Asynchronous RFC](#!ABAP_MODIFICATION_2@2@)
[3\. Authorization Checks when Accessing Function Pools Using RFC](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Transactional RFC
CALL FUNCTION... DESTINATION ... can now also be called using the addition IN BACKGROUND TASK. The calls are collected and executed as a logical unit of work ([LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry")) on the target host ([destination](javascript:call_link\('abenrfc_dest_glosry.htm'\) "Glossary Entry")) at the next COMMIT WORK. The current program does not wait for the function modules to finish processing.

Modification 2   

Asynchronous RFC
Regular [remote function calls](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry") (calls using CALL FUNCTION .... DESTINATION ...) only enable an ABAP program to communicate with ABAP programs running in the background. This means that a program called in this way cannot interact with the user.
The calling program can be a dialog program and display a [screen](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") to the user, however this screen is always inactive.
The following call starts an ABAP function module in a new session for parallel processing:
[CALL FUNCTION ... STARTING NEW TASK ...](javascript:call_link\('abapcall_function_starting.htm'\))

The addition DESTINATION IN GROUP ... allows automatic load balancing within a group of application servers.

The addition DESTINATION dest enables parallel processing in a remote system.

Unlike in a regular function module call, the caller carries on processing immediately as soon as the function module (either local or remote) has been started (asynchronous call).
The called function module can now, for example, use CALL SCREEN ... to display a dynpro and interact with the user.

The statement [WAIT UNTIL condition *\[*UP TO n SECONDS*\]*](javascript:call_link\('abapwait_arfc.htm'\)) makes it possible to wait for the confirmation of an asynchronously called function module (this also requires the addition PERFORMING form ON END OF TASK. WAIT must be executed in the same [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Modification 3   

Authorization Checks when Accessing Function Pools Using RFC
If the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") auth/rfc\_authority\_check = 1 is set, the system checks authorization
against [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_RFC for the function pool before calling the function.
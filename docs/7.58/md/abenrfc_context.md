  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Session%2C%20ABENRFC_CONTEXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Session

Every remote call of a function module using an RFC interface defines an [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") as a dedicated [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") in the target system.

The logon data of an RFC session is defined during the definition of an [RFC destination](javascript:call_link\('abenrfc_destination.htm'\)) in transaction SM59. If no values are defined for the [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry"), the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry"), or the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") in this definition, they are filled implicitly when the session is loaded for the first time with the user name (sy-uname), the client (sy-mandt), and the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") (sy-langu) of the calling session.

The function pool of the function module is loaded into an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the RFC session and remains there, so that multiple calls of function modules of the same [RFC destination](javascript:call_link\('abenrfc_dest_glosry.htm'\) "Glossary Entry") and the same function pool share the global data of this function group. When functions are called in an external non-ABAP system, the RFC Library API simulates this behavior. A connection and its RFC session are preserved until it is explicitly closed, or until the calling program is finished. The function module RFC\_CONNECTION\_CLOSE or API functions RfcAbort and RfcClose are used to explicitly close a connection.

Hint

It should be noted that when the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") is passed from the current session, the logon language of the session is not used, but the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry"), which, unlike the logon language, can be affected by the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). This applies particularly to the destination NONE and SELF and therefore also to the [asynchronous remote function call](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry") without a specified destination.

Executable Example

[Implicit Logon Data in RFC](javascript:call_link\('abenrfc_logon_data_abexa.htm'\)).
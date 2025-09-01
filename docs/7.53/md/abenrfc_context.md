  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [RFC Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

RFC session

Every remote call of a function module using an RFC interface defines an [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") as a dedicated [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") in the target system.

The logon data of an RFC session is defined during the definition of an [RFC destination](javascript:call_link\('abenrfc_destination.htm'\)) in transaction SM59. If no values are defined for the [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry"), the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry"), or the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") in this definition, these are supplied implicitly when the session is loaded for the first time, with the user name (sy-uname), the client (sy-mandt), and the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") (sy-langu) of the calling session.

The function group of the function module is loaded into an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the RFC session and is persisted there, so that when function modules with the same [RFC destination](javascript:call_link\('abendestination_glosry.htm'\) "Glossary Entry") and function group are called repeatedly, the global data belonging to this function group can all be accessed at the same time. When functions are called in an external system, the RFC Library API simulates this behavior. A connection and its RFC session is persisted until it is explicitly closed, or until the calling program is finished. The function module RFC\_CONNECTION\_CLOSE or API functions RfcAbort and RfcClose are used to explicitly close a connection.

Note

Note that when the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") is passed from the current session, it is not the logon language of the session that is used, but the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry"), which (unlike the logon language) can be influenced by the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). This applies in particular to the destination "NONE" and also to an [asynchronous remote function call](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry") without a specified destination.

Executable Example

[Implicit Logon Data in RFC](javascript:call_link\('abenrfc_logon_data_abexa.htm'\)).
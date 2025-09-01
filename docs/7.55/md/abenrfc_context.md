  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_intro_oview.htm) → 

RFC - Session

Every remote call of a function module using an RFC interface defines an [RFC session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_session_glosry.htm "Glossary Entry") as a dedicated [user session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_session_glosry.htm "Glossary Entry") in the target system.

The logon data of an RFC session is defined during the definition of an [RFC destination](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_destination.htm) in transaction SM59. If no values are defined for the [user name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_name_glosry.htm "Glossary Entry"), the [client](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_glosry.htm "Glossary Entry"), or the [logon language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogon_language_glosry.htm "Glossary Entry") in this definition, these are supplied implicitly when the session is loaded for the first time, with the user name (sy-uname), the client (sy-mandt), and the [text environment language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_env_langu_glosry.htm "Glossary Entry") (sy-langu) of the calling session.

The function pool of the function module is loaded into an [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the RFC session and is persisted there, so that when function modules with the same [RFC destination](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_dest_glosry.htm "Glossary Entry") and function pool are called repeatedly, the global data belonging to this function pool can all be accessed at the same time. When functions are called in an external system, the RFC Library API simulates this behavior. A connection and its RFC session is persisted until it is explicitly closed, or until the calling program is finished. The function module RFC\_CONNECTION\_CLOSE or API functions RfcAbort and RfcClose are used to explicitly close a connection.

Hint

Note that when the [logon language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogon_language_glosry.htm "Glossary Entry") is passed from the current session, it is not the logon language of the session that is used, but the [text environment language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_env_langu_glosry.htm "Glossary Entry"), which (unlike the logon language) can be affected by the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_locale.htm). This applies in particular to the destination "NONE" and also to an [asynchronous remote function call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") without a specified destination.

Executable Example

[Implicit Logon Data in RFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_logon_data_abexa.htm).
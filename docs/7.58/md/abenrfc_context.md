  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_intro_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Session%2C%20ABENRFC_CONTEXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Session

Every remote call of a function module using an RFC interface defines an [RFC session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_session_glosry.htm "Glossary Entry") as a dedicated [user session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_session_glosry.htm "Glossary Entry") in the target system.

The logon data of an RFC session is defined during the definition of an [RFC destination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_destination.htm) in transaction SM59. If no values are defined for the [user name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_name_glosry.htm "Glossary Entry"), the [client](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_glosry.htm "Glossary Entry"), or the [logon language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogon_language_glosry.htm "Glossary Entry") in this definition, they are filled implicitly when the session is loaded for the first time with the user name (sy-uname), the client (sy-mandt), and the [text environment language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_env_langu_glosry.htm "Glossary Entry") (sy-langu) of the calling session.

The function pool of the function module is loaded into an [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the RFC session and remains there, so that multiple calls of function modules of the same [RFC destination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_dest_glosry.htm "Glossary Entry") and the same function pool share the global data of this function group. When functions are called in an external non-ABAP system, the RFC Library API simulates this behavior. A connection and its RFC session are preserved until it is explicitly closed, or until the calling program is finished. The function module RFC\_CONNECTION\_CLOSE or API functions RfcAbort and RfcClose are used to explicitly close a connection.

Hint

It should be noted that when the [logon language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogon_language_glosry.htm "Glossary Entry") is passed from the current session, the logon language of the session is not used, but the [text environment language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_env_langu_glosry.htm "Glossary Entry"), which, unlike the logon language, can be affected by the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locale.htm). This applies particularly to the destination NONE and SELF and therefore also to the [asynchronous remote function call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") without a specified destination.

Executable Example

[Implicit Logon Data in RFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_logon_data_abexa.htm).
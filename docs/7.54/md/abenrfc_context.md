---
title: "RFC session"
description: |
  Every remote call of a function module using an RFC interface defines an RFC session(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_session_glosry.htm 'Glossary Entry') as a dedicated user session(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_session_glo
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_context.htm"
abapFile: "abenrfc_context.htm"
keywords: ["do", "if", "try", "data", "abenrfc", "context"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc.htm) →  [RFC Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_intro_oview.htm) → 

RFC session

Every remote call of a function module using an RFC interface defines an [RFC session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_session_glosry.htm "Glossary Entry") as a dedicated [user session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_session_glosry.htm "Glossary Entry") in the target system.

The logon data of an RFC session is defined during the definition of an [RFC destination](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_destination.htm) in transaction SM59. If no values are defined for the [user name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_name_glosry.htm "Glossary Entry"), the [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry"), or the [logon language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_language_glosry.htm "Glossary Entry") in this definition, these are supplied implicitly when the session is loaded for the first time, with the user name (sy-uname), the client (sy-mandt), and the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") (sy-langu) of the calling session.

The function group of the function module is loaded into an [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the RFC session and is persisted there, so that when function modules with the same [RFC destination](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendestination_glosry.htm "Glossary Entry") and function group are called repeatedly, the global data belonging to this function group can all be accessed at the same time. When functions are called in an external system, the RFC Library API simulates this behavior. A connection and its RFC session is persisted until it is explicitly closed, or until the calling program is finished. The function module RFC\_CONNECTION\_CLOSE or API functions RfcAbort and RfcClose are used to explicitly close a connection.

Note

Note that when the [logon language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_language_glosry.htm "Glossary Entry") is passed from the current session, it is not the logon language of the session that is used, but the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry"), which (unlike the logon language) can be influenced by the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_locale.htm). This applies in particular to the destination "NONE" and also to an [asynchronous remote function call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") without a specified destination.

Executable Example

[Implicit Logon Data in RFC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_logon_data_abexa.htm).
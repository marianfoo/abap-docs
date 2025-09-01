---
title: "User Sessions"
description: |
  Each execution of an ABAP program takes place in an internal session(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm 'Glossary Entry') in an ABAP session(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm 'Glossary En
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_sessions.htm"
abapFile: "abenuser_sessions.htm"
keywords: ["select", "update", "do", "if", "try", "method", "class", "data", "types", "abenuser", "sessions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_oview.htm) →  [ABAP Programs on the AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenorganization_of_modules.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: User Sessions, ABENUSER_SESSIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

User Sessions

Each execution of an ABAP program takes place in an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") in an [ABAP session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm "Glossary Entry") within an [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry") [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry"). For this, at least one ABAP session is open in each user session.

A user session is opened whenever an [ABAP user](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_user_glosry.htm "Glossary Entry") [logs on](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_glosry.htm "Glossary Entry") to an [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"). Here, the following fixed properties of the user session are defined:

-   [User name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_name_glosry.htm "Glossary Entry")
    
    The user name is assigned a [user master record](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_master_record_glosry.htm "Glossary Entry") and [authorizations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_glosry.htm "Glossary Entry") that affect the behavior of an ABAP program. The current user name is returned by the method GET\_USER\_NAME of the class CL\_ABAP\_SYST and is available in the [system field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uname.
    
-   [Client ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_identifier_glosry.htm "Glossary Entry")
    
    The client ID determines the current [client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_glosry.htm "Glossary Entry"). When database content is accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"), [implicit client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_client_handling.htm) is used by default where only the data of the current client is accessed. The current client is returned by the method GET\_CLIENT of the class CL\_ABAP\_SYST and is available in the [system field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-mandt.
    
-   [Logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry")
    
    The logon language determines the access to certain text repositories and is also the [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry") by default. The current logon language is returned by the method GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST. The [system field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-langu, on the other hand, contains the text environment language of the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"), which can also be set to a different value.
    

There are different types of user sessions in which different rules and restrictions apply when ABAP programs are executed:

-   [Dialog sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_session_glosry.htm "Glossary Entry")
    
    Dialog sessions are used for [dialog processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_processing_glosry.htm "Glossary Entry") with the [SAP GUI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gui_glosry.htm "Glossary Entry"). The ABAP programs are controlled by classic [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") and their special forms, [selection screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") and classic [lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclassic_list_glosry.htm "Glossary Entry").
    
-   [Background sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_session_glosry.htm "Glossary Entry")
    
    Background sessions are used for [background processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), namely the execution of ABAP programs in the background without user interaction.
    
-   [Update sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_session_glosry.htm "Glossary Entry")
    
    Update sessions are used for classic non-local [updates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_glosry.htm "Glossary Entry"), namely the execution of registered [update function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") in a dedicated work process.
    
-   [RFC sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_session_glosry.htm "Glossary Entry")
    
    RFC sessions are used for [RFC processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), namely the execution of remotely called function modules ([RFMs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfm_glosry.htm "Glossary Entry")).
    
-   [ICF sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf_session_glosry.htm "Glossary Entry")
    
    ICF sessions are used for [ICF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf_processing_glosry.htm "Glossary Entry") processing, namely the processing of HTTP/HTTPS or SMTP queries to the AS ABAP in a handler class.
    
-   [APC sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_session_glosry.htm "Glossary Entry")
    
    APC sessions are used for [APC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_processing_glosry.htm "Glossary Entry") processing, namely the processing of WebSocket or TCP queries to the AS ABAP in a handler class.
    
-   [ABAP daemon sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry")
    
    ABAP daemon sessions are used for [ABAP daemon processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry"), namely the execution of an [ABAP daemon](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_glosry.htm "Glossary Entry") that is automatically restarted after a program termination.
    

The [user memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_memory_glosry.htm "Glossary Entry") is assigned a user session as a dedicated memory area for [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry") and an [ABAP daemon memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") as a subarea.

Hint

From a user session, it is possible to programmatically open further user sessions on the same or another AS instance. For example:

-   A [remote function call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenremote_function_call_glosry.htm "Glossary Entry") with the destination NONE or SELF opens a user session on the same AS instance.
-   Calls of [update modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_module_glosry.htm "Glossary Entry") using [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm) or execution of executable programs in [background programming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm "Glossary Entry") open separate user sessions.
-   ICF and APC clients can address the current or another AS instance as ICF or APC servers and thus open new user sessions.
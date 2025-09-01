  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_oview.htm) →  [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenorganization_of_modules.htm) → 

User Sessions

Each time an ABAP program is executed, it is in an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") in an [ABAP session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry"), which itself is in a [user session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_session_glosry.htm "Glossary Entry"). Here, at least one ABAP session is open in every user session.

A user session is opened whenever a [user](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_glosry.htm "Glossary Entry") [logs on](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogon_glosry.htm "Glossary Entry") to [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"). Here, the following fixed properties of the user session are defined:

-   [User name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_name_glosry.htm "Glossary Entry")

The user name is assigned a [user master record](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_master_record_glosry.htm "Glossary Entry") and [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") that modify the behavior of an ABAP program. The current user name is returned by the method GET\_USER\_NAME of the class CL\_ABAP\_SYST and can be fetched from the [system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uname.

-   [Client ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_identifier_glosry.htm "Glossary Entry")

The client ID determines the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry"). When database content is accessed using [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") takes place by default and only the data of the current client is accessed. The current client is returned by the method GET\_CLIENT of the class CL\_ABAP\_SYST and can be fetched from the [system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-mandt.

-   [Logon language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogon_language_glosry.htm "Glossary Entry")

The logon language determines how various text repositories are accessed and is the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") by default. The current logon language is returned by the method GET\_GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST. The [system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-langu, on the other hand, contains the text environment language of the current [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"), which can be set to a different value.

There are various types of user sessions and various rules and restrictions apply when ABAP programs are executed:

-   [Dialog sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_session_glosry.htm "Glossary Entry")

Dialog sessions are used for [dialog processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_processing_glosry.htm "Glossary Entry") with [SAP GUI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_gui_glosry.htm "Glossary Entry"). The ABAP programs are operated using classic [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") and their special variants, [selection screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") and classic [lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_glosry.htm "Glossary Entry").

-   [Background sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_session_glosry.htm "Glossary Entry")

Background sessions are used for [background processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), namely the execution of ABAP programs in the background without user interaction.

-   [Update sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry")

Update sessions are used for classic (non-local) [updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_glosry.htm "Glossary Entry"), namely the execution of registered [update function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") in a dedicated work process.

-   [RFC sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_session_glosry.htm "Glossary Entry")

RFC sessions are used for [RFC processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), namely the execution of remotely called function modules ([RFMs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfm_glosry.htm "Glossary Entry")).

-   [ICF sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_session_glosry.htm "Glossary Entry")

ICF sessions are used for [ICF processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_processing_glosry.htm "Glossary Entry"), namely the processing of HTTP/HTTPS queries or SMTP queries sent to AS ABAP in handler class.

-   [APC sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_session_glosry.htm "Glossary Entry")

APC sessions are used for [APC processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_processing_glosry.htm "Glossary Entry"), namely the processing of WebSocket queries or TCP queries sent to AS ABAP in handler class.

-   [ABAP Daemon sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry")

ABAP Daemon sessions are used for [ABAP Daemon processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry"), namely whenever an [ABAP Daemon](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_glosry.htm "Glossary Entry") is executed that is restarted after a program termination.

The [user memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_memory_glosry.htm "Glossary Entry") is assigned to a user session as a dedicated memory area for [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") and is assigned the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") as a subarea.

Note

From a user session, it is possible to open further user sessions on the same application server or another server in a program-driven way. For example:

-   A [remote function call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenremote_function_call_glosry.htm "Glossary Entry") with the destination "NONE" opens a user session on the same application server.

-   Calls of [update modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_module_glosry.htm "Glossary Entry") using [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm) or executions of executable programs in [background programming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbackround_processing_glosry.htm "Glossary Entry") open separate user sessions.

-   ICF clients and APC clients can address the current application server or other servers as ICF servers or APC servers and hence open new user sessions.
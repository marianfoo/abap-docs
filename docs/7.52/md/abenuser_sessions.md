  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) →  [ABAP Programs in AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)) → 

User Sessions

Each time an ABAP program is executed, it is in an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") in an [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry"), which itself is in a [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry"). Here, at least one ABAP session is open in every user session.

A user session is opened whenever a [user](javascript:call_link\('abenuser_glosry.htm'\) "Glossary Entry") [logs on](javascript:call_link\('abenlogon_glosry.htm'\) "Glossary Entry") to [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). Here, the following fixed properties of the user session are defined:

-   [User name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry")

The user name is assigned a [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") and [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") that modify the behavior of an ABAP program. The current user name is returned by the method GET\_USER\_NAME of the class CL\_ABAP\_SYST and can be fetched from the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-uname.

-   [Client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry")

The client ID determines the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry"). When database content is accessed using [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") takes place by default and only the data of the current client is accessed. The current client is returned by the method GET\_CLIENT of the class CL\_ABAP\_SYST and can be fetched from the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-mandt.

-   [Logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry")

The logon language determines how various text repositories are accessed and is the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") by default. The current logon language is returned by the method GET\_GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST. The [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-langu, on the other hand, contains the text environment language of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), which can be set to a different value.

There are various types of user sessions and various rules and restrictions apply when ABAP programs are executed:

-   [Dialog sessions](javascript:call_link\('abendialog_session_glosry.htm'\) "Glossary Entry")

Dialog sessions are used for [dialog processing](javascript:call_link\('abendialog_processing_glosry.htm'\) "Glossary Entry") with [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry"). The ABAP programs are operated using classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") and their special variants, [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and classic [lists](javascript:call_link\('abenlist_glosry.htm'\) "Glossary Entry").

-   [Background sessions](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry")

Background sessions are used for [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry"), namely the execution of ABAP programs in the background without user interaction.

-   [Update sessions](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry")

Update sessions are used for classic (non-local) [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), namely the execution of registered [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") in a dedicated work process.

-   [RFC sessions](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry")

RFC sessions are used for [RFC processing](javascript:call_link\('abenrfc_processing_glosry.htm'\) "Glossary Entry"), namely the execution of remotely called function modules ([RFMs](javascript:call_link\('abenrfm_glosry.htm'\) "Glossary Entry")).

-   [ICF sessions](javascript:call_link\('abenicf_session_glosry.htm'\) "Glossary Entry")

ICF sessions are used for [ICF processing](javascript:call_link\('abenicf_processing_glosry.htm'\) "Glossary Entry"), namely the processing of HTTP/HTTPS queries or SMTP queries sent to AS ABAP in handler class.

-   [APC sessions](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry")

APC sessions are used for [APC processing](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry"), namely the processing of WebSocket queries or TCP queries sent to AS ABAP in handler class.

-   [ABAP Daemon sessions](javascript:call_link\('abenabap_daemon_session_glosry.htm'\) "Glossary Entry")

ABAP Daemon sessions are used for [ABAP Daemon processing](javascript:call_link\('abenabap_daemon_processing_glosry.htm'\) "Glossary Entry"), namely whenever an [ABAP Daemon](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") is executed that is restarted after a program termination.

The [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry") is assigned to a user session as a dedicated memory area for [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry") and is assigned the [ABAP Daemon memory](javascript:call_link\('abenabap_daemon_memory_glosry.htm'\) "Glossary Entry") as a subarea.

Note

From a user session, it is possible to open further user sessions on the same application server or another server in a program-driven way. For example:

-   A [remote function call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry") with the destination "NONE" opens a user session on the same application server.

-   Calls of [update modules](javascript:call_link\('abenupdate_module_glosry.htm'\) "Glossary Entry") using [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or executions of executable programs in [background programming](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry") open separate user sessions.

-   ICF clients and APC clients can address the current application server or other servers as ICF servers or APC servers and hence open new user sessions.
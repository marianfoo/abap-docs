  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) →  [ABAP Programs on the AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20User%20Sessions%2C%20ABENUSER_SESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

User Sessions

Each execution of an ABAP program takes place in an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") in an [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") within an [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry"). For this, at least one ABAP session is open in each user session.

A user session is opened whenever an [ABAP user](javascript:call_link\('abenabap_user_glosry.htm'\) "Glossary Entry") [logs on](javascript:call_link\('abenlogon_glosry.htm'\) "Glossary Entry") to an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). Here, the following fixed properties of the user session are defined:

-   [User name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry")
    
    The user name is assigned a [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") and [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") that affect the behavior of an ABAP program. The current user name is returned by the method GET\_USER\_NAME of the class CL\_ABAP\_SYST and is available in the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-uname.
    
-   [Client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry")
    
    The client ID determines the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry"). When database content is accessed using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) is used by default where only the data of the current client is accessed. The current client is returned by the method GET\_CLIENT of the class CL\_ABAP\_SYST and is available in the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-mandt.
    
-   [Logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry")
    
    The logon language determines the access to certain text repositories and is also the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") by default. The current logon language is returned by the method GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST. The [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-langu, on the other hand, contains the text environment language of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), which can also be set to a different value.
    

There are different types of user sessions in which different rules and restrictions apply when ABAP programs are executed:

-   [Dialog sessions](javascript:call_link\('abendialog_session_glosry.htm'\) "Glossary Entry")
    
    Dialog sessions are used for [dialog processing](javascript:call_link\('abendialog_processing_glosry.htm'\) "Glossary Entry") with the [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry"). The ABAP programs are controlled by classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") and their special forms, [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and classic [lists](javascript:call_link\('abenclassic_list_glosry.htm'\) "Glossary Entry").
    
-   [Background sessions](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry")
    
    Background sessions are used for [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry"), namely the execution of ABAP programs in the background without user interaction.
    
-   [Update sessions](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry")
    
    Update sessions are used for classic non-local [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), namely the execution of registered [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") in a dedicated work process.
    
-   [RFC sessions](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry")
    
    RFC sessions are used for [RFC processing](javascript:call_link\('abenrfc_processing_glosry.htm'\) "Glossary Entry"), namely the execution of remotely called function modules ([RFMs](javascript:call_link\('abenrfm_glosry.htm'\) "Glossary Entry")).
    
-   [ICF sessions](javascript:call_link\('abenicf_session_glosry.htm'\) "Glossary Entry")
    
    ICF sessions are used for [ICF](javascript:call_link\('abenicf_processing_glosry.htm'\) "Glossary Entry") processing, namely the processing of HTTP/HTTPS or SMTP queries to the AS ABAP in a handler class.
    
-   [APC sessions](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry")
    
    APC sessions are used for [APC](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry") processing, namely the processing of WebSocket or TCP queries to the AS ABAP in a handler class.
    
-   [ABAP daemon sessions](javascript:call_link\('abenabap_daemon_session_glosry.htm'\) "Glossary Entry")
    
    ABAP daemon sessions are used for [ABAP daemon processing](javascript:call_link\('abenabap_daemon_processing_glosry.htm'\) "Glossary Entry"), namely the execution of an [ABAP daemon](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") that is automatically restarted after a program termination.
    

The [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry") is assigned a user session as a dedicated memory area for [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry") and an [ABAP daemon memory](javascript:call_link\('abenabap_daemon_memory_glosry.htm'\) "Glossary Entry") as a subarea.

Hint

From a user session, it is possible to programmatically open further user sessions on the same or another AS instance. For example:

-   A [remote function call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry") with the destination NONE or SELF opens a user session on the same AS instance.
-   Calls of [update modules](javascript:call_link\('abenupdate_module_glosry.htm'\) "Glossary Entry") using [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or execution of executable programs in [background programming](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry") open separate user sessions.
-   ICF and APC clients can address the current or another AS instance as ICF or APC servers and thus open new user sessions.
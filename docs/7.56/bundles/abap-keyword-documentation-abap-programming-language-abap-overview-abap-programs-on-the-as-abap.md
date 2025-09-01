# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP - Overview / ABAP Programs on the AS ABAP

Included pages: 4


### abenorganization_of_modules.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) → 

ABAP Programs on the AS ABAP

ABAP programs are executed on the [Application Server ABAP (AS ABAP)](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") of an [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry") implementing an [ABAP platform](javascript:call_link\('abenabap_platform_glosry.htm'\) "Glossary Entry"). The figure below shows a highly simplified representation of the AS ABAP as part of an ABAP system.

![Figure](bap_platform.gif)

The [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") represents the application layer of the ABAP system. The AS ABAP is identified by a [system ID](javascript:call_link\('abensystem_id_glosry.htm'\) "Glossary Entry"), which is also the name of the entire ABAP system. Users can log on to the AS ABAP using a [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry"). The most important components of an AS ABAP for ABAP program execution are:

-   AS instance
    
    The actual ABAP program execution takes place in [AS instances (application server instances)](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"). One or more AS instances can be instantiated for an AS ABAP. Multiple AS instances are usually distributed across several [host computers](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"). The AS instances communicate with each other using a [message server](javascript:call_link\('abenmessage_server_glosry.htm'\) "Glossary Entry") that exists only once for each AS ABAP.
    
-   Work processes
    
    Each AS instance has [work processes](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") to execute ABAP programs. There are different types of work processes for different applications: dialog, enqueue, background, spool, and update work processes. For the entire runtime of an AS instance, each work process is logged on to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") as a [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") using a [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry"). This user is assigned the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") that represents the [database layer](javascript:call_link\('abendatabase_layer_glosry.htm'\) "Glossary Entry") of an [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry"). The ABAP database schema stores both [system programs](javascript:call_link\('abensystem_program_glosry.htm'\) "Glossary Entry") and [system tables](javascript:call_link\('abensystem_table_glosry.htm'\) "Glossary Entry"), as well as [application programs](javascript:call_link\('abenapplication_program_glosry.htm'\) "Glossary Entry") and [application tables](javascript:call_link\('abenapplication_table_glosry.htm'\) "Glossary Entry").
    
-   Communication components
    
    The communication components connect the AS instances to the [presentation layer](javascript:call_link\('abenpresentation_layer_glosry.htm'\) "Glossary Entry") of the [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry"), or to other systems that themselves can be another AS ABAP or external systems. Examples of communication components are:
    
    -   The [ICM](javascript:call_link\('abenicm_glosry.htm'\) "Glossary Entry") for linking to browser-based [user interfaces](javascript:call_link\('abenuser_interface_glosry.htm'\) "Glossary Entry") ([SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry"), [Web Dynpro](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry")) and to the Internet.
    -   The [RFC interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry") for linking to other systems.
    -   A dispatcher for linking to [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry").
    
    There are different protocols for communication, such as HTTP, HTTPS, TCP, or SAP's RFC protocol.
    

For more information, see Application Server Infrastructure - ABAP.

ABAP program execution is organized in [sessions](javascript:call_link\('abensession_glosry.htm'\) "Glossary Entry"), which can access different memory areas:

-   [Sessions and Memory Areas](javascript:call_link\('abenmemory_organization.htm'\))
-   [User Sessions](javascript:call_link\('abenuser_sessions.htm'\))
-   [Programs in the Internal Session](javascript:call_link\('abeninternal_session.htm'\))

Continue
[Sessions and Memory Areas](javascript:call_link\('abenmemory_organization.htm'\))
[User Sessions](javascript:call_link\('abenuser_sessions.htm'\))
[Programs in the Internal Session](javascript:call_link\('abeninternal_session.htm'\))


### abenmemory_organization.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) →  [ABAP Programs on the AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)) → 

Sessions and Memory Areas

This section describes the [sessions](javascript:call_link\('abensession_glosry.htm'\) "Glossary Entry") of an AS ABAP in which ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detailed description, see the documentation Memory Management in SAP Help Portal.

The following figure shows the general organization of sessions for ABAP programs and their memory areas up to the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") level:

![Figure](bdoc_memory1.gif)

-   [AS instance](#@@ITOC@@ABENMEMORY_ORGANIZATION_1)
-   [User Session](#@@ITOC@@ABENMEMORY_ORGANIZATION_2)
-   [ABAP Session](#@@ITOC@@ABENMEMORY_ORGANIZATION_3)
-   [Internal Session](#@@ITOC@@ABENMEMORY_ORGANIZATION_4)

AS instance

An [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") can be distributed across multiple [AS instances](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"). If an AS ABAP is implemented using multiple AS instances, they are usually instantiated on different [host computers](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"), which do not have to have the same operating system. However, multiple AS instances of one or more AS ABAP can also be instantiated on the same host computer. AS instances communicate with the [presentation layer](javascript:call_link\('abenpresentation_layer_glosry.htm'\) "Glossary Entry"), the [database layer](javascript:call_link\('abendatabase_layer_glosry.htm'\) "Glossary Entry"), and with each other using the [message server](javascript:call_link\('abenmessage_server_glosry.htm'\) "Glossary Entry"). The most important components of an AS instance are its [work processes](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry"), the number and [type](javascript:call_link\('abentype_glosry.htm'\) "Glossary Entry") of which are determined when the AS ABAP is started. An [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") is executed by a suitable AS instance work process.

The transaction SM51 shows an overview of the AS instances of the current AS ABAP and on which host computers they are instantiated. The name of the current AS instance can be determined in an ABAP Program using the method GET\_INSTANCE\_NAME of the system class CL\_ABAP\_SYST. This name has the form hostname\_sysid\_instnr. Here, hostname is the name of the host computer of the AS instance, sysid is the name of the AS ABAP, and instnr is the instance number of the AS instance. The network name of the host computer on which the current AS instance is instantiated can be found in the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-host.

Every AS instance has access to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the AS ABAP. Every AS instance has its own [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"). The ABAP runtime framework uses the shared memory for programs, program data, and buffers (for example, during [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry")). ABAP programs can store [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") and [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in the shared memory.

Hint

The shared memory is frequently used and therefore may be a sparse resource, which can result in bottlenecks when explicitly storing data from ABAP programs.

Example

Gets the name of the current AS instance.

cl\_demo\_output=>display( cl\_abap\_syst=>get\_instance\_name( ) ).

User Session

Logging on to an AS instance opens a [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry"). Logons take place using [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry"), the [RFC interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry"), or [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") (including [APC](javascript:call_link\('abenapc_glosry.htm'\) "Glossary Entry")). A user session is assigned a separate memory area, the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry"), which can be used as follows in ABAP programs:

-   The user memory stores [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry") that can be accessed using the statements [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)) and [GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\)).
-   The [ABAP Daemon Memory](javascript:call_link\('abenabap_daemon_memory_glosry.htm'\) "Glossary Entry") is a subarea of the user memory in which [ABAP daemons](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") can store context information in [PCP](javascript:call_link\('abenpcp_glosry.htm'\) "Glossary Entry") format.

The maximum number of user sessions is determined by the profile parameter rdisp/tm\_max\_no. The profile parameter rdisp/rfc\_max\_login determines which percentage of the sessions can be opened using the RFC interface.

For more information, see [User Sessions](javascript:call_link\('abenuser_sessions.htm'\)).

ABAP Session

An [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") is opened for each user session. Each ABAP session is assigned its own memory area [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry"), in which [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") can be stored. The programs of a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry") share access to these clusters and the data is retained for as long as the [top level transaction](javascript:call_link\('abentop_level_transaction_glosry.htm'\) "Glossary Entry") of the call sequence remains. The [SAP Easy Access](javascript:call_link\('abensap_easy_access_glosry.htm'\) "Glossary Entry") program does not work as a top level transaction for the ABAP memory.

Additional ABAP sessions for a user session can be opened as follows:

-   Enter a transaction code after "/o" in the command field in the [toolbar](javascript:call_link\('abensymbol_toolbar_glosry.htm'\) "Glossary Entry").
-   Call the function module TH\_CREATE\_MODE.
-   Call a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") during the processing of [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry"). In the RFC client, an additional ABAP session for communication with the SAP GUI is required.

A maximum of 16 ABAP sessions are possible per user session. The number of sessions that is actually possible for a system is determined by the profile parameter rdisp/max\_alt\_modes, whose default value is 16.

Hints

-   The [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") can be used to transfer data between the programs in a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry").
-   For logging and analysis purposes, each ABAP session has an [extended passport (EPP)](javascript:call_link\('abenepp.htm'\)) that contains constant values and that can be passed on to communication partners, such as other ABAP sessions or external interfaces, whereby modifiable values are set for the respective connection.

Internal Session

Each [call](javascript:call_link\('abenabap_program_call.htm'\)) of an ABAP program creates a new [internal session](javascript:call_link\('abeninternal_session.htm'\)), in which the called program is loaded.

An internal session contains a [session memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry") that is divided into the areas [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry") and [stack](javascript:call_link\('abenstack_glosry.htm'\) "Glossary Entry") from the perspective of an ABAP program. The modifiable [objects](javascript:call_link\('abenobject_glosry.htm'\) "Glossary Entry") of the program live there. The non-modifiable data of the program is stored in the [PXA](javascript:call_link\('abenpxa_glosry.htm'\) "Glossary Entry"). The session memory contains references to the required data in the PXA. From a technical perspective, the session memory and the global PXA are stored in the shared memory of the AS instance where they managed by the SAP Memory Management.

In an ABAP session, there can be a maximum of nine internal sessions that always belong to a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry"). Data from the ABAP memory is always assigned to a call sequence.

On 64-bit platforms, an internal session can theoretically require up to 4 TB of memory. The practical upper limit is usually below the theoretical limit, since the actual physically installed main memory is the maximum available and divided up among all users.

Further information about the way ABAP programs are organized in an internal session can be found in [Programs in the Internal Session](javascript:call_link\('abeninternal_session.htm'\)).

Hints

-   The available session memory is defined using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") described under Session Memory. It is also possible to define a percentage of the available memory as a limit, over which a [runtime warning](javascript:call_link\('abenruntime_warning_glosry.htm'\) "Glossary Entry") occurs.
-   Instances of classes, except for [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry"), are located in the internal session. It is therefore not possible to store references to objects in the ABAP memory.
-   On 32-bit platforms, that are not supported any more, the theoretical upper limit for the memory that an internal session could require was 4GB.
-   Class CL\_SESSION\_INFO returns information about the current session.

Example

Usage of CL\_SESSION\_INFO.

TRY.
    DATA(session\_info) = NEW cl\_session\_info( )->get\_info( ).
  CATCH cx\_ssi\_exception.
    ...
ENDTRY.


### abenuser_sessions.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) →  [ABAP Programs on the AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)) → 

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


### abeninternal_session.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) →  [ABAP Programs on the AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)) → 

Programs in the Internal Session

The following figure shows the organization of programs within an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of an [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") in a [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") of an [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry").

![Figure](bdoc_memory2.gif)

-   [Program Groups](#@@ITOC@@ABENINTERNAL_SESSION_1)
    -   [Main Program Group](#@@ITOC@@ABENINTERNAL_SESSION_2)
    -   [Additional Program Group](#@@ITOC@@ABENINTERNAL_SESSION_3)
    -   [Main Program of a Program Group](#@@ITOC@@ABENINTERNAL_SESSION_4)
    -   [Programs Loaded into a Program Group](#@@ITOC@@ABENINTERNAL_SESSION_5)
    -   [Data Objects](#@@ITOC@@ABENINTERNAL_SESSION_6)
    -   [Class Instances](#@@ITOC@@ABENINTERNAL_SESSION_7)
-   [Interface Work Areas](#@@ITOC@@ABENINTERNAL_SESSION_8)
-   [Dynpros, Lists, and GUI Statuses](#@@ITOC@@ABENINTERNAL_SESSION_9)

Program Groups

Multiple programs organized in program groups can be loaded into an internal session. Once an internal session is exited, it is closed. It is then no longer possible to access data and objects of this internal session.

Main Program Group

When an internal session is created by [calling an ABAP program](javascript:call_link\('abenabap_program_call.htm'\)) using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) or a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry"), the main program group is created and the called program is its main program. The entire internal session exists for as long as the main program of the main program group is being executed. This can be an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry"), or a [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry").

Additional Program Group

Each time a new [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or a new [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") is loaded by external use, an additional program group is created and the class pool or the function pool is the main program of the additional program group. An external usage is usually an access to components that are exposed by class pool or function group (these are the visible components of the global class or function module), however, can also be an access to local components, such as when a type is specified using [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"). An additional program group is preserved for the entire lifetime of the internal session.

Main Program of a Program Group

The first program loaded of a program group is the main program of this group. The main program of a main program group is the first program loaded into the internal session by a program call (this program is an executable program, module pool, or function pool). The main program of an additional program group is a class pool or a function pool for which the additional program group is created during its loading.

Programs Loaded into a Program Group

When programs that are not function pools or class pools are loaded by an external usage, they do not form additional program groups; instead they are loaded into the program group of the user. This happens, for example:

-   During the external call of subroutines that are defined in executable programs, module pools or subroutine pools
-   When using the dynpro statement [CALL SUBSCREEN sub\_area INCLUDING prog](javascript:call_link\('dynpcall.htm'\)), if the dynpro is not defined in a function pool
-   In dynamic access to a local data type or object type of an executable program, module pool, or a subroutine using [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry")
-   For statements such as [SET PF-STATUS OF PROGRAM](javascript:call_link\('abapset_pf-status_dynpro.htm'\)), if the program of the required component is not a function pool.

Hints

-   To assign a program to a program group, the [program-initiating statement](javascript:call_link\('abenprogram_init_statement_glosry.htm'\) "Glossary Entry") and not the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") is of importance. For example, if the statement [FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\)) is used in a subroutine pool instead of [PROGRAM](javascript:call_link\('abapprogram.htm'\)), the program creates an additional program group when it is loaded by external usage.
-   The assignment of an additional program to its program group is particularly important if procedures of this program are [called externally](javascript:call_link\('abenprogram_groups.htm'\)), since all the programs of a program group use the interface work areas, the dynpros, lists, and GUI status of the main program (see below for more information).

Data Objects

The [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") of a program, except for the [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"), belong exclusively to their program and are only visible there. A loaded program exists for as long as the internal session exists. After returning from a program, its data objects are retained and are available when a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") of the program is called again.

Class Instances

Objects as instances of classes can be used by all programs (and objects) of an internal session. An object exists for as long as there are users for and hence references to the object.

Hint

This means that references to objects of the internal session can be passed to externally called procedures.

Interface Work Areas

Data objects declared using [TABLES](javascript:call_link\('abaptables.htm'\)) or [DATA BEGIN*|*END OF COMMON PART ...](javascript:call_link\('abapdata_common.htm'\)) are [interface work areas](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"). They are only created once per program group and are shared by all programs of a program group together.

Hint

The assignment of a program to a program group, and thus the definition of the other programs with which it shares the interface work area, can depend on the usage sequence.

Dynpros, Lists, and GUI Statuses

Only the [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the main program of a program group can be called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)). After an internal session is loaded, these are the dynpros of the main program of the main program group. The main programs (function pools) of additional program groups can also call their own dynpros.

[Lists](javascript:call_link\('abenclassic_list_glosry.htm'\) "Glossary Entry") are always assigned to the current [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") and therefore also to the main program of the program group.

By default, [SET PF-STATUS](javascript:call_link\('abapset_pf-status_dynpro.htm'\)) is used to access the [GUI status](javascript:call_link\('abengui_status_glosry.htm'\) "Glossary Entry") of the main program of a program group and uses its data objects for dynamic texts.

All programs of a program group work with the dynpros, lists, and GUI status of the main program by default. A statement CALL SCREEN in an externally called subroutine, for example, never calls a dynpro of its own compilation unit. The dialog modules and list event blocks of the main program are executed.

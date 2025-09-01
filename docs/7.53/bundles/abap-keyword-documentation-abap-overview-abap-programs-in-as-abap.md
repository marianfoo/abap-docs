# ABAP Keyword Documentation / ABAP - Overview / ABAP Programs in AS ABAP

Included pages: 4


### abenorganization_of_modules.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) → 

ABAP Programs in AS ABAP

ABAP programs are executed on the [Application Server ABAP (AS ABAP)](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") of an [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry"). The following figure shows a simplified representation of the AS ABAP as part of an ABAP system.

![Figure](abap_platform.gif)

The [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") represents the application layer of the ABAP system. The AS ABAP is identified by a [system ID](javascript:call_link\('abensystem_id_glosry.htm'\) "Glossary Entry"), which is also the name of the entire ABAP system. Users can log on to the AS ABAP using a [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry"). The most important components of an AS ABAP for ABAP program execution are:

-   AS Instance

The ABAP program execution itself takes place in [AS Instances (application server instances)](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"). One or more AS Instances can be instantiated for an AS ABAP. Multiple AS Instances are usually distributed across several [host computers](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"). The AS Instances communicate with each other using a [message server](javascript:call_link\('abenmessage_server_glosry.htm'\) "Glossary Entry") (exactly one for each AS ABAP).

-   Work processes

Each AS Instance uses its [work processes](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") to execute ABAP programs. There are various types of work processes for different applications: dialog, enqueue, background, spool, and update work processes. During the entire runtime of an AS Instance, each work process is logged on to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") as a [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") using a [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry"). This user is assigned the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") that represents the [database layer](javascript:call_link\('abendatabase_layer_glosry.htm'\) "Glossary Entry") of an [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry"). [System programs](javascript:call_link\('abensystem_program_glosry.htm'\) "Glossary Entry"), and [system tables](javascript:call_link\('abensystem_table_glosry.htm'\) "Glossary Entry"), and also [application programs](javascript:call_link\('abenapplication_program_glosry.htm'\) "Glossary Entry") and [application tables](javascript:call_link\('abenapplication_table_glosry.htm'\) "Glossary Entry") are stored in the ABAP database schema.

-   Communication components

The communication components connect the AS Instances with the [presentation layer](javascript:call_link\('abenpresentation_layer_glosry.htm'\) "Glossary Entry") of the [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry"), or with other systems, which can be either another AS ABAP or external systems. The following are examples of communication components:

-   The [ICM](javascript:call_link\('abenicm_glosry.htm'\) "Glossary Entry") for linking to browser-based [user interfaces](javascript:call_link\('abenuser_interface_glosry.htm'\) "Glossary Entry") ([SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry"), [Web Dynpro](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry")) and the Internet.

-   The [RFC interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry") for linking to other systems.

-   A dispatcher for linking to [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry").

Various protocols are used for communication, such as HTTP, HTTPS, TCP, or SAP's RFC protocol.

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

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) →  [ABAP Programs in AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)) → 

Sessions and Memory Areas

This section describes the [sessions](javascript:call_link\('abensession_glosry.htm'\) "Glossary Entry") in AS ABAP where ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detailed description, see Documentation Memory Management in [SAP Help Portal](http://help.sap.com).

The following figure shows the general organization of sessions for ABAP programs and their memory areas up to the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") level:

![Figure](abdoc_memory1.gif)

-   [AS Instance](#abenmemory-organization-1--------user-session---@ITOC@@ABENMEMORY_ORGANIZATION_2)

-   [ABAP Session](#abenmemory-organization-3--------internal-session---@ITOC@@ABENMEMORY_ORGANIZATION_4)

AS Instance

An [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") can be distributed across multiple [AS Instances](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry")s. If an AS ABAP is implemented using multiple AS Instancess, they are usually exist as separate instances on multiple [host computers](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"), which do not have to have the same operating system. It is also possible, however, for multiple AS Instancess of one or more AS ABAPs to exist as instances on the same host computer. AS Instancess communicate with the [presentation layer](javascript:call_link\('abenpresentation_layer_glosry.htm'\) "Glossary Entry"), the [database layer](javascript:call_link\('abendatabase_layer_glosry.htm'\) "Glossary Entry"), and with each other using the [message server](javascript:call_link\('abenmessage_server_glosry.htm'\) "Glossary Entry"). The most important components of an AS Instance are its [work processes](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry"), the number and [type](javascript:call_link\('abentype_glosry.htm'\) "Glossary Entry") of which are determined when the AS ABAP is started. An [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") is executed by a suitable AS Instance work process.

The transaction SM51 shows an overview of the AS Instances of the current AS ABAP and which host computers host instances of it. In ABAP programs, the name of the current AS Instance can be identified using the method GET\_INSTANCE\_NAME of the system class CL\_ABAP\_SYST. This name has the form hostname\_sysid\_instnr. Here, hostname is the name of the host computer of the AS Instance, sysid is the name of the AS ABAP, and instnr is the instance number of the AS Instance. The network name of the host computer that hosts an instance of the current AS Instance can be found in the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-host.

Every AS Instance has access to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the AS ABAP. Every AS Instance has its own [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry")\- The ABAP runtime environment uses the shared memory for programs, program data, and buffers (for example, in [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry")). ABAP programs can store [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") and [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in the shared memory.

Note

The shared memory is frequently used and may therefore become a sparse resource, which can result in bottlenecks when explicitly storing data from ABAP programs.

Example

Gets the name of the current AS Instance.

cl\_demo\_output=>display( cl\_abap\_syst=>get\_instance\_name( ) ).

User Session

Logging on to an AS Instance opens a [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry"). Logons take place using [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry"), the [RFC interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry"), or [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") (including [APC](javascript:call_link\('abenapc_glosry.htm'\) "Glossary Entry")). A user session is assigned a standalone memory area, the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry"), which can be used as follows in ABAP programs:

-   The user memory stores [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry") that can be accessed using the statements [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)) and [GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\)).

-   The [ABAP Daemon Memory](javascript:call_link\('abenabap_daemon_memory_glosry.htm'\) "Glossary Entry") is a subarea of the user memory in which [ABAP Daemons](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry") can save context information in [PCP](javascript:call_link\('abenpcp_glosry.htm'\) "Glossary Entry") format.

The maximum number of user sessions is configured using the profile parameter rdisp/tm\_max\_no. The profile parameter rdisp/rfc\_max\_login determines which percentage of the sessions can be opened using the RFC interface.

For more information, see [User Sessions](javascript:call_link\('abenuser_sessions.htm'\)).

ABAP Session

An [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") is opened for each user session. Each ABAP session is assigned its own memory area of [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry"), in which [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") can be stored. The programs of a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry") share access to these clusters and the data is retained for as long as the [top level transaction](javascript:call_link\('abentop_level_transaction_glosry.htm'\) "Glossary Entry") of the call sequence. The [SAP Easy Access](javascript:call_link\('abensap_easy_access_glosry.htm'\) "Glossary Entry") program does not function as a top level transaction for the ABAP memory.

Further ABAP sessions for a user session can be opened as followed:

-   Enter a transaction code after "/o" in the command field in the [toolbar](javascript:call_link\('abensymbol_toolbar_glosry.htm'\) "Glossary Entry").

-   Call the function module TH\_CREATE\_MODE.

-   Call a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") when processing an [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry"). To do this, the RFC client requires an additional ABAP session for communication with SAP GUI.

A maximum of 16 ABAP sessions are possible per user session. The number of sessions actually possible for a system is determined by the profile parameter rdisp/max\_alt\_modes, whose default is 6.

Notes

-   The [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") can be used to pass data between the programs in a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry").

-   For logging and analysis, each ABAP session has an [Extended Passport (EPP)](javascript:call_link\('abenepp.htm'\)) that contains constant values. These values can be passed to communication partners such as further ABAP sessions or external interfaces (modifiable values are set for the connection in question).

Internal Session

Each [call](javascript:call_link\('abenabap_program_call.htm'\)) of an ABAP program creates a new [internal session](javascript:call_link\('abeninternal_session.htm'\)), in which the called program is loaded.

An internal session contains a [session memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry"), itself divided into the areas [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry") and [stack](javascript:call_link\('abenstack_glosry.htm'\) "Glossary Entry") (from the perspective of an ABAP program). This is where the modifiable [objects](javascript:call_link\('abenobject_glosry.htm'\) "Glossary Entry") of the program are held. The non-modifiable program data is stored in the [PXA](javascript:call_link\('abenpxa_glosry.htm'\) "Glossary Entry"). The session memory contains references to the necessary data in the PXA. Technically speaking, the session memory and the global PXA are stored in the shared memory of the AS Instance where they are the responsibility of SAP Memory Management.

In one ABAP session, there can be a maximum of nine internal sessions, which always belong to a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry"). Data from the ABAP memory is always assigned to a call sequence.

On 64-bit platforms, an internal session can theoretically require up to 4 TB of memory. On 32-bit platforms, the theoretical upper limit is 4 GB. The practical upper limit is usually below the theoretical limit, since the actual physically installed main memory is the maximum available and divided up among all users.

Further information about the way ABAP programs are organized in an internal session can be found in [Programs in the Internal Session](javascript:call_link\('abeninternal_session.htm'\)).

Notes

-   The available session memory is defined using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") described under Session Memory. It is also possible to define a percentage of the available memory as a limit, over which a [runtime warning](javascript:call_link\('abenruntime_warning_glosry.htm'\) "Glossary Entry") occurs.

-   Instances of classes, with the exception of [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry"), are located in the internal session. It is therefore not possible to store references to objects in the ABAP memory.


### abenuser_sessions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) →  [ABAP Programs in AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)) → 

User Sessions

Each time an ABAP program is executed, it is in an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") in an [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") within an [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry"). Here, at least one ABAP session is open in every user session.

A user session is opened whenever a [user](javascript:call_link\('abenuser_glosry.htm'\) "Glossary Entry") [logs on](javascript:call_link\('abenlogon_glosry.htm'\) "Glossary Entry") to [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). Here, the following fixed properties of the user session are defined:

-   [User name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry")

The user name is assigned a [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") and [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") that modify the behavior of an ABAP program. The current user name is returned by the method GET\_USER\_NAME of the class CL\_ABAP\_SYST and can be fetched from the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-uname.

-   [Client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry")

The client ID determines the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry"). When database content is accessed using [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") takes place by default and only the data of the current client is accessed. The current client is returned by the method GET\_CLIENT of the class CL\_ABAP\_SYST and can be fetched from the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-mandt.

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

From a user session, it is possible to open further user sessions on the same AS Instance or another AS Instance in a program-driven way. For example:

-   A [remote function call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry") with the destination "NONE" opens a user session on the same AS Instance.

-   Calls of [update modules](javascript:call_link\('abenupdate_module_glosry.htm'\) "Glossary Entry") using [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or executions of executable programs in [background programming](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry") open separate user sessions.

-   ICF clients and APC clients can address the current AS Instance or other AS Instances as ICF servers or APC servers and hence open new user sessions.


### abeninternal_session.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) →  [ABAP Programs in AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)) → 

Programs in the Internal Session

The following figure shows the memory organization within an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of an [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") in an [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry").

![Figure](abdoc_memory2.gif)

-   [Program Groups](#abeninternal-session-1--------main-program-group---@ITOC@@ABENINTERNAL_SESSION_2)

-   [Additional Program Group](#abeninternal-session-3--------main-program-of-a-program-group---@ITOC@@ABENINTERNAL_SESSION_4)

-   [Programs Loaded into a Program Group](#abeninternal-session-5--------data-objects---@ITOC@@ABENINTERNAL_SESSION_6)

-   [Class Instances](#abeninternal-session-7--------interface-work-areas---@ITOC@@ABENINTERNAL_SESSION_8)

-   [Dynpros, Lists, and GUI Statuses](#@@ITOC@@ABENINTERNAL_SESSION_9)

Program Groups

In an internal session it is possible to load multiple programs that can be organized in program groups. Once an internal session is exited, it is closed. It is then no longer possible to access data and objects of the internal session.

Main Program Group

When an internal session is created by [calling an ABAP program](javascript:call_link\('abenabap_program_call.htm'\)) using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) or a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry"), the main program group is created and the called program is its main program. The full internal session exists for as long as the main program of the main program group is being executed. This can be an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry"), or a [function group](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry").

Additional Program Group

Each time a new [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or a new [function group](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry") is loaded by being used externally, an additional program group is created and the class pool or the function group is the main program of the additional program group. A pool or group is usually used externally when the components it exposes are accessed,(these are the visible components of the global class or function module). However, this can also occur when local components are accessed, such as when a type is specified using [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"). An additional program group is persisted for as long as the internal session exists.

Main Program of a Program Group

The first program loaded of a program group is the main program of this group. The main program of a main program group is the first program loaded into the internal session by a program call (this program is an executable program, module pool, or function group). The main program of an additional program group is a class pool or a function group whose loading results in the forming of the additional program group.

Programs Loaded into a Program Group

When programs that are not function groups or class pools are loaded because of an external usage, they do not form additional program groups, instead they are loaded into the program group of the user. This happens for example:

-   during the external call of subroutines that are defined in executable programs, module pools or subroutine pools

-   When using the dynpro statement [CALL SUBSCREEN sub\_area INCLUDING prog](javascript:call_link\('dynpcall.htm'\)), if the dynpro is not defined in a function group

-   In dynamic access to a local data type or object type of an executable program, module pool, or a subroutine using [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry")

-   In statements such as [SET PF-STATUS OF PROGRAM](javascript:call_link\('abapset_pf-status_dynpro.htm'\)), if the program of the necessary component is not a function group.

Notes

-   The [introductory program statement](javascript:call_link\('abenprogram_init_statement_glosry.htm'\) "Glossary Entry") is important for the assignment of a program to a program group and not the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry"). For example, if the statement [FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\)) is used in a subroutine pool instead of [PROGRAM](javascript:call_link\('abapprogram.htm'\)), when the program is loaded by an external usage it creates an additional program group.

-   The assignment of a program loaded into a program group is particularly important if procedures of this program are [called externally](javascript:call_link\('abenprogram_groups.htm'\)), since all the programs of a program group use the interface work area, the dynpros, lists, and GUI statuses of the main program (see below for more information).

Data Objects

The [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") of a program, with the exception of the [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"), belong exclusively to their program and are only visible there. A loaded program exists for the same length of time as the internal session. After the return from a program, its data objects are preserved and are available if a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") of the program is called again.

Class Instances

Objects as instances of classes can be used by all programs (and objects) of an internal session. An object exists for as long as there are users for (and hence references to) the object.

Note

This means that references to objects of the internal session can be passed to externally called procedures.

Interface Work Areas

Data objects declared using [TABLES](javascript:call_link\('abaptables.htm'\)) or [DATA BEGIN*|*END OF COMMON PART ...](javascript:call_link\('abapdata_common.htm'\)) are [interface work areas](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"). These are only created once per program group and are used by all programs of a program group together.

Note

The assignment of a program to a program group, and thus the determination of which other programs it shares the interface work area with, can depend on the usage sequence.

Dynpros, Lists, and GUI Statuses

Only the [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the main program of a program group can be called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)). After an internal session is loaded, these are the dynpros of the main program of the main program group. The main programs (function groups) of additional program groups can also call their own dynpros.

[Lists](javascript:call_link\('abenlist_glosry.htm'\) "Glossary Entry") are always assigned to the current [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") and therefore also to the main program of the program group.

By default, [SET PF-STATUS](javascript:call_link\('abapset_pf-status_dynpro.htm'\)) is used to access the [GUI status](javascript:call_link\('abengui_status_glosry.htm'\) "Glossary Entry") of the main program of a program group and use its data objects for dynamic texts.

All programs of a program group work with the dynpros, lists, and GUI status of the main program by default. A statement CALL SCREEN in an externally called subroutine, for example, never calls a dynpro from its own master program. The dialog modules and list result blocks of the main program are executed.

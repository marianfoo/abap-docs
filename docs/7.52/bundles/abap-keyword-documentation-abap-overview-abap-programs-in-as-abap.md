# ABAP - Keyword Documentation / ABAP - Overview / ABAP Programs in AS ABAP

Included pages: 4


### abenorganization_of_modules.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_oview.htm) → 

ABAP Programs in AS ABAP

ABAP programs are executed in [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"). The execution of the programs is organized in [sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensession_glosry.htm "Glossary Entry"), which can access different memory areas.

-   [Sessions and Memory Areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_organization.htm)

-   [User Sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_sessions.htm)

-   [Programs in the Internal Session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session.htm)

Continue
[Sessions and Memory Areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_organization.htm)
[User Sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_sessions.htm)
[Programs in the Internal Session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session.htm)


### abenmemory_organization.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_oview.htm) →  [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenorganization_of_modules.htm) → 

Sessions and Memory Areas

This section describes the [sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensession_glosry.htm "Glossary Entry") in AS ABAP where ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detailed description, see Documentation Memory Management in [SAP Help Portal](http://help.sap.com).

The following figure shows the general organization of sessions for ABAP programs and their memory areas up to the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") level:

![Figure](abdoc_memory1.gif)

-   [Application Server](#@@ITOC@@ABENMEMORY_ORGANIZATION_1)

-   [User Session](#@@ITOC@@ABENMEMORY_ORGANIZATION_2)

-   [ABAP Session](#@@ITOC@@ABENMEMORY_ORGANIZATION_3)

-   [Internal Session](#@@ITOC@@ABENMEMORY_ORGANIZATION_4)

Application Server

The application layer of an [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") can be distributed across multiple [application servers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry"). If an AS ABAP has more than one application server, these are normally instanced on different computers. It is also possible, however, for multiple application servers of one or more AS ABAPs to be instanced on the same host computer. The transaction SM51 shows an overview of the application server of the current AS ABAP and which computers it is instanced on. The network name of the computer on which the current application server is instanced can be taken from the [system field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-host in an ABAP program.

Every application server has access to the [standard database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the AS ABAP. Each application server has its own [shared memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_memory_glosry.htm "Glossary Entry"). The ABAP runtime environment uses the shared memory for programs, program data, and buffers (for example, in [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry")). ABAP programs can store [shared objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_objects_glosry.htm "Glossary Entry") and [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry") in the shared memory.

Note

The shared memory is frequently used and may therefore become a sparse resource, which can result in bottlenecks when explicitly storing data from ABAP programs.

User Session

Logging on to an application server opens a [user session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_session_glosry.htm "Glossary Entry"). Logons take place using [SAP GUI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_gui_glosry.htm "Glossary Entry"), the [RFC interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_interface_glosry.htm "Glossary Entry"), or [ICF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_glosry.htm "Glossary Entry") (including [APC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_glosry.htm "Glossary Entry")). A user session is assigned a standalone memory area, the [user memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_memory_glosry.htm "Glossary Entry"), which can be used as follows in ABAP programs:

-   The user memory stores [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") that can be accessed using the statements [SET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_parameter.htm) and [GET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_parameter.htm).

-   The [ABAP Daemon Memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") is a subarea of the user memory in which [ABAP Daemons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_glosry.htm "Glossary Entry") can save context information in [PCP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpcp_glosry.htm "Glossary Entry") format.

The maximum number of user sessions is configured using the profile parameter rdisp/tm\_max\_no. The profile parameter rdisp/rfc\_max\_login determines which percentage of the sessions can be opened using the RFC interface.

For more information, see [User Sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_sessions.htm).

ABAP Session

An [ABAP session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") is opened for each user session. Each ABAP session is assigned its own memory area of [ABAP memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_memory_glosry.htm "Glossary Entry"), in which [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be stored. The programs of a [call sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_sequence_glosry.htm "Glossary Entry") share access to these clusters and the data is retained for as long as the [top level transaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentop_level_transaction_glosry.htm "Glossary Entry") of the call sequence.

Further ABAP sessions for a user session can be opened as followed:

-   Enter a transaction code after "/o" in the command field in the [toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensymbol_toolbar_glosry.htm "Glossary Entry").

-   Call the function module TH\_CREATE\_MODE.

-   Call a [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") when processing an [asynchronous RFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry"). To do this, the RFC client requires an additional ABAP session for communication with SAP GUI.

A maximum of 16 ABAP sessions are possible per user session. The number of sessions actually possible for a system is determined by the profile parameter rdisp/max\_alt\_modes, whose default is 6.

Note

The [ABAP memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_memory_glosry.htm "Glossary Entry") can be used to pass data between the programs in a [call sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_sequence_glosry.htm "Glossary Entry").

Internal Session

Each [call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_call.htm) of an ABAP program creates a new [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"), in which the called program is loaded.

An internal session contains a [program memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroll_area_glosry.htm "Glossary Entry"), itself divided into the areas [heap](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_glosry.htm "Glossary Entry") and [stack](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstack_glosry.htm "Glossary Entry"). This is where the modifiable [objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_glosry.htm "Glossary Entry") of the program are held. The non-modifiable program data is stored in the [PXA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpxa_glosry.htm "Glossary Entry"). The program memory contains references to the necessary data in the PXA. Technically speaking, the program memory and the global PXA are stored in the shared memory of the application server where they are the responsibility of SAP Memory Management.

In one ABAP session, there can be a maximum of nine internal sessions, which always belong to a [call sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_sequence_glosry.htm "Glossary Entry"). Data from the ABAP memory is always assigned to a call sequence.

On 64-bit platforms, an internal session can theoretically require up to 4 TB of memory. On 32-bit platforms, the theoretical upper limit is 4 GB. The practical upper limit is usually below the theoretical limit, since the actual physically installed main memory is the maximum available and divided up among all users.

Further information about the way ABAP programs are organized in an internal session can be found in [Programs in the Internal Session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session.htm).

Note

Instances of classes, with the exception of [shared objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_objects_glosry.htm "Glossary Entry"), are located in the internal session. It is therefore not possible to store references to objects in the ABAP memory.


### abenuser_sessions.htm

  

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


### abeninternal_session.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_oview.htm) →  [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenorganization_of_modules.htm) → 

Programs in the Internal Session

The following figure shows the memory organization within an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"):

![Figure](abdoc_memory2.gif)

-   [Program Groups](#@@ITOC@@ABENINTERNAL_SESSION_1)

-   [Main Program Group](#@@ITOC@@ABENINTERNAL_SESSION_2)

-   [Additional Program Group](#@@ITOC@@ABENINTERNAL_SESSION_3)

-   [Main Program of a Program Group](#@@ITOC@@ABENINTERNAL_SESSION_4)

-   [Programs Loaded into a Program Group](#@@ITOC@@ABENINTERNAL_SESSION_5)

-   [Data Objects](#@@ITOC@@ABENINTERNAL_SESSION_6)

-   [Instances of Classes](#@@ITOC@@ABENINTERNAL_SESSION_7)

-   [Interface Work Areas](#@@ITOC@@ABENINTERNAL_SESSION_8)

-   [Dynpros, Lists, and GUI Statuses](#@@ITOC@@ABENINTERNAL_SESSION_9)

Program Groups

In an internal session it is possible to load multiple programs that can be organized in program groups. Once an internal session is exited, it is closed. It is then no longer possible to access data and objects of the internal session.

Main Program Group

When an internal session is created by [calling an ABAP program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_call.htm) using [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm) or a [transaction code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction_code_glosry.htm "Glossary Entry"), the main program group is created and the called program is its main program. The full internal session exists for as long as the main program of the main program group is being executed. This can be an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), a [module pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodul_pool_glosry.htm "Glossary Entry"), or a [function group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry").

Additional Program Group

Each time a new [class pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm "Glossary Entry") or a new [function group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry") is loaded by being used externally, an additional program group is created and the class pool or the function group is the main program of the additional program group. A pool or group is usually used externally when the components it exposes are accessed,(these are the visible components of the global class or function module). However, this can also occur when local components are accessed, such as when a type is specified using [absolute type names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"). An additional program group is persisted for as long as the internal session exists.

Main Program of a Program Group

The first program of a program group loaded is the main program of this group. The main program of a main program group is the first program loaded into the internal session by a program call (this program is an executable program, module pool, or function group). The main program of an additional program group is a class pool or a function group that, when loaded, creates the additional program group.

Programs Loaded into a Program Group

When programs that are not function groups or class pools are loaded (because they are used externally), they do not create additional program groups and are loaded into the program group of the consumer instead. This happens for example in the following cases:

-   In external calls of subroutines that are defined in executable programs, module pools or subroutine pools

-   When using the dynpro statement [CALL SUBSCREEN sub\_area INCLUDING prog](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpcall.htm), if the dynpro is not defined in a function group

-   In dynamic access to a local data type or object type of an executable program, module pool, or a subroutine using [absolute type names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabsolute_typename_glosry.htm "Glossary Entry")

-   In statements such as [SET PF-STATUS OF PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_pf-status_dynpro.htm), if the program of the necessary component is not a function group.

Notes

-   The [introductory program statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_init_statement_glosry.htm "Glossary Entry") is important for the assignment of a program to a program group and not the [program type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_type_glosry.htm "Glossary Entry"). For example, if the statement [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction-pool.htm) is used in a subroutine pool instead of [PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm), when the program is loaded by an external usage it creates an additional program group.

-   The assignment of a program loaded into a program group is particularly important if procedures of this program are [called externally](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_groups.htm), since all the programs of a program group use the interface work area, the dynpros, lists, and GUI statuses of the main program (see below for more information).

Data Objects

The [data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry") of a program, with the exception of the [interface work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"), belong exclusively to their program and are only visible there. A loaded program exists for the same length of time as the internal session. After the return from a program, its data objects are preserved and are available if a [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") of the program is called again.

Instances of Classes

Objects as instances of classes can be used by all programs (and objects) of an internal session. An object exists for as long as there are consumers for, and hence references to, the object.

Note

This means that references to objects of the internal session can be passed to externally called procedures.

Interface Work Areas

Data objects declared using [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) or [DATA BEGIN*|*END OF COMMON PART ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_common.htm) are [interface work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"). These are only created once per program group and are used by all programs of a program group together.

Note

The assignment of a program to a program group (which hence defines which other programs share the interface work areas), can be determined by the order in which they are used.

Dynpros, Lists, and GUI Statuses

Only the [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") of the main program of a program group can be called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_screen.htm). After an internal session is loaded, these are the dynpros of the main program of the main program group. The main programs (the function groups) of additional program groups can also call their own dynpros.

[Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_glosry.htm "Glossary Entry") are always assigned to the current [dynpro sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") and therefore also to the main program of the program group.

By default, [SET PF-STATUS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_pf-status_dynpro.htm) is used to access the [GUI status](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengui_status_glosry.htm "Glossary Entry") of the main program of a program group and use its data objects for dynamic texts.

All programs of a program group work with the dynpros, lists, and GUI status of the main program by default. A statement CALL SCREEN in an externally called subroutine, for example, never calls a dynpro from its own master program. The dialog modules and list result blocks of the main program are executed instead.

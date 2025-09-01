# ABAP Keyword Documentation / ABAP - Overview / ABAP Programs in AS ABAP

Included pages: 4


### abenorganization_of_modules.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_oview.htm) → 

ABAP Programs in AS ABAP

ABAP programs are executed on the [Application Server ABAP (AS ABAP)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") of an [ABAP system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_system_glosry.htm "Glossary Entry"). The following figure shows a simplified representation of the AS ABAP as part of an ABAP system.

![Figure](abap_platform.gif)

The [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") represents the application layer of the ABAP system. The AS ABAP is identified by a [system ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_id_glosry.htm "Glossary Entry"), which is also the name of the entire ABAP system. Users can log on to the AS ABAP using a [user name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_name_glosry.htm "Glossary Entry"). The most important components of an AS ABAP for ABAP program execution are:

-   AS Instance

The ABAP program execution itself takes place in [AS Instances (application server instances)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry"). One or more AS Instances can be instantiated for an AS ABAP. Multiple AS Instances are usually distributed across several [host computers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_computer_glosry.htm "Glossary Entry"). The AS Instances communicate with each other using a [message server](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_server_glosry.htm "Glossary Entry") (exactly one for each AS ABAP).

-   Work processes

Each AS Instance uses its [work processes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwork_process_glosry.htm "Glossary Entry") to execute ABAP programs. There are various types of work processes for different applications: dialog, enqueue, background, spool, and update work processes. During the entire runtime of an AS Instance, each work process is logged on to the [standard database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry") of [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") as a [database user](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_user_glosry.htm "Glossary Entry") using a [standard connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry"). This user is assigned the [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") that represents the [database layer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_layer_glosry.htm "Glossary Entry") of an [ABAP system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_system_glosry.htm "Glossary Entry"). [System programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_program_glosry.htm "Glossary Entry"), and [system tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_table_glosry.htm "Glossary Entry"), and also [application programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_program_glosry.htm "Glossary Entry") and [application tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_table_glosry.htm "Glossary Entry") are stored in the ABAP database schema.

-   Communication components

The communication components connect the AS Instances with the [presentation layer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpresentation_layer_glosry.htm "Glossary Entry") of the [ABAP system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_system_glosry.htm "Glossary Entry"), or with other systems, which can be either another AS ABAP or external systems. The following are examples of communication components:

-   The [ICM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicm_glosry.htm "Glossary Entry") for linking to browser-based [user interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_interface_glosry.htm "Glossary Entry") ([SAPUI5](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensapui5_glosry.htm "Glossary Entry"), [Web Dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenweb_dynpro_glosry.htm "Glossary Entry")) and the Internet.

-   The [RFC interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_interface_glosry.htm "Glossary Entry") for linking to other systems.

-   A dispatcher for linking to [SAP GUI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_gui_glosry.htm "Glossary Entry").

Various protocols are used for communication, such as HTTP, HTTPS, TCP, or SAP's RFC protocol.

For more information, see Application Server Infrastructure - ABAP.

ABAP program execution is organized in [sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_glosry.htm "Glossary Entry"), which can access different memory areas:

-   [Sessions and Memory Areas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_organization.htm)

-   [User Sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_sessions.htm)

-   [Programs in the Internal Session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session.htm)

Continue
[Sessions and Memory Areas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_organization.htm)
[User Sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_sessions.htm)
[Programs in the Internal Session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session.htm)


### abenmemory_organization.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_oview.htm) →  [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenorganization_of_modules.htm) → 

Sessions and Memory Areas

This section describes the [sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_glosry.htm "Glossary Entry") in AS ABAP where ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detailed description, see Documentation Memory Management in [SAP Help Portal](http://help.sap.com).

The following figure shows the general organization of sessions for ABAP programs and their memory areas up to the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") level:

![Figure](abdoc_memory1.gif)

-   [AS Instance](#@@ITOC@@ABENMEMORY_ORGANIZATION_1)

-   [User Session](#@@ITOC@@ABENMEMORY_ORGANIZATION_2)

-   [ABAP Session](#@@ITOC@@ABENMEMORY_ORGANIZATION_3)

-   [Internal Session](#@@ITOC@@ABENMEMORY_ORGANIZATION_4)

AS Instance

An [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") can be distributed across multiple [AS Instances](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry")s. If an AS ABAP is implemented using multiple AS Instancess, they are usually exist as separate instances on multiple [host computers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_computer_glosry.htm "Glossary Entry"), which do not have to have the same operating system. It is also possible, however, for multiple AS Instancess of one or more AS ABAPs to exist as instances on the same host computer. AS Instancess communicate with the [presentation layer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpresentation_layer_glosry.htm "Glossary Entry"), the [database layer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_layer_glosry.htm "Glossary Entry"), and with each other using the [message server](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_server_glosry.htm "Glossary Entry"). The most important components of an AS Instance are its [work processes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwork_process_glosry.htm "Glossary Entry"), the number and [type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_glosry.htm "Glossary Entry") of which are determined when the AS ABAP is started. An [ABAP program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_glosry.htm "Glossary Entry") is executed by a suitable AS Instance work process.

The transaction SM51 shows an overview of the AS Instances of the current AS ABAP and which host computers host instances of it. In ABAP programs, the name of the current AS Instance can be identified using the method GET\_INSTANCE\_NAME of the system class CL\_ABAP\_SYST. This name has the form hostname\_sysid\_instnr. Here, hostname is the name of the host computer of the AS Instance, sysid is the name of the AS ABAP, and instnr is the instance number of the AS Instance. The network name of the host computer that hosts an instance of the current AS Instance can be found in the [system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-host.

Every AS Instance has access to the [standard database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the AS ABAP. Every AS Instance has its own [shared memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_memory_glosry.htm "Glossary Entry")\- The ABAP runtime environment uses the shared memory for programs, program data, and buffers (for example, in [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry")). ABAP programs can store [shared objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_objects_glosry.htm "Glossary Entry") and [data clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_glosry.htm "Glossary Entry") in the shared memory.

Note

The shared memory is frequently used and may therefore become a sparse resource, which can result in bottlenecks when explicitly storing data from ABAP programs.

Example

Gets the name of the current AS Instance.

cl\_demo\_output=>display( cl\_abap\_syst=>get\_instance\_name( ) ).

User Session

Logging on to an AS Instance opens a [user session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_session_glosry.htm "Glossary Entry"). Logons take place using [SAP GUI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_gui_glosry.htm "Glossary Entry"), the [RFC interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_interface_glosry.htm "Glossary Entry"), or [ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm "Glossary Entry") (including [APC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_glosry.htm "Glossary Entry")). A user session is assigned a standalone memory area, the [user memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_memory_glosry.htm "Glossary Entry"), which can be used as follows in ABAP programs:

-   The user memory stores [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") that can be accessed using the statements [SET PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_parameter.htm) and [GET PARAMETER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_parameter.htm).

-   The [ABAP Daemon Memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") is a subarea of the user memory in which [ABAP Daemons](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_glosry.htm "Glossary Entry") can save context information in [PCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp_glosry.htm "Glossary Entry") format.

The maximum number of user sessions is configured using the profile parameter rdisp/tm\_max\_no. The profile parameter rdisp/rfc\_max\_login determines which percentage of the sessions can be opened using the RFC interface.

For more information, see [User Sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_sessions.htm).

ABAP Session

An [ABAP session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_session_glosry.htm "Glossary Entry") is opened for each user session. Each ABAP session is assigned its own memory area of [ABAP memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_memory_glosry.htm "Glossary Entry"), in which [data clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be stored. The programs of a [call sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_sequence_glosry.htm "Glossary Entry") share access to these clusters and the data is retained for as long as the [top level transaction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentop_level_transaction_glosry.htm "Glossary Entry") of the call sequence. The [SAP Easy Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_easy_access_glosry.htm "Glossary Entry") program does not function as a top level transaction for the ABAP memory.

Further ABAP sessions for a user session can be opened as followed:

-   Enter a transaction code after "/o" in the command field in the [toolbar](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensymbol_toolbar_glosry.htm "Glossary Entry").

-   Call the function module TH\_CREATE\_MODE.

-   Call a [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") when processing an [asynchronous RFC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry"). To do this, the RFC client requires an additional ABAP session for communication with SAP GUI.

A maximum of 16 ABAP sessions are possible per user session. The number of sessions actually possible for a system is determined by the profile parameter rdisp/max\_alt\_modes, whose default is 6.

Notes

-   The [ABAP memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_memory_glosry.htm "Glossary Entry") can be used to pass data between the programs in a [call sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_sequence_glosry.htm "Glossary Entry").

-   For logging and analysis, each ABAP session has an [Extended Passport (EPP)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenepp.htm) that contains constant values. These values can be passed to communication partners such as further ABAP sessions or external interfaces (modifiable values are set for the connection in question).

Internal Session

Each [call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_call.htm) of an ABAP program creates a new [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session.htm), in which the called program is loaded.

An internal session contains a [session memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroll_area_glosry.htm "Glossary Entry"), itself divided into the areas [heap](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_glosry.htm "Glossary Entry") and [stack](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstack_glosry.htm "Glossary Entry") (from the perspective of an ABAP program). This is where the modifiable [objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_glosry.htm "Glossary Entry") of the program are held. The non-modifiable program data is stored in the [PXA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpxa_glosry.htm "Glossary Entry"). The session memory contains references to the necessary data in the PXA. Technically speaking, the session memory and the global PXA are stored in the shared memory of the AS Instance where they are the responsibility of SAP Memory Management.

In one ABAP session, there can be a maximum of nine internal sessions, which always belong to a [call sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_sequence_glosry.htm "Glossary Entry"). Data from the ABAP memory is always assigned to a call sequence.

On 64-bit platforms, an internal session can theoretically require up to 4 TB of memory. On 32-bit platforms, the theoretical upper limit is 4 GB. The practical upper limit is usually below the theoretical limit, since the actual physically installed main memory is the maximum available and divided up among all users.

Further information about the way ABAP programs are organized in an internal session can be found in [Programs in the Internal Session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session.htm).

Notes

-   The available session memory is defined using the [profile parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") described under Session Memory. It is also possible to define a percentage of the available memory as a limit, over which a [runtime warning](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_warning_glosry.htm "Glossary Entry") occurs.

-   Instances of classes, with the exception of [shared objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_objects_glosry.htm "Glossary Entry"), are located in the internal session. It is therefore not possible to store references to objects in the ABAP memory.


### abenuser_sessions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_oview.htm) →  [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenorganization_of_modules.htm) → 

User Sessions

Each time an ABAP program is executed, it is in an [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") in an [ABAP session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_session_glosry.htm "Glossary Entry") within an [AS Instance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry") [user session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_session_glosry.htm "Glossary Entry"). Here, at least one ABAP session is open in every user session.

A user session is opened whenever a [user](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_glosry.htm "Glossary Entry") [logs on](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_glosry.htm "Glossary Entry") to [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"). Here, the following fixed properties of the user session are defined:

-   [User name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_name_glosry.htm "Glossary Entry")

The user name is assigned a [user master record](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_master_record_glosry.htm "Glossary Entry") and [authorizations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_glosry.htm "Glossary Entry") that modify the behavior of an ABAP program. The current user name is returned by the method GET\_USER\_NAME of the class CL\_ABAP\_SYST and can be fetched from the [system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uname.

-   [Client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry")

The client ID determines the current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry"). When database content is accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) is used by default and only the data of the current client is accessed. The current client is returned by the method GET\_CLIENT of the class CL\_ABAP\_SYST and can be fetched from the [system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-mandt.

-   [Logon language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_language_glosry.htm "Glossary Entry")

The logon language determines how various text repositories are accessed and is the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") by default. The current logon language is returned by the method GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST. The [system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-langu, on the other hand, contains the text environment language of the current [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry"), which can be set to a different value.

There are various types of user sessions and various rules and restrictions apply when ABAP programs are executed:

-   [Dialog sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_session_glosry.htm "Glossary Entry")

Dialog sessions are used for [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_processing_glosry.htm "Glossary Entry") with [SAP GUI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_gui_glosry.htm "Glossary Entry"). The ABAP programs are operated using classic [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") and their special variants, [selection screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") and classic [lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_glosry.htm "Glossary Entry").

-   [Background sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbatch_session_glosry.htm "Glossary Entry")

Background sessions are used for [background processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), namely the execution of ABAP programs in the background without user interaction.

-   [Update sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_session_glosry.htm "Glossary Entry")

Update sessions are used for classic (non-local) [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry"), namely the execution of registered [update function modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") in a dedicated work process.

-   [RFC sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_session_glosry.htm "Glossary Entry")

RFC sessions are used for [RFC processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), namely the execution of remotely called function modules ([RFMs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfm_glosry.htm "Glossary Entry")).

-   [ICF sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_session_glosry.htm "Glossary Entry")

ICF sessions are used for [ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_processing_glosry.htm "Glossary Entry") processing, namely the processing of HTTP/HTTPS queries or SMTP queries sent to AS ABAP in handler class.

-   [APC sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_session_glosry.htm "Glossary Entry")

APC sessions are used for [APC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_processing_glosry.htm "Glossary Entry") processing, namely the processing of WebSocket queries or TCP queries sent to AS ABAP in handler class.

-   [ABAP Daemon sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry")

ABAP Daemon sessions are used for [ABAP Daemon processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry"), namely whenever an [ABAP Daemon](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_glosry.htm "Glossary Entry") is executed that is restarted after a program termination.

The [user memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_memory_glosry.htm "Glossary Entry") is assigned to a user session as a dedicated memory area for [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") and is assigned the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") as a subarea.

Note

From a user session, it is possible to open further user sessions on the same AS Instance or another AS Instance in a program-driven way. For example:

-   A [remote function call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenremote_function_call_glosry.htm "Glossary Entry") with the destination "NONE" opens a user session on the same AS Instance.

-   Calls of [update modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_module_glosry.htm "Glossary Entry") using [COMMIT WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcommit.htm) or executions of executable programs in [background programming](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbackround_processing_glosry.htm "Glossary Entry") open separate user sessions.

-   ICF clients and APC clients can address the current AS Instance or other AS Instances as ICF servers or APC servers and hence open new user sessions.


### abeninternal_session.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_oview.htm) →  [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenorganization_of_modules.htm) → 

Programs in the Internal Session

The following figure shows the organization of programs within an [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of an [ABAP session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_session_glosry.htm "Glossary Entry") in a [user session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_session_glosry.htm "Glossary Entry") of [AS Instance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry").

![Figure](abdoc_memory2.gif)

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

In an internal session it is possible to load multiple programs that can be organized in program groups. Once an internal session is exited, it is closed. It is then no longer possible to access data and objects of the internal session.

Main Program Group

When an internal session is created by [calling an ABAP program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_call.htm) using [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm) or a [transaction code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction_code_glosry.htm "Glossary Entry"), the main program group is created and the called program is its main program. The full internal session exists for as long as the main program of the main program group is being executed. This can be an [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), a [module pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodul_pool_glosry.htm "Glossary Entry"), or a [function group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_group_glosry.htm "Glossary Entry").

Additional Program Group

Each time a new [class pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_pool_glosry.htm "Glossary Entry") or a new [function group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_group_glosry.htm "Glossary Entry") is loaded by being used externally, an additional program group is created and the class pool or the function group is the main program of the additional program group. A pool or group is usually used externally when the components it exposes are accessed,(these are the visible components of the global class or function module). However, this can also occur when local components are accessed, such as when a type is specified using [absolute type names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"). An additional program group is persisted for as long as the internal session exists.

Main Program of a Program Group

The first program loaded of a program group is the main program of this group. The main program of a main program group is the first program loaded into the internal session by a program call (this program is an executable program, module pool, or function group). The main program of an additional program group is a class pool or a function group whose loading results in the forming of the additional program group.

Programs Loaded into a Program Group

When programs that are not function groups or class pools are loaded because of an external usage, they do not form additional program groups, instead they are loaded into the program group of the user. This happens for example:

-   during the external call of subroutines that are defined in executable programs, module pools or subroutine pools

-   When using the dynpro statement [CALL SUBSCREEN sub\_area INCLUDING prog](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpcall.htm), if the dynpro is not defined in a function group

-   In dynamic access to a local data type or object type of an executable program, module pool, or a subroutine using [absolute type names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabsolute_typename_glosry.htm "Glossary Entry")

-   In statements such as [SET PF-STATUS OF PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_pf-status_dynpro.htm), if the program of the necessary component is not a function group.

Notes

-   The [introductory program statement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_init_statement_glosry.htm "Glossary Entry") is important for the assignment of a program to a program group and not the [program type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_type_glosry.htm "Glossary Entry"). For example, if the statement [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction-pool.htm) is used in a subroutine pool instead of [PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprogram.htm), when the program is loaded by an external usage it creates an additional program group.

-   The assignment of a program loaded into a program group is particularly important if procedures of this program are [called externally](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_groups.htm), since all the programs of a program group use the interface work area, the dynpros, lists, and GUI statuses of the main program (see below for more information).

Data Objects

The [data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_object_glosry.htm "Glossary Entry") of a program, with the exception of the [interface work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"), belong exclusively to their program and are only visible there. A loaded program exists for the same length of time as the internal session. After the return from a program, its data objects are preserved and are available if a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") of the program is called again.

Class Instances

Objects as instances of classes can be used by all programs (and objects) of an internal session. An object exists for as long as there are users for (and hence references to) the object.

Note

This means that references to objects of the internal session can be passed to externally called procedures.

Interface Work Areas

Data objects declared using [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables.htm) or [DATA BEGIN*|*END OF COMMON PART ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_common.htm) are [interface work areas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"). These are only created once per program group and are used by all programs of a program group together.

Note

The assignment of a program to a program group, and thus the determination of which other programs it shares the interface work area with, can depend on the usage sequence.

Dynpros, Lists, and GUI Statuses

Only the [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") of the main program of a program group can be called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_screen.htm). After an internal session is loaded, these are the dynpros of the main program of the main program group. The main programs (function groups) of additional program groups can also call their own dynpros.

[Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_glosry.htm "Glossary Entry") are always assigned to the current [dynpro sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") and therefore also to the main program of the program group.

By default, [SET PF-STATUS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_pf-status_dynpro.htm) is used to access the [GUI status](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengui_status_glosry.htm "Glossary Entry") of the main program of a program group and use its data objects for dynamic texts.

All programs of a program group work with the dynpros, lists, and GUI status of the main program by default. A statement CALL SCREEN in an externally called subroutine, for example, never calls a dynpro from its own master program. The dialog modules and list result blocks of the main program are executed.

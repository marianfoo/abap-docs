---
title: "Sessions and Memory Areas"
description: |
  This section describes the sessions(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_glosry.htm 'Glossary Entry') in AS ABAP where ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detai
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_organization.htm"
abapFile: "abenmemory_organization.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenmemory", "organization"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_oview.htm) →  [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenorganization_of_modules.htm) → 

Sessions and Memory Areas

This section describes the [sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_glosry.htm "Glossary Entry") in AS ABAP where ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detailed description, see Documentation Memory Management in [SAP Help Portal](http://help.sap.com).

The following figure shows the general organization of sessions for ABAP programs and their memory areas up to the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") level:

![Figure](abdoc_memory1.gif)

-   [AS Instance](#abenmemory-organization-1--------user-session---@ITOC@@ABENMEMORY_ORGANIZATION_2)

-   [ABAP Session](#abenmemory-organization-3--------internal-session---@ITOC@@ABENMEMORY_ORGANIZATION_4)

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
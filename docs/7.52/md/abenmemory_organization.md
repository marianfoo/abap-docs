---
title: "Sessions and Memory Areas"
description: |
  This section describes the sessions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensession_glosry.htm 'Glossary Entry') in AS ABAP where ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detai
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_organization.htm"
abapFile: "abenmemory_organization.htm"
keywords: ["do", "if", "try", "class", "data", "abenmemory", "organization"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_oview.htm) →  [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenorganization_of_modules.htm) → 

Sessions and Memory Areas

This section describes the [sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensession_glosry.htm "Glossary Entry") in AS ABAP where ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detailed description, see Documentation Memory Management in [SAP Help Portal](http://help.sap.com).

The following figure shows the general organization of sessions for ABAP programs and their memory areas up to the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") level:

![Figure](abdoc_memory1.gif)

-   [Application Server](#abenmemory-organization-1--------user-session---@ITOC@@ABENMEMORY_ORGANIZATION_2)

-   [ABAP Session](#abenmemory-organization-3--------internal-session---@ITOC@@ABENMEMORY_ORGANIZATION_4)

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
---
title: "Sessions and Memory Areas"
description: |
  This section describes the sessions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_glosry.htm 'Glossary Entry') of an AS ABAP in which ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_organization.htm"
abapFile: "abenmemory_organization.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "abenmemory", "organization"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_oview.htm) →  [ABAP Programs on the AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenorganization_of_modules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Sessions%20and%20Memory%20Areas%2C%20ABENMEMORY_ORGANIZATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Sessions and Memory Areas

This section describes the [sessions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_glosry.htm "Glossary Entry") of an AS ABAP in which ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detailed description, see the documentation [Memory Management](https://help.sap.com/docs/ABAP_PLATFORM_NEW/f146e75588924fa4987b6c8f1a7a8c7e/49325d4ee93934ffe10000000a421937) in SAP Help Portal.

The following figure shows the general organization of sessions for ABAP programs and their memory areas up to the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") level:

![Figure](abdoc_memory1.gif)

-   [AS instance](#abenmemory-organization-1-------user-session---@ITOC@@ABENMEMORY_ORGANIZATION_2)
-   [ABAP Session](#abenmemory-organization-3-------internal-session---@ITOC@@ABENMEMORY_ORGANIZATION_4)

AS instance   

An [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") can be distributed across multiple [AS instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_instance_glosry.htm "Glossary Entry"). If an AS ABAP is implemented using multiple AS instances, they are usually instantiated on different [host computers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry"), which do not have to have the same operating system. However, multiple AS instances of one or more AS ABAP can also be instantiated on the same host computer. AS instances communicate with the [presentation layer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpresentation_layer_glosry.htm "Glossary Entry"), the [database layer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_layer_glosry.htm "Glossary Entry"), and with each other using the [message server](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_server_glosry.htm "Glossary Entry"). The most important components of an AS instance are its [work processes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwork_process_glosry.htm "Glossary Entry"), the number and [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_glosry.htm "Glossary Entry") of which are determined when the AS ABAP is started. An [ABAP program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_glosry.htm "Glossary Entry") is executed by a suitable AS instance work process.

The transaction SM51 shows an overview of the AS instances of the current AS ABAP and on which host computers they are instantiated. The name of the current AS instance can be determined in an ABAP Program using the method GET\_INSTANCE\_NAME of the system class CL\_ABAP\_SYST. This name has the form hostname\_sysid\_instnr. Here, hostname is the name of the host computer of the AS instance, sysid is the name of the AS ABAP, and instnr is the instance number of the AS instance. The network name of the host computer on which the current AS instance is instantiated can be found in the [system field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-host.

Every AS instance has access to the [standard database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the AS ABAP. Every AS instance has its own [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_memory_glosry.htm "Glossary Entry"). The ABAP runtime framework uses the shared memory for programs, program data, and buffers (for example, during [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry")). ABAP programs can store [shared objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_objects_glosry.htm "Glossary Entry") and [data clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") in the shared memory.

Hint

The shared memory is frequently used and therefore may be a sparse resource, which can result in bottlenecks when explicitly storing data from ABAP programs.

Example

Gets the name of the current AS instance.

cl\_demo\_output=>display( cl\_abap\_syst=>get\_instance\_name( ) ).

User Session   

Logging on to an AS instance opens a [user session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_session_glosry.htm "Glossary Entry"). Logons take place using [SAP GUI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_gui_glosry.htm "Glossary Entry"), the [RFC interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_interface_glosry.htm "Glossary Entry"), or [ICF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_glosry.htm "Glossary Entry") (including [APC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc_glosry.htm "Glossary Entry")). A user session is assigned a separate memory area, the [user memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_memory_glosry.htm "Glossary Entry"), which can be used as follows in ABAP programs:

-   The user memory stores [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry") that can be accessed using the statements [SET PARAMETER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_parameter.htm) and [GET PARAMETER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_parameter.htm).
-   The [ABAP Daemon Memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") is a subarea of the user memory in which [ABAP daemons](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_glosry.htm "Glossary Entry") can store context information in [PCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp_glosry.htm "Glossary Entry") format.

The maximum number of user sessions is determined by the profile parameter rdisp/tm\_max\_no. The profile parameter rdisp/rfc\_max\_login determines which percentage of the sessions can be opened using the RFC interface.

For more information, see [User Sessions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_sessions.htm).

ABAP Session   

An [ABAP session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_session_glosry.htm "Glossary Entry") is opened for each user session. Each ABAP session is assigned its own memory area [ABAP memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_memory_glosry.htm "Glossary Entry"), in which [data clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be stored. The programs of a [call sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_sequence_glosry.htm "Glossary Entry") share access to these clusters and the data is retained for as long as the [top level transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentop_level_transaction_glosry.htm "Glossary Entry") of the call sequence remains. The [SAP Easy Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_easy_access_glosry.htm "Glossary Entry") program does not work as a top level transaction for the ABAP memory.

Additional ABAP sessions for a user session can be opened as follows:

-   Enter a transaction code after /o in the command field in the [toolbar](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensymbol_toolbar_glosry.htm "Glossary Entry").
-   Call the function module TH\_CREATE\_MODE.
-   Call a [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") during the processing of [asynchronous RFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry"). In the RFC client, an additional ABAP session for communication with the SAP GUI is required.

A maximum of 16 ABAP sessions are possible per user session. The number of sessions that is actually possible for a system is determined by the profile parameter rdisp/max\_alt\_modes, whose default value is 16.

Hints

-   The [ABAP memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_memory_glosry.htm "Glossary Entry") can be used to transfer data between the programs in a [call sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_sequence_glosry.htm "Glossary Entry").
-   For logging and analysis purposes, each ABAP session has an [extended passport (EPP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenepp.htm) that contains constant values and that can be passed on to communication partners, such as other ABAP sessions or external interfaces, whereby modifiable values are set for the respective connection.

Internal Session   

Each [call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) of an ABAP program creates a new [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session.htm), in which the called program is loaded.

An internal session contains a [session memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroll_area_glosry.htm "Glossary Entry") that is divided into the areas [heap](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_glosry.htm "Glossary Entry") and [stack](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstack_glosry.htm "Glossary Entry") from the perspective of an ABAP program. The modifiable [objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_glosry.htm "Glossary Entry") of the program live there. The non-modifiable data of the program is stored in the [PXA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpxa_glosry.htm "Glossary Entry"). The session memory contains references to the required data in the PXA. From a technical perspective, the session memory and the global PXA are stored in the shared memory of the AS instance where they are managed by the SAP Memory Management.

In an ABAP session, there can be a maximum of nine internal sessions that always belong to a [call sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_sequence_glosry.htm "Glossary Entry"). Data from the ABAP memory is always assigned to a call sequence.

On 64-bit platforms, an internal session can theoretically require up to 4 TB of memory. The practical upper limit is usually below the theoretical limit, since the actual physically installed main memory is the maximum available and divided up among all users.

Further information about the way ABAP programs are organized in an internal session can be found in [Programs in the Internal Session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session.htm).

Hints

-   The available session memory is defined using the [profile parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") described under [Session Memory](https://help.sap.com/docs/ABAP_PLATFORM_NEW/f146e75588924fa4987b6c8f1a7a8c7e/11c6413c521e4a13adf7473af49e8291). It is also possible to define a percentage of the available memory as a limit, over which a [runtime warning](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_warning_glosry.htm "Glossary Entry") occurs.
-   Instances of classes, except for [shared objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_objects_glosry.htm "Glossary Entry"), are located in the internal session. It is therefore not possible to store references to objects in the ABAP memory.
-   On 32-bit platforms, that are not supported any more, the theoretical upper limit for the memory that an internal session could require was 4GB.
-   Class CL\_SESSION\_INFO returns information about the current session.

Example

Usage of CL\_SESSION\_INFO.

TRY.
    FINAL(session\_info) = NEW cl\_session\_info( )->get\_info( ).
  CATCH cx\_ssi\_exception.
    ...
ENDTRY.
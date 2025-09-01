# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP - Overview / ABAP Programs on the AS ABAP

Included pages: 4


### abenorganization_of_modules.htm

---
title: "ABAP Programs on the AS ABAP"
description: |
  ABAP programs are executed on the Application Server ABAP (AS ABAP)(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm 'Glossary Entry') of an ABAP system(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_system_glosry.htm 'Glossary Entry') implem
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenorganization_of_modules.htm"
abapFile: "abenorganization_of_modules.htm"
keywords: ["update", "do", "if", "try", "data", "types", "abenorganization", "modules"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Programs on the AS ABAP, ABENORGANIZATION_OF_MODULES, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Programs on the AS ABAP

ABAP programs are executed on the [Application Server ABAP (AS ABAP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") of an [ABAP system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_system_glosry.htm "Glossary Entry") implementing an [ABAP Platform](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_platform_glosry.htm "Glossary Entry"). The figure below shows a highly simplified representation of the AS ABAP as part of an ABAP system.

![Figure](abap_platform.gif)

The [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") represents the application layer of the ABAP system. The AS ABAP is identified by a [system ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_id_glosry.htm "Glossary Entry"), which is also the name of the entire ABAP system. Users can log on to the AS ABAP using a [user name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_name_glosry.htm "Glossary Entry"). The most important components of an AS ABAP for ABAP program execution are:

-   AS instance
    
    The actual ABAP program execution takes place in [AS instances (application server instances)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry"). One or more AS instances can be instantiated for an AS ABAP. Multiple AS instances are usually distributed across several [host computers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_computer_glosry.htm "Glossary Entry"). The AS instances communicate with each other using a [message server](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_server_glosry.htm "Glossary Entry") that exists only once for each AS ABAP.
    
-   Work processes
    
    Each AS instance has [work processes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwork_process_glosry.htm "Glossary Entry") to execute ABAP programs. There are different types of work processes for different applications: dialog, enqueue, background, spool, and update work processes. For the entire runtime of an AS instance, each work process is logged on to the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") as a [database user](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_user_glosry.htm "Glossary Entry") using a [standard connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry"). This user is assigned the [ABAP database schema](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") that represents the [database layer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_layer_glosry.htm "Glossary Entry") of an [ABAP system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_system_glosry.htm "Glossary Entry"). The ABAP database schema stores both [system programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_program_glosry.htm "Glossary Entry") and [system tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_table_glosry.htm "Glossary Entry"), as well as [application programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapplication_program_glosry.htm "Glossary Entry") and [application tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapplication_table_glosry.htm "Glossary Entry").
    
-   Communication components
    
    The communication components connect the AS instances to the [presentation layer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpresentation_layer_glosry.htm "Glossary Entry") of the [ABAP system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_system_glosry.htm "Glossary Entry"), or to other systems that themselves can be another AS ABAP or external systems. Examples of communication components are:
    
    -   The [ICM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicm_glosry.htm "Glossary Entry") for linking to browser-based [user interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_interface_glosry.htm "Glossary Entry") ([SAPUI5](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensapui5_glosry.htm "Glossary Entry"), [Web Dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenweb_dynpro_glosry.htm "Glossary Entry")) and to the Internet.
    -   The [RFC interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_interface_glosry.htm "Glossary Entry") for linking to other systems.
    -   A dispatcher for linking to [SAP GUI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gui_glosry.htm "Glossary Entry").
    
    There are different protocols for communication, such as HTTP, HTTPS, TCP, or SAP's RFC protocol.
    

For more information, see Application Server Infrastructure - ABAP.

ABAP program execution is organized in [sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_glosry.htm "Glossary Entry"), which can access different memory areas:

-   [Sessions and Memory Areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_organization.htm)
-   [User Sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_sessions.htm)
-   [Programs in the Internal Session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session.htm)

Continue
[Sessions and Memory Areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_organization.htm)
[User Sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_sessions.htm)
[Programs in the Internal Session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session.htm)


### abenmemory_organization.htm

---
title: "Sessions and Memory Areas"
description: |
  This section describes the sessions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_glosry.htm 'Glossary Entry') of an AS ABAP in which ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_organization.htm"
abapFile: "abenmemory_organization.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "abenmemory", "organization"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_oview.htm) →  [ABAP Programs on the AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenorganization_of_modules.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Sessions and Memory Areas, ABENMEMORY_ORGANIZATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Sessions and Memory Areas

This section describes the [sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_glosry.htm "Glossary Entry") of an AS ABAP in which ABAP programs are executed and the associated memory areas that can be accessed by an ABAP program. For a more general and technically more detailed description, see the documentation Memory Management in SAP Help Portal.

The following figure shows the general organization of sessions for ABAP programs and their memory areas up to the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") level:

![Figure](abdoc_memory1.gif)

-   [AS instance](#abenmemory-organization-1-------user-session---@ITOC@@ABENMEMORY_ORGANIZATION_2)
-   [ABAP Session](#abenmemory-organization-3-------internal-session---@ITOC@@ABENMEMORY_ORGANIZATION_4)

AS instance   

An [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") can be distributed across multiple [AS instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry"). If an AS ABAP is implemented using multiple AS instances, they are usually instantiated on different [host computers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_computer_glosry.htm "Glossary Entry"), which do not have to have the same operating system. However, multiple AS instances of one or more AS ABAP can also be instantiated on the same host computer. AS instances communicate with the [presentation layer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpresentation_layer_glosry.htm "Glossary Entry"), the [database layer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_layer_glosry.htm "Glossary Entry"), and with each other using the [message server](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_server_glosry.htm "Glossary Entry"). The most important components of an AS instance are its [work processes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwork_process_glosry.htm "Glossary Entry"), the number and [type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_glosry.htm "Glossary Entry") of which are determined when the AS ABAP is started. An [ABAP program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_glosry.htm "Glossary Entry") is executed by a suitable AS instance work process.

The transaction SM51 shows an overview of the AS instances of the current AS ABAP and on which host computers they are instantiated. The name of the current AS instance can be determined in an ABAP Program using the method GET\_INSTANCE\_NAME of the system class CL\_ABAP\_SYST. This name has the form hostname\_sysid\_instnr. Here, hostname is the name of the host computer of the AS instance, sysid is the name of the AS ABAP, and instnr is the instance number of the AS instance. The network name of the host computer on which the current AS instance is instantiated can be found in the [system field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-host.

Every AS instance has access to the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the AS ABAP. Every AS instance has its own [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry"). The ABAP runtime framework uses the shared memory for programs, program data, and buffers (for example, during [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry")). ABAP programs can store [shared objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_glosry.htm "Glossary Entry") and [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") in the shared memory.

Hint

The shared memory is frequently used and therefore may be a sparse resource, which can result in bottlenecks when explicitly storing data from ABAP programs.

Example

Gets the name of the current AS instance.

cl\_demo\_output=>display( cl\_abap\_syst=>get\_instance\_name( ) ).

User Session   

Logging on to an AS instance opens a [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry"). Logons take place using [SAP GUI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gui_glosry.htm "Glossary Entry"), the [RFC interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_interface_glosry.htm "Glossary Entry"), or [ICF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf_glosry.htm "Glossary Entry") (including [APC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_glosry.htm "Glossary Entry")). A user session is assigned a separate memory area, the [user memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_memory_glosry.htm "Glossary Entry"), which can be used as follows in ABAP programs:

-   The user memory stores [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry") that can be accessed using the statements [SET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_parameter.htm) and [GET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_parameter.htm).
-   The [ABAP Daemon Memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") is a subarea of the user memory in which [ABAP daemons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_glosry.htm "Glossary Entry") can store context information in [PCP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcp_glosry.htm "Glossary Entry") format.

The maximum number of user sessions is determined by the profile parameter rdisp/tm\_max\_no. The profile parameter rdisp/rfc\_max\_login determines which percentage of the sessions can be opened using the RFC interface.

For more information, see [User Sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_sessions.htm).

ABAP Session   

An [ABAP session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm "Glossary Entry") is opened for each user session. Each ABAP session is assigned its own memory area [ABAP memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_memory_glosry.htm "Glossary Entry"), in which [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be stored. The programs of a [call sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_sequence_glosry.htm "Glossary Entry") share access to these clusters and the data is retained for as long as the [top level transaction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentop_level_transaction_glosry.htm "Glossary Entry") of the call sequence remains. The [SAP Easy Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_easy_access_glosry.htm "Glossary Entry") program does not work as a top level transaction for the ABAP memory.

Additional ABAP sessions for a user session can be opened as follows:

-   Enter a transaction code after /o in the command field in the [toolbar](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensymbol_toolbar_glosry.htm "Glossary Entry").
-   Call the function module TH\_CREATE\_MODE.
-   Call a [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") during the processing of [asynchronous RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry"). In the RFC client, an additional ABAP session for communication with the SAP GUI is required.

A maximum of 16 ABAP sessions are possible per user session. The number of sessions that is actually possible for a system is determined by the profile parameter rdisp/max\_alt\_modes, whose default value is 16.

Hints

-   The [ABAP memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_memory_glosry.htm "Glossary Entry") can be used to transfer data between the programs in a [call sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_sequence_glosry.htm "Glossary Entry").
-   For logging and analysis purposes, each ABAP session has an [extended passport (EPP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenepp.htm) that contains constant values and that can be passed on to communication partners, such as other ABAP sessions or external interfaces, whereby modifiable values are set for the respective connection.

Internal Session   

Each [call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_call.htm) of an ABAP program creates a new [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session.htm), in which the called program is loaded.

An internal session contains a [session memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroll_area_glosry.htm "Glossary Entry") that is divided into the areas [heap](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheap_glosry.htm "Glossary Entry") and [stack](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstack_glosry.htm "Glossary Entry") from the perspective of an ABAP program. The modifiable [objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_glosry.htm "Glossary Entry") of the program live there. The non-modifiable data of the program is stored in the [PXA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpxa_glosry.htm "Glossary Entry"). The session memory contains references to the required data in the PXA. From a technical perspective, the session memory and the global PXA are stored in the shared memory of the AS instance where they managed by the SAP Memory Management.

In an ABAP session, there can be a maximum of nine internal sessions that always belong to a [call sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_sequence_glosry.htm "Glossary Entry"). Data from the ABAP memory is always assigned to a call sequence.

On 64-bit platforms, an internal session can theoretically require up to 4 TB of memory. The practical upper limit is usually below the theoretical limit, since the actual physically installed main memory is the maximum available and divided up among all users.

Further information about the way ABAP programs are organized in an internal session can be found in [Programs in the Internal Session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session.htm).

Hints

-   The available session memory is defined using the [profile parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") described under Session Memory. It is also possible to define a percentage of the available memory as a limit, over which a [runtime warning](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_warning_glosry.htm "Glossary Entry") occurs.
-   Instances of classes, except for [shared objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_glosry.htm "Glossary Entry"), are located in the internal session. It is therefore not possible to store references to objects in the ABAP memory.
-   On 32-bit platforms, that are not supported any more, the theoretical upper limit for the memory that an internal session could require was 4GB.
-   Class CL\_SESSION\_INFO returns information about the current session.

Example

Usage of CL\_SESSION\_INFO.

TRY.
    FINAL(session\_info) = NEW cl\_session\_info( )->get\_info( ).
  CATCH cx\_ssi\_exception.
    ...
ENDTRY.


### abenuser_sessions.htm

---
title: "User Sessions"
description: |
  Each execution of an ABAP program takes place in an internal session(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm 'Glossary Entry') in an ABAP session(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm 'Glossary En
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_sessions.htm"
abapFile: "abenuser_sessions.htm"
keywords: ["select", "update", "do", "if", "try", "method", "class", "data", "types", "abenuser", "sessions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_oview.htm) →  [ABAP Programs on the AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenorganization_of_modules.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: User Sessions, ABENUSER_SESSIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

User Sessions

Each execution of an ABAP program takes place in an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") in an [ABAP session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm "Glossary Entry") within an [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry") [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry"). For this, at least one ABAP session is open in each user session.

A user session is opened whenever an [ABAP user](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_user_glosry.htm "Glossary Entry") [logs on](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_glosry.htm "Glossary Entry") to an [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"). Here, the following fixed properties of the user session are defined:

-   [User name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_name_glosry.htm "Glossary Entry")
    
    The user name is assigned a [user master record](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_master_record_glosry.htm "Glossary Entry") and [authorizations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_glosry.htm "Glossary Entry") that affect the behavior of an ABAP program. The current user name is returned by the method GET\_USER\_NAME of the class CL\_ABAP\_SYST and is available in the [system field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uname.
    
-   [Client ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_identifier_glosry.htm "Glossary Entry")
    
    The client ID determines the current [client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_glosry.htm "Glossary Entry"). When database content is accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"), [implicit client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_client_handling.htm) is used by default where only the data of the current client is accessed. The current client is returned by the method GET\_CLIENT of the class CL\_ABAP\_SYST and is available in the [system field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-mandt.
    
-   [Logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry")
    
    The logon language determines the access to certain text repositories and is also the [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry") by default. The current logon language is returned by the method GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST. The [system field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-langu, on the other hand, contains the text environment language of the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"), which can also be set to a different value.
    

There are different types of user sessions in which different rules and restrictions apply when ABAP programs are executed:

-   [Dialog sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_session_glosry.htm "Glossary Entry")
    
    Dialog sessions are used for [dialog processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_processing_glosry.htm "Glossary Entry") with the [SAP GUI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gui_glosry.htm "Glossary Entry"). The ABAP programs are controlled by classic [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") and their special forms, [selection screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") and classic [lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclassic_list_glosry.htm "Glossary Entry").
    
-   [Background sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_session_glosry.htm "Glossary Entry")
    
    Background sessions are used for [background processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), namely the execution of ABAP programs in the background without user interaction.
    
-   [Update sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_session_glosry.htm "Glossary Entry")
    
    Update sessions are used for classic non-local [updates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_glosry.htm "Glossary Entry"), namely the execution of registered [update function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") in a dedicated work process.
    
-   [RFC sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_session_glosry.htm "Glossary Entry")
    
    RFC sessions are used for [RFC processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), namely the execution of remotely called function modules ([RFMs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfm_glosry.htm "Glossary Entry")).
    
-   [ICF sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf_session_glosry.htm "Glossary Entry")
    
    ICF sessions are used for [ICF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf_processing_glosry.htm "Glossary Entry") processing, namely the processing of HTTP/HTTPS or SMTP queries to the AS ABAP in a handler class.
    
-   [APC sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_session_glosry.htm "Glossary Entry")
    
    APC sessions are used for [APC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_processing_glosry.htm "Glossary Entry") processing, namely the processing of WebSocket or TCP queries to the AS ABAP in a handler class.
    
-   [ABAP daemon sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry")
    
    ABAP daemon sessions are used for [ABAP daemon processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry"), namely the execution of an [ABAP daemon](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_glosry.htm "Glossary Entry") that is automatically restarted after a program termination.
    

The [user memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_memory_glosry.htm "Glossary Entry") is assigned a user session as a dedicated memory area for [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry") and an [ABAP daemon memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") as a subarea.

Hint

From a user session, it is possible to programmatically open further user sessions on the same or another AS instance. For example:

-   A [remote function call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenremote_function_call_glosry.htm "Glossary Entry") with the destination NONE or SELF opens a user session on the same AS instance.
-   Calls of [update modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_module_glosry.htm "Glossary Entry") using [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm) or execution of executable programs in [background programming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm "Glossary Entry") open separate user sessions.
-   ICF and APC clients can address the current or another AS instance as ICF or APC servers and thus open new user sessions.


### abeninternal_session.htm

---
title: "Programs in the Internal Session"
description: |
  The following figure shows the organization of programs within an internal session(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm 'Glossary Entry') of an ABAP session(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.ht
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session.htm"
abapFile: "abeninternal_session.htm"
keywords: ["do", "if", "try", "class", "data", "abeninternal", "session"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_oview.htm) →  [ABAP Programs on the AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenorganization_of_modules.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Programs in the Internal Session, ABENINTERNAL_SESSION, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Programs in the Internal Session

The following figure shows the organization of programs within an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") of an [ABAP session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm "Glossary Entry") in a [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry") of an [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry").

![Figure](abdoc_memory2.gif)

-   [Program Groups](#abeninternal-session-1-----------main-program-group---@ITOC@@ABENINTERNAL_SESSION_2)
    -   [Additional Program Group](#abeninternal-session-3-----------main-program-of-a-program-group---@ITOC@@ABENINTERNAL_SESSION_4)
    -   [Programs Loaded into a Program Group](#abeninternal-session-5-----------data-objects---@ITOC@@ABENINTERNAL_SESSION_6)
    -   [Class Instances](#abeninternal-session-7-------interface-work-areas---@ITOC@@ABENINTERNAL_SESSION_8)
-   [Dynpros, Lists, and GUI Statuses](#@@ITOC@@ABENINTERNAL_SESSION_9)

Program Groups   

Multiple programs organized in program groups can be loaded into an internal session. Once an internal session is exited, it is closed. It is then no longer possible to access data and objects of this internal session.

Main Program Group   

When an internal session is created by [calling an ABAP program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_call.htm) using [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm) or a [transaction code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_code_glosry.htm "Glossary Entry"), the main program group is created and the called program is its main program. The entire internal session exists for as long as the main program of the main program group is being executed. This can be an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), a [module pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodul_pool_glosry.htm "Glossary Entry"), or a [function pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_pool_glosry.htm "Glossary Entry").

Additional Program Group   

Each time a new [class pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_pool_glosry.htm "Glossary Entry") or a new [function pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_pool_glosry.htm "Glossary Entry") is loaded by external use, an additional program group is created and the class pool or the function pool is the main program of the additional program group. An external usage is usually an access to components that are exposed by class pool or function group (these are the visible components of the global class or function module), however, can also be an access to local components, such as when a type is specified using [absolute type names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"). An additional program group is preserved for the entire lifetime of the internal session.

Main Program of a Program Group   

The first program loaded of a program group is the main program of this group. The main program of a main program group is the first program loaded into the internal session by a program call (this program is an executable program, module pool, or function pool). The main program of an additional program group is a class pool or a function pool for which the additional program group is created during its loading.

Programs Loaded into a Program Group   

When programs that are not function pools or class pools are loaded by an external usage, they do not form additional program groups; instead they are loaded into the program group of the user. This happens, for example:

-   During the external call of subroutines that are defined in executable programs, module pools or subroutine pools
-   When using the dynpro statement [CALL SUBSCREEN sub\_area INCLUDING prog](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpcall.htm), if the dynpro is not defined in a function pool
-   In dynamic access to a local data type or object type of an executable program, module pool, or a subroutine using [absolute type names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabsolute_typename_glosry.htm "Glossary Entry")
-   For statements such as [SET PF-STATUS OF PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_dynpro.htm), if the program of the required component is not a function pool.

Hints

-   To assign a program to a program group, the [program-initiating statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_init_statement_glosry.htm "Glossary Entry") and not the [program type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_type_glosry.htm "Glossary Entry") is of importance. For example, if the statement [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfunction-pool.htm) is used in a subroutine pool instead of [PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprogram.htm), the program creates an additional program group when it is loaded by external usage.
-   The assignment of an additional program to its program group is particularly important if procedures of this program are [called externally](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_groups.htm), since all the programs of a program group use the interface work areas, the dynpros, lists, and GUI status of the main program (see below for more information).

Data Objects   

The [data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_object_glosry.htm "Glossary Entry") of a program, except for the [interface work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"), belong exclusively to their program and are only visible there. A loaded program exists for as long as the internal session exists. After returning from a program, its data objects are retained and are available when a [procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") of the program is called again.

Class Instances   

Objects as instances of classes can be used by all programs (and objects) of an internal session. An object exists for as long as there are users for and hence references to the object.

Hint

This means that references to objects of the internal session can be passed to externally called procedures.

Interface Work Areas   

Data objects declared using [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm) or [DATA BEGIN*|*END OF COMMON PART ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_common.htm) are [interface work areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"). They are only created once per program group and are shared by all programs of a program group together.

Hint

The assignment of a program to a program group, and thus the definition of the other programs with which it shares the interface work area, can depend on the usage sequence.

Dynpros, Lists, and GUI Statuses   

Only the [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") of the main program of a program group can be called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_screen.htm). After an internal session is loaded, these are the dynpros of the main program of the main program group. The main programs (function pools) of additional program groups can also call their own dynpros.

[Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclassic_list_glosry.htm "Glossary Entry") are always assigned to the current [dynpro sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") and therefore also to the main program of the program group.

By default, [SET PF-STATUS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_dynpro.htm) is used to access the [GUI status](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_status_glosry.htm "Glossary Entry") of the main program of a program group and uses its data objects for dynamic texts.

All programs of a program group work with the dynpros, lists, and GUI status of the main program by default. A statement CALL SCREEN in an externally called subroutine, for example, never calls a dynpro of its own compilation unit. The dialog modules and list event blocks of the main program are executed.

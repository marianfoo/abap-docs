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
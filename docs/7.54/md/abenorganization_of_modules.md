  

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
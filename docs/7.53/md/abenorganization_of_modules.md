  

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
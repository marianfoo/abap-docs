  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_oview.htm) → 

ABAP Programming Language, Overview

ABAP is a programming language developed by SAP for the development of business applications with the [ABAP development environment (ABAP DE)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dev_envir_glosry.htm "Glossary Entry") of an [ABAP platform](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_platform_glosry.htm "Glossary Entry").

-   [ABAP on the Application Server ABAP](#@@ITOC@@ABENABAP_OVERVIEW_1)
-   [Programming Models](#@@ITOC@@ABENABAP_OVERVIEW_2)
-   [Database Access](#@@ITOC@@ABENABAP_OVERVIEW_3)
-   [Special Characteristics](#@@ITOC@@ABENABAP_OVERVIEW_4)
-   [Multilingualism](#@@ITOC@@ABENABAP_OVERVIEW_5)

ABAP on the Application Server ABAP

ABAP is the programming interface of the [Application Server ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") (AS ABAP) of an [ABAP system](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_system_glosry.htm "Glossary Entry").

-   Before the ABAP programming language can be used, an AS ABAP must be installed as the [application layer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_layer_glosry.htm "Glossary Entry") of an [ABAP system](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_system_glosry.htm "Glossary Entry"). The AS ABAP provides the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") in which ABAP programs are executed independently of the platform.
-   AS ABAP must be connected to a [database layer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_layer_glosry.htm "Glossary Entry") or to a [database system](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_system_glosry.htm "Glossary Entry") where its central dataset is stored in a [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry").
-   UI-based access requires a [presentation layer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpresentation_layer_glosry.htm "Glossary Entry") that displays the AS ABAP user interface (in [SAP GUI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_gui_glosry.htm "Glossary Entry") or a Web browser).

AS ABAP also has the following communication components:

-   [RFC Interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_interface_glosry.htm "Glossary Entry")
    
    This is the classic functional interface of AS ABAP. A remote function call is a call of a function in a system other than the one in which the calling program is running. Calls are possible between different AS ABAP or between an AS ABAP and an external system. On an AS ABAP, the functions are implemented using function modules. In external systems, specially programmed functions are called whose interface simulates a function module.
    
-   [Internet Communication Manager (ICM)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternet_con_man_glosry.htm "Glossary Entry")
    
    The Internet Communication Manager (ICM) is a process of the AS ABAP that allows it to communicate directly with the Internet using HTTP, HTTPS, or SMTP. The ICM is used to connect Web-based presentation components such as [SAPUI5](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensapui5_glosry.htm "Glossary Entry"), [Web Dynpro ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenweb_dynpro_glosry.htm "Glossary Entry"), and [BSP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbsp_glosry.htm "Glossary Entry"). The ICM also allows the use of the AS ABAP as a client and as a server for Web services. The ICM is accessed from ABAP programs using the classes and interfaces of the [Internet Communication Framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternet_con_fra_glosry.htm "Glossary Entry") (ICF).
    
-   [ABAP Channels](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_channel_glosry.htm "Glossary Entry")
    
    ABAP Channels are a framework for event-based communication between AS instances and the Internet. [ABAP Messaging Channels (AMC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry") are used to exchange messages between ABAP programs on different AS instances, whereas [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_push_channels_glosry.htm "Glossary Entry") enable bidirectional communication between an AS ABAP and the Internet using the WebSocket protocol or the TCP socket protocol.
    

The essential role of ABAP programs on the AS ABAP involves the processing and formatting of data from the database layer and its transfer to or the receipt of input from the presentation layer or the communication components.

For more information about the organization of ABAP programs on the AS ABAP, see [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenorganization_of_modules.htm).

Programming Models

ABAP supports the following:

-   An object-oriented programming model that is based on [classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_glosry.htm "Glossary Entry") and [interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoo_intf_glosry.htm "Glossary Entry") of [ABAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_glosry.htm "Glossary Entry").
-   A procedural programming model that is based on [function modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_module_glosry.htm "Glossary Entry") and [subroutines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubroutine_glosry.htm "Glossary Entry")

Both models are interoperable.

Hint

[ABAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_oview.htm) is the recommended approach for both new projects and the redesign of existing projects.

Database Access

One of the fundamental properties of ABAP as a programming language for business applications is the access to database tables that is fully integrated into the language.

-   Data modeling
    
    ABAP data modeling makes it possible to create data models for business applications that are defined on the database:
    
    -   The [ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") is a persistent repository for data types and their relationships that are visible and can be used in all other development objects. The ABAP Dictionary manages the database tables, views, and lock objects of the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry").
    -   The [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry") implement the SAP CDS concept for the AS ABAP. A platform-independent [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_glosry.htm "Glossary Entry") make it possible to define [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") such as [CDS views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") or [CDS table functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and associated [CDS roles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry") and their semantic enrichment.
-   Database access
    
    Access to data in database tables is fully integrated in ABAP:
    
    -   [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") makes it possible to access the database objects defined in the ABAP Dictionary or in ABAP CDS with implicit [client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_handling_glosry.htm "Glossary Entry"). This access is platform-independent and integrated into the language. The performance can be optimized by using the [table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry") integrated into the ABAP runtime framework.
    -   [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_glosry.htm "Glossary Entry") can be used to manage and call database procedures and database functions of the [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry").
    -   [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") enables platform-dependent access to databases. [ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_glosry.htm "Glossary Entry") enables a general class-based access to all databases.

Special Characteristics

ABAP is a 4GL language developed specifically for the mass processing of data in business applications and, in addition to integrated database access, has the following characteristics when compared with the elementary languages in which such functions are usually stored in libraries:

-   [Internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm "Glossary Entry") for the dynamic storage and processing of tabular mass data in the working memory.
-   An [LUW concept](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenluw_glosry.htm "Glossary Entry") integrated into the ABAP runtime framework that allows many users to access the [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry") simultaneously.
-   An integrated interface of the language to other programming environments using [Remote Function Call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenremote_function_call_glosry.htm "Glossary Entry").
-   An integrated interface of the language to [XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxml_glosry.htm "Glossary Entry").

The integration of such functions into the language is particularly beneficial for static checks and performance of programs. In return, this means that ABAP also contains considerably more language elements than an elementary programming language.

Multilingualism

ABAP programs can be programmed as fully language-independent by removing language-specific program parts from the source code and then reloading them during program execution in accordance with the language environment. A [text environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_environment_glosry.htm "Glossary Entry") determines the exact program behavior at runtime, for example the order in which text is sorted.
  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Programming%20Language%2C%20Overview%2C%20ABENABAP_OVERVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Programming Language, Overview

ABAP is a programming language developed by SAP for the development of business applications with the [ABAP development environment (ABAP DE)](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry") of an [ABAP Platform](javascript:call_link\('abenabap_platform_glosry.htm'\) "Glossary Entry").

-   [ABAP on the Application Server ABAP](#abenabap-overview-1-------programming-models---@ITOC@@ABENABAP_OVERVIEW_2)
-   [Database Access](#abenabap-overview-3-------special-characteristics---@ITOC@@ABENABAP_OVERVIEW_4)
-   [Multilingualism](#@@ITOC@@ABENABAP_OVERVIEW_5)

ABAP on the Application Server ABAP   

ABAP is the programming interface of the [Application Server ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") (AS ABAP) of an [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry").

-   Before the ABAP programming language can be used, an AS ABAP must be installed as the [application layer](javascript:call_link\('abenapplication_layer_glosry.htm'\) "Glossary Entry") of an [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry"). The AS ABAP provides the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") in which ABAP programs are executed independently of the actual [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry").
-   AS ABAP must be connected to a [database layer](javascript:call_link\('abendatabase_layer_glosry.htm'\) "Glossary Entry") or to a [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry") where its central dataset is stored in a [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry").
-   UI-based access requires a [presentation layer](javascript:call_link\('abenpresentation_layer_glosry.htm'\) "Glossary Entry") that displays the AS ABAP user interface (in [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry") or a Web browser).

AS ABAP also has the following communication components:

-   [RFC Interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry")
    
    This is the classic functional interface of AS ABAP. A remote function call is a call of a function in a system other than the one in which the calling program is running. Calls are possible between different AS ABAP or between an AS ABAP and an external system. On an AS ABAP, the functions are implemented using function modules. In external systems, specially programmed functions are called whose interface simulates a function module.
    
-   [Internet Communication Manager (ICM)](javascript:call_link\('abeninternet_con_man_glosry.htm'\) "Glossary Entry")
    
    The Internet Communication Manager (ICM) is a process of the AS ABAP that allows it to communicate directly with the Internet using HTTP, HTTPS, or SMTP. The ICM is used to connect Web-based presentation components such as [SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry"), [Web Dynpro ABAP](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry"), and [BSP](javascript:call_link\('abenbsp_glosry.htm'\) "Glossary Entry"). The ICM also allows the use of the AS ABAP as a client and as a server for Web services. The ICM is accessed from ABAP programs using the classes and interfaces of the [Internet Communication Framework](javascript:call_link\('abeninternet_con_fra_glosry.htm'\) "Glossary Entry") (ICF).
    
-   [ABAP Channels](javascript:call_link\('abenabap_channel_glosry.htm'\) "Glossary Entry")
    
    ABAP Channels are a framework for event-based communication between AS instances and the Internet. [ABAP Messaging Channels (AMC)](javascript:call_link\('abenabap_messaging_channels_glosry.htm'\) "Glossary Entry") are used to exchange messages between ABAP programs on different AS instances, whereas [ABAP Push Channels (APC)](javascript:call_link\('abenabap_push_channels_glosry.htm'\) "Glossary Entry") enable bidirectional communication between an AS ABAP and the Internet using the WebSocket protocol or the TCP socket protocol.
    

The essential role of ABAP programs on the AS ABAP involves the processing and formatting of data from the database layer and its transfer to or the receipt of input from the presentation layer or the communication components.

For more information about the organization of ABAP programs on the AS ABAP, see [ABAP Programs in AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)).

Programming Models   

ABAP supports the following:

-   An object-oriented programming model that is based on [classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") and [interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry") of [ABAP Objects](javascript:call_link\('abenabap_objects_glosry.htm'\) "Glossary Entry").
-   A procedural programming model that is based on [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") and [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry")

Both models are interoperable.

Hint

[ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) is the recommended approach for both new projects and the redesign of existing projects.

Database Access   

One of the fundamental properties of ABAP as a programming language for business applications is the access to database tables that is fully integrated into the language.

-   Data modeling
    
    ABAP data modeling makes it possible to create data models for business applications that are defined on the database:
    
    -   The [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") is a persistent repository for data types and their relationships that are visible and can be used in all other development objects. The ABAP Dictionary manages the database tables, views, and lock objects of the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry").
    -   The [ABAP Core Data Services](javascript:call_link\('abenabap_core_data_services_glosry.htm'\) "Glossary Entry") implement the SAP CDS concept for the AS ABAP. A platform-independent [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") make it possible to define [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") such as [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and associated [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") and their semantic enrichment.
-   Database access
    
    Access to data in database tables is fully integrated in ABAP:
    
    -   [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") makes it possible to access the database objects defined in the ABAP Dictionary or in ABAP CDS with implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"). This access is platform-independent and integrated into the language. The performance can be optimized by using the [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") integrated into the ABAP runtime framework.
    -   [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") can be used to manage and call database procedures and database functions of the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").
    -   [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") enables platform-dependent access to databases. [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") enables a general class-based access to all databases.

Special Characteristics   

ABAP is a 4GL language developed specifically for the mass processing of data in business applications and, in addition to integrated database access, has the following characteristics when compared with the elementary languages in which such functions are usually stored in libraries:

-   [Internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") for the dynamic storage and processing of tabular mass data in the working memory.
-   An [LUW concept](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") integrated into the ABAP runtime framework that allows many users to access the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") simultaneously.
-   An integrated interface of the language to other programming environments using [Remote Function Call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry").
-   An integrated interface of the language to [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry").

The integration of such functions into the language is particularly beneficial for static checks and performance of programs. In return, this means that ABAP also contains considerably more language elements than an elementary programming language.

Multilingualism   

ABAP programs can be programmed as fully language-independent by removing language-specific program parts from the source code and then reloading them during program execution in accordance with the language environment. A [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") determines the exact program behavior at runtime, for example the order in which text is sorted.
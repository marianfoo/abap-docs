  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_oview.htm) → 

ABAP Programming Language - Overview

ABAP is a programming language developed by SAP for the development of business applications in the SAP environment. The [ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_glosry.htm "Glossary Entry") component makes object-oriented programming possible.

-   [ABAP on Application Server ABAP](#@@ITOC@@ABENABAP_OVERVIEW_1)

-   [Programming Models](#@@ITOC@@ABENABAP_OVERVIEW_2)

-   [Database Accesses](#@@ITOC@@ABENABAP_OVERVIEW_3)

-   [Special Characteristics](#@@ITOC@@ABENABAP_OVERVIEW_4)

-   [Multilingual Capability](#@@ITOC@@ABENABAP_OVERVIEW_5)

ABAP on Application Server ABAP

ABAP is the programming interface of [Application Server ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") (AS ABAP) in an [ABAP system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_system_glosry.htm "Glossary Entry").

-   Before the ABAP programming language can be used, an AS ABAP must be installed as the [application layer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_layer_glosry.htm "Glossary Entry") of an [ABAP system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_system_glosry.htm "Glossary Entry"). AS ABAP provides the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") in which ABAP programs can run independently of the platform.

-   AS ABAP must be associated with a [database layer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_layer_glosry.htm "Glossary Entry") or a [database system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_system_glosry.htm "Glossary Entry") where its central data is saved in a [standard database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry").

-   UI-based access requires a [presentation layer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpresentation_layer_glosry.htm "Glossary Entry") that displays the AS ABAP user interface (in [SAP GUI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_gui_glosry.htm "Glossary Entry") or a Web browser).

Alongside these elements, AS ABAP also has the following communication components:

-   [RFC Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_interface_glosry.htm "Glossary Entry")

This is the classical functional interface of AS ABAP. A Remote Function Call is a call of a function in a system other than the one in which the calling program is running. Calls are possible between different AS ABAPs or between an AS ABAP and an external system. On AS ABAP, the functions are realized in function modules. In external systems, specially programmed functions are called whose interface simulates a function module.

-   [Internet Communication Manager (ICM)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternet_con_man_glosry.htm "Glossary Entry")

Internet Communication Manager (ICM) is a process of AS ABAP that enables AS ABAP to communicate directly with the Internet using HTTP/HTTPS/SMTP. ICM is used to connect Web-based presentation components such as [SAPUI5](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensapui5_glosry.htm "Glossary Entry"), [Web Dynpro ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenweb_dynpro_glosry.htm "Glossary Entry"), and [BSP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbsp_glosry.htm "Glossary Entry"). ICM also enables an AS ABAP to be used both as a client and as a server for Web services. ICM is accessed from within ABAP programs using the classes and interfaces of [Internet Communication Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternet_con_fra_glosry.htm "Glossary Entry") (ICF).

-   [ABAP Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_channel_glosry.htm "Glossary Entry")

ABAP Channels are a framework for event-based communication between AS Instancess and the Internet. [ABAP Messaging Channels (AMC)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry") are used to exchange messages between ABAP programs on different AS Instancess. [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_push_channels_glosry.htm "Glossary Entry"), on the other hand, enable bidirectional communication between AS ABAP and the Internet using the WebSocket protocol or the TCP socket protocol.

The main role of ABAP programs in AS ABAP is the processing and formatting of data from the database layer and its transfer to and receipt of input from the presentation layer or the communication components.

More information about the organization of ABAP programs in AS ABAP can be found in [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenorganization_of_modules.htm).

Programming Models

ABAP supports the following:

-   An object-oriented programming model based on [classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_glosry.htm "Glossary Entry") and [interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_oo_glosry.htm "Glossary Entry")

-   A procedural programming model based on [function modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry") and [subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubroutine_glosry.htm "Glossary Entry")

Both modules are interoperable.

Note

[ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_oview.htm) is the recommended approach for both new projects and when redesigning existing projects.

Database Accesses

One of the fundamental properties of ABAP as a programming language for business applications is that access to database tables is fully integrated into the language.

-   Data modeling

ABAP data modeling makes it possible to create data models for business applications that have variants on the database:

-   [ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") is a persistent repository for data types and their dependencies. They are visible and can be used in all other development objects. ABAP Dictionary manages the database tables, views, and lock objects in the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry").

-   [ABAP Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry") expand ABAP Dictionary by adding an implementation of the CDS concept for AS ABAP. A (mostly) cross-platform [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") and [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry") make it possible to define [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and associated [CDS roles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry"), plus semantic enrichment.

-   Database Access

Access to data in database tables is fully integrated in ABAP:

-   [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") makes it possible to access database objects defined in ABAP Dictionary or ABAP CDS with implicit [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_glosry.htm "Glossary Entry"). This access is cross-platform and integrated into the language. The performance can be optimized using the [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry") integrated into the ABAP runtime environment.

-   [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry") can be used to manage and call database procedures and database functions from the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry").

-   [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_glosry.htm "Glossary Entry") makes platform-specific access to databases possible. Here, [ADBC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_glosry.htm "Glossary Entry") enables general class-based access to databases.

Special Characteristics

ABAP is a 4GL language developed specifically for the mass processing of data in business applications. Alongside integrated database access, it offers the following characteristics when compared with elementary languages (where these functions are usually stored in libraries):

-   [Internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_table_glosry.htm "Glossary Entry") for dynamic storage and processing of mass table data in the working memory.

-   An [LUW concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenluw_glosry.htm "Glossary Entry") integrated into the ABAP runtime environment, where many users can access the [standard database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry") simultaneously.

-   The language has an integrated interface to other programming environments using [Remote Function Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenremote_function_call_glosry.htm "Glossary Entry").

-   The language has an integrated interface to [XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxml_glosry.htm "Glossary Entry").

The integration of these functions into the language is a particular benefit for the static check-enablement and performance of programs. In return, this means that ABAP also contains considerably more language elements than an elementary programming language.

Multilingual Capability

The multilingual capability of ABAP programs is enabled by the extraction of language-specific program components from the source code, which are then reloaded when the program executes in accordance with the environment. A [text environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_environment_glosry.htm "Glossary Entry") determines the precise program behavior at runtime, for example the order in which text is sorted.
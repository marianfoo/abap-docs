  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20-%20Keyword%20Documentation%2C%20ABENABAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP - Keyword Documentation

This documentation describes the syntax and semantics of the keywords of programming languages provided by SAP on an [Application Server ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") (AS ABAP) of an [ABAP system](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_system_glosry.htm "Glossary Entry") implementing an [ABAP Platform](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_platform_glosry.htm "Glossary Entry") for [classic ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclassic_abap_glosry.htm "Glossary Entry"). It also provides an introductory description of the environment of these languages and of language-related frameworks and the corresponding system classes.

The language version [Standard ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_abap_glosry.htm "Glossary Entry") and the frameworks for [classic ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclassic_abap_glosry.htm "Glossary Entry") cover all possibilities of an ABAP Platform.

-   Modeling
    -   [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm)
        
        ABAP Dictionary is a persistent repository of metadata used to describe data types, database tables, views, and similar objects that can be used in development objects such as [ABAP programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_glosry.htm "Glossary Entry") or [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). This section of the ABAP keyword documentation provides a full description of the most important ABAP Dictionary objects that are relevant for the programming languages. It also includes documentation for the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") used to define certain dictionary objects in the ABAP development tools for Eclipse (ADT).
        
    -   [ABAP - Core Data Services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm)
        
        The ABAP Core Data Services (ABAP CDS) are the ABAP-specific implementation of SAP's [CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_glosry.htm "Glossary Entry") concept. They are used to develop data models that go far beyond the capabilities of ABAP Dictionary. CDS entities can access ABAP Dictionary objects and can be used in ABAP programs. This section of the ABAP keyword documentation introduces the concepts of ABAP CDS and provides full descriptions of the programming languages used to define [CDS objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_object_glosry.htm "Glossary Entry") in the ABAP development tools for Eclipse (ADT), such as [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [CDS DCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [CDS SDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sdl_glosry.htm "Glossary Entry"), or [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry").
        
-   Application Programming
    -   [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm)
        
        [ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glosry.htm "Glossary Entry") is the main programming language of the [ABAP development environment (ABAP DE)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dev_envir_glosry.htm "Glossary Entry") provided by an [ABAP Platform](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_platform_glosry.htm "Glossary Entry"). It is the namesake for the [Application Server ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") (or AS ABAP) and many of its components. ABAP is the programming interface of an [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") and is used for the development of system programs and application programs that are usually based on objects in ABAP Dictionary or in ABAP CDS. This section of the ABAP keyword documentation provides a full description of the ABAP programming language and its object-oriented part, [ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects_glosry.htm "Glossary Entry"). It also provides descriptions of the XML-based language elements for [Simple Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensimple_transformation_glosry.htm "Glossary Entry") and the language elements of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"), which can be used only in combination with ABAP.
        
    -   [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm)
        
        The [ABAP RESTful Application Programming Model (RAP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry") is a programming model that is [RESTful](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestful_glosry.htm "Glossary Entry") or that meets the requirements of a [REST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrest_glosry.htm "Glossary Entry") architecture. In ABAP RAP, [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") plays the role of a stateless Web server. [OData](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenodata_glosry.htm "Glossary Entry") serves as the RESTful protocol for requests from Web clients and the state of a session can be saved to the [standard database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The modeling is based on [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") and special [RAP objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_rap_object_glosry.htm "Glossary Entry"). This section of the ABAP keyword documentation describes the modeling, implementation, publication, and consumption of [RAP business objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry"), including [RAP business services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_service_glosry.htm "Glossary Entry"), [RAP behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"), and [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") for providing and consuming RAP BOs.
        
-   Additional Information
    -   [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm)
        
        Rules and hints on using ABAP.
        
    -   [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_security.htm)
        
        Overview of potential security risks in ABAP programs.
        
    -   [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm)
        
        Rules on how to develop robust ABAP programs using [released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreleased_api_glosry.htm "Glossary Entry").
        
    -   [ABAP - Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm)
        
        List of release-specific changes and enhancements to ABAP and the other programming languages.
        
-   Alphabetic Directories
    -   [ABAP - Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm)
        
        Terms in ABAP and their explanations.
        
    -   [ABAP - Index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_index.htm)
        
        Alphabetic index of the language elements of all programming languages described in the ABAP keyword documentation. If not noted otherwise, language elements are part of the ABAP programming language. Language elements in the other programming languages are noted accordingly.
        
    -   [ABAP - Subject Directory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_subjects.htm)
        
        Alphabetic index for searching by subject area.
        
    -   [ABAP - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_examples.htm)
        
        Alphabetic list of executable ABAP example programs.
        

Hint

The programs and program extracts presented in the ABAP keyword documentation are only syntax examples and are not intended for direct use in a production system environment. The source texts of the examples are primarily intended to provide a better explanation and visualization of the syntax and semantics of ABAP statements and not to solve concrete programming tasks. For production application programs, a dedicated solution should therefore always be worked out for each individual case.

The database tables of the flight data model used in the example programs can be filled using the program SAPBC\_DATA\_GENERATOR.
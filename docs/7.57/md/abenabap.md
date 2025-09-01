---
title: "ABAP - Keyword Documentation"
description: |
  The ABAP keyword documentation describes the syntax and semantics of the keywords of programming languages provided by SAP on an Application Server ABAP(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm 'Glossary Entry') (AS ABAP) of an ABAP system(https://help.sa
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm"
abapFile: "abenabap.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenabap"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP - Keyword Documentation, ABENABAP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

ABAP - Keyword Documentation

The ABAP keyword documentation describes the syntax and semantics of the keywords of programming languages provided by SAP on an [Application Server ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") (AS ABAP) of an [ABAP system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_system_glosry.htm "Glossary Entry") implementing an [ABAP Platform](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_platform_glosry.htm "Glossary Entry"). It also provides an introductory description of the environment of these languages and of language-related frameworks and the corresponding system classes.

-   Modeling
    -   [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm)
        
        ABAP Dictionary is a persistent repository of metadata used to describe data types, database tables, views, and similar objects that can be used in development objects such as [ABAP programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_glosry.htm "Glossary Entry") or [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry"). This section of the ABAP keyword documentation provides a full description of the most important ABAP Dictionary objects that are relevant for the programming languages. It also includes documentation for the [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") used to define certain dictionary objects in the ABAP Development Tools (ADT).
        
    -   [ABAP - Core Data Services](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm)
        
        The ABAP Core Data Services (ABAP CDS) are the ABAP-specific implementation of SAP's [CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_glosry.htm "Glossary Entry") concept. They are used to develop data models that go far beyond the capabilities of ABAP Dictionary. CDS entities can access ABAP Dictionary objects and can be used in ABAP programs. This section of the ABAP keyword documentation introduces the concepts of ABAP CDS and provides full descriptions of the programming languages used to define [CDS objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_object_glosry.htm "Glossary Entry") in the ABAP Development Tools (ADT), such as [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [CDS DCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry"), [CDS SDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sdl_glosry.htm "Glossary Entry"), or [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry").
        
-   Application Programming
    -   [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm)
        
        [ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glosry.htm "Glossary Entry") is the main programming language of the [ABAP development environment (ABAP DE)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dev_envir_glosry.htm "Glossary Entry") provided by an [ABAP Platform](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_platform_glosry.htm "Glossary Entry"). It is the namesake for the [Application Server ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") (or AS ABAP) and many of its components. ABAP is the programming interface of an [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") and is used for the development of system programs and application programs that are usually based on objects in ABAP Dictionary or in ABAP CDS. This section of the ABAP keyword documentation provides a full description of the ABAP programming language and its object-oriented part, [ABAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_glosry.htm "Glossary Entry"). It also provides descriptions of the XML-based language elements for [Simple Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensimple_transformation_glosry.htm "Glossary Entry") and the language elements of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"), which can be used only in combination with ABAP.
        
-   Additional Information
    -   [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm)
        
        Rules and hints on using ABAP.
        
    -   [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_security.htm)
        
        Overview of potential security risks in ABAP programs.
        
    -   [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_strict_rules.htm)
        
        Rules on how to develop robust ABAP programs using [released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry").
        
    -   [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm)
        
        List of release-specific changes and enhancements to ABAP and the other programming languages.
        
-   Alphabetic Directories
    -   [ABAP - Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm)
        
        Terms in ABAP and their explanations.
        
    -   [ABAP - Index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_index.htm)
        
        Alphabetic index of the language elements of all programming languages described in the ABAP keyword documentation. If not noted otherwise, language elements are part of the ABAP programming language. Language elements in the other programming languages are noted accordingly.
        
    -   [ABAP - Subject Directory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_subjects.htm)
        
        Alphabetic index for searching by subject area.
        
    -   [ABAP - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_examples.htm)
        
        Alphabetic list of executable ABAP example programs.
        

Hint

The programs and program extracts presented in the ABAP keyword documentation are only syntax examples and are not intended for direct use in a production system environment. The source texts of the examples are primarily intended to provide a better explanation and visualization of the syntax and semantics of ABAP statements and not to solve concrete programming tasks. For production application programs, a dedicated solution should therefore always be worked out for each individual case.

The database tables of the flight data model used in the example programs can be filled using the program SAPBC\_DATA\_GENERATOR.
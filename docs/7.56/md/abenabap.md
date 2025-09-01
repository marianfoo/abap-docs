  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

ABAP - Keyword Documentation

The ABAP keyword documentation describes the syntax and semantics of the keywords of programming languages provided by SAP on an [Application Server ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") (AS ABAP) of an [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry") implementing an [ABAP platform](javascript:call_link\('abenabap_platform_glosry.htm'\) "Glossary Entry"). It also provides an introductory description of the environment of these languages and of language-related frameworks and the corresponding system classes.

-   Modeling
    -   [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\))
        
        ABAP Dictionary is a persistent repository of metadata used to describe data types, database tables, views, and similar objects that can be used in development objects such as ABAP [programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") or [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). This section of the ABAP keyword documentation provides a full description of the most important ABAP Dictionary objects that are relevant for the programming languages. It also includes documentation for the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") used to define certain dictionary objects in the ABAP Development Tools (ADT).
        
    -   [ABAP - Core Data Services](javascript:call_link\('abencds.htm'\))
        
        The ABAP Core Data Services (ABAP CDS) are the ABAP-specific implementation of SAP's [CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") concept. They are used to develop data models that go far beyond the capabilities of ABAP Dictionary. This section of the ABAP keyword documentation introduces the concepts of ABAP CDS and provides full descriptions of the programming languages used to define [CDS objects](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in the ABAP Development Tools (ADT), such as [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"), [CDS DCL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"), [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry"), or [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry").
        
-   Application Programming
    -   [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\))
        
        [ABAP](javascript:call_link\('abenabap_glosry.htm'\) "Glossary Entry") is the main programming language of the [ABAP development environment (ABAP DE)](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry") provided by an [ABAP platform](javascript:call_link\('abenabap_platform_glosry.htm'\) "Glossary Entry"). It is the namesake for the [Application Server ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") (or AS ABAP) and many of its components. ABAP is the programming interface of an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") and is used for the development of system programs and application programs that are usually based on objects in ABAP Dictionary or in ABAP CDS. This section of the ABAP keyword documentation provides a full description of the ABAP programming language and its object-oriented part, [ABAP Objects](javascript:call_link\('abenabap_objects_glosry.htm'\) "Glossary Entry"). It also provides descriptions of the XML-based language elements for [Simple Transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry") and the language elements of the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"), which can be used only in combination with ABAP.
        
-   Additional Information
    -   [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\))
        
        Rules and hints on using ABAP.
        
    -   [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\))
        
        Overview of potential security risks in ABAP programs.
        
    -   [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\))
        
        Rules on how to develop robust ABAP programs using [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry").
        
    -   [ABAP - Release News](javascript:call_link\('abennews.htm'\))
        
        List of release-specific changes and enhancements to ABAP and the other programming languages.
        
-   Alphabetic Directories
    -   [ABAP − Glossary](javascript:call_link\('abenabap_glossary.htm'\))
        
        Terms in the ABAP environment, and their explanations.
        
    -   [ABAP − Index](javascript:call_link\('abenabap_index.htm'\))
        
        Alphabetic index of the language elements of all programming languages described in the ABAP keyword documentation. If not noted otherwise, language elements are part of the ABAP programming language. Language elements in the other programming languages are noted accordingly.
        
    -   [ABAP − Subject Directory](javascript:call_link\('abenabap_subjects.htm'\))
        
        Alphabetic index for searching by subject area.
        
    -   [ABAP - Examples](javascript:call_link\('abenabap_examples.htm'\))
        
        Alphabetic list of executable ABAP example programs.
        

Hint

The programs and program extracts presented in the ABAP keyword documentation are only syntax examples and are not intended for direct use in a production system environment. The source texts of the examples are primarily intended to provide a better explanation and visualization of the syntax and semantics of ABAP statements and not to solve concrete programming tasks. For productive application programs, a dedicated solution should therefore always be worked out for each individual case.

The database tables of the flight data model used in the example programs can be filled using the program SAPBC\_DATA\_GENERATOR.
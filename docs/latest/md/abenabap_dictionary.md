---
title: "ABAP - Dictionary (DDIC)"
description: |
  ABAP Dictionary is a persistent repository of type definitions (meta data) in the form of dictionary objects(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_object_glosry.htm 'Glossary Entry'). These dictionary objects are visible in and can be accessed from other r
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm"
abapFile: "abenabap_dictionary.htm"
keywords: ["delete", "do", "while", "if", "case", "try", "class", "data", "types", "abenabap", "dictionary"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20-%20Dictionary%20%28DDIC%29%2C%20ABENABAP_DICTIONARY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP - Dictionary (DDIC)

ABAP Dictionary is a persistent repository of type definitions (meta data) in the form of [dictionary objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_object_glosry.htm "Glossary Entry"). These dictionary objects are visible in and can be accessed from other [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry"), particularly [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") objects and ABAP programs, as long as this is in line with the package concept. As in the [ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glosry.htm "Glossary Entry") programming language, the data types that can be defined in ABAP Dictionary can be elementary, structured, or tabular. Reference types are also possible. The main task of ABAP Dictionary structures is to describe DDIC database tables and DDIC views on the database, while at the same time being visible in all other repository objects and allowing for the definition of type-friendly interface parameters and data objects for handling DDIC database tables and DDIC views. Additionally, ABAP Dictionary manages lock objects and search helps. All ABAP Dictionary objects (definitions) are transportable repository objects.

The following ABAP Dictionary objects are available:

-   [Data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm)
    
    ABAP Dictionary supports the following standalone data types:
    
    -   [Data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) for elementary data types and reference types.
    -   [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) that consist of other data types.
    -   [DDIC table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm) which can have any other DDIC data type except for built-in data types as a line type.
        
        Note: DDIC tables types are not to be confused with DDIC database tables that describe tables on the database.
        
    
    The data types in the ABAP Dictionary serve as reference objects for interface parameters and data objects within AS ABAP. Other repository objects can refer directly to the data types in the ABAP Dictionary.
    
-   [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm)
    
    A DDIC database table (not to be confused with a table type) is an object in the ABAP Dictionary that describes a database table. Regarding the data type, a DDIC database table is a non-nested structure in which further technical properties of the DDIC database table can be defined alongside the type properties. The physical database table on the database is created when a DDIC database table is activated. In an ABAP program, a DDIC database table is handled both as a DDIC structure and as a database table. This means that a DDIC database table can be used for typing structured data objects and it can also be accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry").
    
-   [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm)
    
    A DDIC view defines an application-specific view. It includes columns of one or multiple DDIC database tables. When combining multiple tables, a view usually implements a join with statically defined join conditions. The columns of a view represent a non-nested structure that can be used as a data type. The following types of DDIC views are available:
    
    -   [DDIC table views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_views.htm) for views on database tables in the ABAP Dictionary.
    -   [DDIC external views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_external_views.htm) (obsolete) for views on [SAP HANA views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_view_glosry.htm "Glossary Entry").
    
    In ABAP SQL, a DDIC view can usually be accessed like a DDIC database table. An exception to this are [DDIC maintenance views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmaintenance_view_glosry.htm "Glossary Entry") and [DDIC help views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhelp_view_glosry.htm "Glossary Entry").
    
-   [Extensibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm)
    
    ABAP Dictionary supports extensions of [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm), [DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm), and [domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm). These extensions do not modify the original object.
    
-   [Replacement objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_objects.htm)
    
    [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) and [DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm) can be assigned a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") as replacement object. In certain access scenarios, the access is then redirected to the replacement object instead of the original object.
    
-   [DDIC tuning objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tuning_objects.htm)
    
    [HANA tuning objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_tuning_object_glosry.htm "Glossary Entry") can be created for DDIC objects to define technical settings and tunings that can be transported separately.
    

ABAP Dictionary has the following built-in data types and functions:

-   A set of [built-in ABAP Dictionary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm), which are the basis for the elementary components of all ABAP Dictionary objects. [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") is also based on these elementary data types.
-   ABAP Dictionary provides a set of [built-in database functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_functions.htm) that can be used in [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") and/or in [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry").

For common usage in ABAP Dictionary objects, ABAP CDS, and ABAP programs, there is a set of

-   [predefined types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_predef_types.htm)

The DDIC types, DDIC database tables, and DDIC views can be used as global data types in ABAP programs. Dictionary objects must be activated before they can be used, just like ABAP programs. Once activated, new or modified definitions are available directly for all other repository objects. If an existing dictionary object is changed, the repository objects that use it continue to work with the previous active version until the modified dictionary object is activated successfully. A dictionary object can only be deleted once all objects that use it have been removed.

-   [Activating ABAP Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_activation.htm)

For an overview of the tools for dictionary objects, see the following:

-   [Tools for Dictionary Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm)

Hints

-   GUI technologies such as classic [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") or [Web Dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenweb_dynpro_glosry.htm "Glossary Entry") are closely linked with ABAP Dictionary. This applies especially to [input checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_checks_auto.htm) as well as [field helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_help_glosry.htm "Glossary Entry") and [input helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_help_glosry.htm "Glossary Entry") of input fields (see [Field Helps, Input Helps, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_help.htm)). If the data type of an input field is declared using a type from the ABAP Dictionary, the documentation of the data elements is used implicitly as the F1 help. Fixed values from domains, check tables (foreign keys), and search helps can all be used for the F4 help. All valid input values of a field can be provided by means of the value range of a domain. Any changes to existing dictionary objects that are used directly or indirectly on UIs can, in the worst cases, modify the behavior of the UIs to the extent that they can no longer be executed.
-   Database objects managed by the ABAP Dictionary, such as DDIC database tables or DDIC views, should not be accessed directly on the database (see [Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_recomm.htm)).
-   Further dictionary objects are:
    
    -   [Lock objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlock_object_glosry.htm "Glossary Entry")
        
        Lock objects serve as a basis for [SAP locks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_lock_glosry.htm "Glossary Entry"). Lock objects specify DDIC database tables linked by means of foreign key relationships to which a shared lock is to be applied. When a lock object is created, two [lock function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlock_function_module_glosry.htm "Glossary Entry") for use in ABAP programs are generated automatically.
        
    -   [Search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry")
        
        A search help can search for values using a combination of structure components, data elements, and check tables to browse through assigned data. The user does not need to know the exact spelling of a value.
        
    
    This documentation describes the type definitions in ABAP Dictionary and how they interact with the ABAP programming language. Detailed information about [lock objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21eea5446011d189700000e8322d00) and [search helps](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21ee2b446011d189700000e8322d00) can be found in the [ABAP Dictionary](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/CF21EA0B446011D189700000E8322D00) documentation on SAP Help Portal.
    

Continue
[DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm)
[DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm)
[DDIC - Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm)
[DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm)
[DDIC - Replacement Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_objects.htm)
[DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tuning_objects.htm)
[DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm)
[DDIC - Generic Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_generic_types.htm)
[DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_functions.htm)
[DDIC - Predefined Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_predef_types.htm)
[DDIC - Activating ABAP Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_activation.htm)
[DDIC - Tools for Dictionary Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm)
[Obsolete Dictionary Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_obsolete.htm)
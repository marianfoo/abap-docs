---
title: "ABAP - Dictionary (DDIC)"
description: |
  ABAP Dictionary is a persistent repository of type definitions (meta data) in the form of dictionary objects(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_object_glosry.htm 'Glossary Entry') visible in all repository objects(https://help.sap.com/doc/abapdocu_755_index
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm"
abapFile: "abenabap_dictionary.htm"
keywords: ["delete", "do", "while", "if", "case", "try", "class", "data", "types", "abenabap", "dictionary"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) → 

ABAP - Dictionary (DDIC)

ABAP Dictionary is a persistent repository of type definitions (meta data) in the form of [dictionary objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_object_glosry.htm "Glossary Entry") visible in all [repository objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_object_glosry.htm "Glossary Entry"), particularly in objects of [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") and in ABAP programs, and usable as part of the package concept. As in the [ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glosry.htm "Glossary Entry") programming language, the definable data types in ABAP Dictionary can be elementary, structured, or tabular. Reference types are also possible. The structures in ABAP Dictionary have the important task of describing DDIC database tables and DDIC views in the database, while also being visible in all other repository objects. This makes it possible to define type-compliant interface parameters and data objects for handling DDIC database tables and DDIC views. Alongside the data types, lock objects and search helps (among other things) are also managed in ABAP Dictionary. All objects (definitions) in ABAP Dictionary are themselves transportable repository objects.

The main objects in ABAP Dictionary are as follows:

-   [Data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm)

ABAP Dictionary supports the following standalone data types:

-   [Data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) for elementary data types and reference types.

-   [DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm) that can comprise any other number of data types.

-   [DDIC table types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_types.htm) with any line type (not to be confused with DDIC database tables that describe the tables on the database).

The data types in ABAP Dictionary are used in ABAP as reference objects for interface parameters and data objects which can be referenced in common by all repository objects.

-   [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm)

A DDIC database table (not to be confused with a table type) is an object in ABAP Dictionary that describes a database table on the database.. As far as its data type is concerned, a DDIC database table is a non-nested structure for which further technical attributes of the DDIC database table can be defined alongside the type attributes. The physical database table on the database is created when a DDIC database table is activated. An ABAP program handles a DDIC database table both as a DDIC structure and as a database table. This means that the DDIC database table can be used as a template for structured data objects and also accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry").

-   [Dictionary views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm)

A DDIC view is a grouping of columns in one or more DDIC database tables in accordance with an application-specific view. When multiple tables are joined, a view usually implements a join with statically defined join conditions. The columns of a view make a non-nested structure that can be used as a data type. ABAP Dictionary supports the following dictionary views:

-   [DDIC table views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_views.htm) for views on database tables in ABAP Dictionary.

-   [DDIC external views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_external_views.htm) for views on [SAP HANA views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_view_glosry.htm "Glossary Entry").

In ABAP SQL, a DDIC view can usually be used like a DDIC database table. An exception to this are the special [DDIC maintenance views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmaintenance_view_glosry.htm "Glossary Entry") and [DDIC help views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhelp_view_glosry.htm "Glossary Entry").

-   [Enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_enhancements.htm)

ABAP Dictionary makes it possible to enhance [DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm), [DDIC database views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm), or [domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm), without making modifications.

-   [Replacement objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_replacement_objects.htm)

[DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) and [DDIC database views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm) in ABAP Dictionary can be assigned to [CDS views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") as replacement objects. These objects are then used as replacements in certain access types.

-   [Dependency rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_dependency_rules.htm)

[Dependency rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendependency_rule_glosry.htm "Glossary Entry") can be created for DDIC database tables on the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"). They define additional conditions for these DDIC database tables, which are then applied implicitly when the tables are read.

-   [Dynamic caches](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_dynamic_caches.htm)

Interface between [cached views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_cached_views.htm) in SAP HANA and views.

ABAP Dictionary has the following built-in data types and functions:

-   A set of [built-in ABAP Dictionary data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types_intro.htm). These are the basis for the elementary components of all ABAP Dictionary objects. [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") is also based on these elementary data types.

-   ABAP Dictionary provides a set of [built-in database functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_functions.htm) that can be used in [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") and/or in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry").

The DDIC types, DDIC database tables, and DDIC views can be used as global data types in ABAP programs. Like ABAP programs, dictionary objects have to be activated before they can be used. Once activated, new or modified definitions are available directly for all other repository objects. If an existing dictionary object is changed, the repository objects that use it work with the previous active version until the modified dictionary object is activated. A dictionary object can only be deleted once all objects that use it have been removed.

-   [Activating ABAP Dictionary Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_activation.htm)

For an overview of the tools for dictionary objects, see the following:

-   [Tools for Dictionary Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm)

Hints

-   Further dictionary objects are as follows:

-   [Lock objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlock_object_glosry.htm "Glossary Entry")
    A lock object is used as a basis for [SAP locks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_lock_glosry.htm "Glossary Entry"). Lock objects specify DDIC database tables associated using foreign key relationships and to which a shared lock applies. When a lock object is created, two [lock function modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlock_function_module_glosry.htm "Glossary Entry") are generated automatically for use in ABAP programs.

-   [Search helps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensearch_help_glosry.htm "Glossary Entry")
    A search help uses a combination of structure components, data elements, and check tables plus assigned data to find values without the user needing to enter the exact value in question.

This documentation describes the type definitions in ABAP Dictionary and how they interact with the ABAP programming language. Detailed information about lock objects and search helps can be found in the ABAP Dictionary documentation in SAP Help Portal.

-   GUI technologies such as classic [dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") or [Web Dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenweb_dynpro_glosry.htm "Glossary Entry") are closely integrated with ABAP Dictionary. This applies more specifically to [input checks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_checks_auto.htm) plus [field helps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_help_glosry.htm "Glossary Entry") and [input helps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninput_help_glosry.htm "Glossary Entry") of input fields (see [Field Helps, Input Helps, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_help.htm)). If the data type of an input field is declared using a type from ABAP Dictionary, the documentation of the data elements is used implicitly as the F1 help. Fixed values from domains, check tables (foreign keys), and search helps can all be used for the F4 help. The valid input values can be fixed using the value range of a domain. Any changes to existing dictionary objects that are used directly or indirectly on UIs can, in the worst cases, modify the behavior of the UIs to the extent that they become unusable.

-   Database objects managed by ABAP Dictionary (such as DDIC database tables or DDIC views defined in the dictionary) should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_access_recomm.htm)).

Continue
[DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm)
[DDIC - Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm)
[DDIC - Dictionary Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm)
[DDIC - Enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_enhancements.htm)
[DDIC - Replacement Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_replacement_objects.htm)
[DDIC - Dependency Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_dependency_rules.htm)
[DDIC - Dynamic Caches](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_dynamic_caches.htm)
[DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types_intro.htm)
[DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_functions.htm)
[DDIC - Activating ABAP Dictionary Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_activation.htm)
[DDIC - Tools for Dictionary Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm)
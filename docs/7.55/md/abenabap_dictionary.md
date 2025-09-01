  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) → 

ABAP - Dictionary (DDIC)

ABAP Dictionary is a persistent repository of type definitions (meta data) in the form of [dictionary objects](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry") visible in all [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"), particularly in objects of [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and in ABAP programs, and usable as part of the package concept. As in the [ABAP](javascript:call_link\('abenabap_glosry.htm'\) "Glossary Entry") programming language, the definable data types in ABAP Dictionary can be elementary, structured, or tabular. Reference types are also possible. The structures in ABAP Dictionary have the important task of describing DDIC database tables and DDIC views in the database, while also being visible in all other repository objects. This makes it possible to define type-compliant interface parameters and data objects for handling DDIC database tables and DDIC views. Alongside the data types, lock objects and search helps (among other things) are also managed in ABAP Dictionary. All objects (definitions) in ABAP Dictionary are themselves transportable repository objects.

The main objects in ABAP Dictionary are as follows:

-   [Data types](javascript:call_link\('abenddic_data_types.htm'\))

ABAP Dictionary supports the following standalone data types:

-   [Data elements](javascript:call_link\('abenddic_data_elements.htm'\)) for elementary data types and reference types.

-   [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)) that can comprise any other number of data types.

-   [DDIC table types](javascript:call_link\('abenddic_table_types.htm'\)) with any line type (not to be confused with DDIC database tables that describe the tables on the database).

The data types in ABAP Dictionary are used in ABAP as reference objects for interface parameters and data objects which can be referenced in common by all repository objects.

-   [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\))

A DDIC database table (not to be confused with a table type) is an object in ABAP Dictionary that describes a database table on the database.. As far as its data type is concerned, a DDIC database table is a non-nested structure for which further technical attributes of the DDIC database table can be defined alongside the type attributes. The physical database table on the database is created when a DDIC database table is activated. An ABAP program handles a DDIC database table both as a DDIC structure and as a database table. This means that the DDIC database table can be used as a template for structured data objects and also accessed using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry").

-   [Dictionary views](javascript:call_link\('abenddic_views.htm'\))

A DDIC view is a grouping of columns in one or more DDIC database tables in accordance with an application-specific view. When multiple tables are joined, a view usually implements a join with statically defined join conditions. The columns of a view make a non-nested structure that can be used as a data type. ABAP Dictionary supports the following dictionary views:

-   [DDIC table views](javascript:call_link\('abenddic_table_views.htm'\)) for views on database tables in ABAP Dictionary.

-   [DDIC external views](javascript:call_link\('abenddic_external_views.htm'\)) for views on [SAP HANA views](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry").

In ABAP SQL, a DDIC view can usually be used like a DDIC database table. An exception to this are the special [DDIC maintenance views](javascript:call_link\('abenmaintenance_view_glosry.htm'\) "Glossary Entry") and [DDIC help views](javascript:call_link\('abenhelp_view_glosry.htm'\) "Glossary Entry").

-   [Enhancements](javascript:call_link\('abenddic_enhancements.htm'\))

ABAP Dictionary makes it possible to enhance [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)), [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\)), or [domains](javascript:call_link\('abenddic_domains.htm'\)), without making modifications.

-   [Replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\))

[DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\)) in ABAP Dictionary can be assigned to [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as replacement objects. These objects are then used as replacements in certain access types.

-   [Dependency rules](javascript:call_link\('abenddic_dependency_rules.htm'\))

[Dependency rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") can be created for DDIC database tables on the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). They define additional conditions for these DDIC database tables, which are then applied implicitly when the tables are read.

-   [Dynamic caches](javascript:call_link\('abenddic_dynamic_caches.htm'\))

Interface between [cached views](javascript:call_link\('abenhana_cached_views.htm'\)) in SAP HANA and views.

ABAP Dictionary has the following built-in data types and functions:

-   A set of [built-in ABAP Dictionary data types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)). These are the basis for the elementary components of all ABAP Dictionary objects. [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") is also based on these elementary data types.

-   ABAP Dictionary provides a set of [built-in database functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) that can be used in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and/or in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry").

The DDIC types, DDIC database tables, and DDIC views can be used as global data types in ABAP programs. Like ABAP programs, dictionary objects have to be activated before they can be used. Once activated, new or modified definitions are available directly for all other repository objects. If an existing dictionary object is changed, the repository objects that use it work with the previous active version until the modified dictionary object is activated. A dictionary object can only be deleted once all objects that use it have been removed.

-   [Activating ABAP Dictionary Types](javascript:call_link\('abenddic_activation.htm'\))

For an overview of the tools for dictionary objects, see the following:

-   [Tools for Dictionary Objects](javascript:call_link\('abenddic_tools.htm'\))

Hints

-   Further dictionary objects are as follows:

-   [Lock objects](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry")
    A lock object is used as a basis for [SAP locks](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry"). Lock objects specify DDIC database tables associated using foreign key relationships and to which a shared lock applies. When a lock object is created, two [lock function modules](javascript:call_link\('abenlock_function_module_glosry.htm'\) "Glossary Entry") are generated automatically for use in ABAP programs.

-   [Search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry")
    A search help uses a combination of structure components, data elements, and check tables plus assigned data to find values without the user needing to enter the exact value in question.

This documentation describes the type definitions in ABAP Dictionary and how they interact with the ABAP programming language. Detailed information about lock objects and search helps can be found in the ABAP Dictionary documentation in SAP Help Portal.

-   GUI technologies such as classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") or [Web Dynpro](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry") are closely integrated with ABAP Dictionary. This applies more specifically to [input checks](javascript:call_link\('abenabap_dynpros_checks_auto.htm'\)) plus [field helps](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") and [input helps](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") of input fields (see [Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\))). If the data type of an input field is declared using a type from ABAP Dictionary, the documentation of the data elements is used implicitly as the F1 help. Fixed values from domains, check tables (foreign keys), and search helps can all be used for the F4 help. The valid input values can be fixed using the value range of a domain. Any changes to existing dictionary objects that are used directly or indirectly on UIs can, in the worst cases, modify the behavior of the UIs to the extent that they become unusable.

-   Database objects managed by ABAP Dictionary (such as DDIC database tables or DDIC views defined in the dictionary) should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](javascript:call_link\('abendatabase_access_recomm.htm'\))).

Continue
[DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\))
[DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\))
[DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\))
[DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\))
[DDIC - Replacement Objects](javascript:call_link\('abenddic_replacement_objects.htm'\))
[DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\))
[DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\))
[DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\))
[DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\))
[DDIC - Activating ABAP Dictionary Types](javascript:call_link\('abenddic_activation.htm'\))
[DDIC - Tools for Dictionary Objects](javascript:call_link\('abenddic_tools.htm'\))
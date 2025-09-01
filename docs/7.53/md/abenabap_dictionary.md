  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) → 

ABAP - Dictionary

ABAP Dictionary is a persistent repository of type definitions (meta data) of an [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry") visible in all [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"), particularly in ABAP programs, and usable as part of the package concept. As in the ABAP language, the definable data types in ABAP Dictionary can be elementary, structured, or tabular. Reference types are also possible. The structures in ABAP Dictionary have the important task of describing database tables and views in the database, while also being visible in all other repository objects. This makes it possible to define type-friendly interface parameters and data objects for handling database tables and views. Alongside the data types, lock objects and search helps (among other things) are also managed in ABAP Dictionary. All objects (definitions) in ABAP Dictionary are themselves transportable repository objects.

As a rule, the objects managed by ABAP Dictionary are divided into two classes:

-   [Classic objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\))

The basic objects in classic ABAP Dictionary are data types and database tables , as well as classic views . They are defined in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in ABAP Workbench and sometimes in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   [Objects in ABAP CDS](javascript:call_link\('abencds.htm'\))

The objects in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") cover [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") (such as [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") , [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")) and [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry"), plus [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") and are defined in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

The following objects can also be defined in ABAP Dictionary:

-   [Dependency rules](javascript:call_link\('abenddic_dependency_rules.htm'\))

[Dependency rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") can be created for database tables on the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). They define additional conditions for these database tables, which are then applied implicitly when the tables are read.

The following built-in data types and functions can be used in ABAP Dictionary:

-   The elementary components of all objects in ABAP Dictionary are based on a set of [built-in data types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)). These also describe the elementary data types in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry").

-   ABAP Dictionary manages a set of [built-in database functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) that can be used in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and/or [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry").

The classic data types, database tables, and views plus the CDS entities can be used as global data types in ABAP programs. Like ABAP programs, dictionary objects have to be activated before they can be used. Once activated, new or modified definitions are available directly for all other repository objects. If an existing dictionary object is changed, the repository objects that use it work with the previous active version until the modified dictionary object is activated. A dictionary object can only be deleted once all objects that use it have been removed.

-   [Activating ABAP Dictionary Types](javascript:call_link\('abenddic_activation.htm'\))

Continue
[Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\))
[ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\))
[Dependency Rules in ABAP Dictionary](javascript:call_link\('abenddic_dependency_rules.htm'\))
[Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\))
[Built-In Functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\))
[Activating ABAP Dictionary Types](javascript:call_link\('abenddic_activation.htm'\))
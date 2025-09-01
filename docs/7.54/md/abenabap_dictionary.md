  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) → 

ABAP - Dictionary

ABAP Dictionary is a persistent repository of type definitions (meta data) of an [ABAP system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_system_glosry.htm "Glossary Entry") visible in all [repository objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_object_glosry.htm "Glossary Entry"), particularly in ABAP programs, and usable as part of the package concept. As in the ABAP language, the definable data types in ABAP Dictionary can be elementary, structured, or tabular. Reference types are also possible. The structures in ABAP Dictionary have the important task of describing database tables and views in the database, while also being visible in all other repository objects. This makes it possible to define type-friendly interface parameters and data objects for handling database tables and views. Alongside the data types, lock objects and search helps (among other things) are also managed in ABAP Dictionary. All objects (definitions) in ABAP Dictionary are themselves transportable repository objects.

As a rule, the objects managed by ABAP Dictionary are divided into two classes:

-   [Classic objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm)

The basic objects in classic ABAP Dictionary are data types and database tables , as well as classic views . They are defined in the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm) in ABAP Workbench and sometimes in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry").

-   [Objects in ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm)

The objects in [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") cover [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") (such as [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), and [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")) and [CDS roles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry") plus [CDS annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry"), and are defined in [CDS source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_source_code_glosry.htm "Glossary Entry") in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry").

The following objects can also be defined in ABAP Dictionary:

-   [Dependency rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_dependency_rules.htm)

[Dependency rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendependency_rule_glosry.htm "Glossary Entry") can be created for database tables on the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry"). They define additional conditions for these database tables, which are then applied implicitly when the tables are read.

The following built-in data types and functions can be used in ABAP Dictionary:

-   The elementary components of all objects in ABAP Dictionary are based on a set of [built-in data types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_intro.htm). These also describe the elementary data types in [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry").

-   ABAP Dictionary manages a set of [built-in database functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) that can be used in [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and/or [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry").

The classic data types, database tables, and views plus the CDS entities can be used as global data types in ABAP programs. Like ABAP programs, dictionary objects have to be activated before they can be used. Once activated, new or modified definitions are available directly for all other repository objects. If an existing dictionary object is changed, the repository objects that use it work with the previous active version until the modified dictionary object is activated. A dictionary object can only be deleted once all objects that use it have been removed.

-   [Activating ABAP Dictionary Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_activation.htm)

Continue
[Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm)
[ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm)
[Dependency Rules in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_dependency_rules.htm)
[Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_intro.htm)
[Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm)
[Activating ABAP Dictionary Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_activation.htm)
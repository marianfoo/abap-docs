# ABAP Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Views

Included pages: 8


### abenddic_views.htm

---
title: "Views"
description: |
  A view in ABAP Dictionary is a grouping of columns in one or more database tables in accordance with an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as data types (like flat structures). Views can be used like database tables in ABAP SQL read stat
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm"
abapFile: "abenddic_views.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abenddic", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) → 

Views

A view in ABAP Dictionary is a grouping of columns in one or more database tables in accordance with an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as data types (like flat structures). Views can be used like database tables in ABAP SQL read statements (and sometimes in write statements). For this reason, the ABAP Dictionary views are in the same namespace as all types and database tables in ABAP Dictionary and the global [object types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_type_glosry.htm "Glossary Entry") in the [class library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_library_glosry.htm "Glossary Entry").

The name of a view can have a maximum of 16 characters, can consist of letters, numbers, and underscores, must start with a letter, and can be prefixed by a [namespace prefix](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenname_space_prefix_glosry.htm "Glossary Entry") (/.../) of a [prefix namespace](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprefix_name_space_glosry.htm "Glossary Entry"). The name is in the namespace of the [data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_types.htm) in ABAP Dictionary.

The data in a view is read from the database tables involved by the database and is not saved physically.

-   Views for a database table can be used to restrict database access to specific fields (known as projection) or to specific rows (known as selection).

-   Views for multiple database tables use joins or subqueries to join these tables and to read the required fields and rows.

The views in ABAP Dictionary are usually platform-independent. With some special exceptions, the views in ABAP Dictionary are, when activated, transformed into platform-specific [SQL views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_view_glosry.htm "Glossary Entry") in the current [standard AS ABAP database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry") in the [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). This is done using the [DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_glosry.htm "Glossary Entry") statement CREATE VIEW with the addition AS SELECT, which formulates the corresponding SELECT statement. The definition of a view in the database can be displayed in ABAP Dictionary by choosing Utilities → Database Object.

ABAP Dictionary manages the following categories of views:

-   [Classic views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_views.htm)

In classic views (or views for short), the platform-dependent DDL statement is created from the definition of the view in the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm).

-   [External views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_external_views.htm)

An external view externalizes an [SAP HANA view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_view_glosry.htm "Glossary Entry") in ABAP programs and makes it usable like a regular view in ABAP Dictionary.

When a view is accessed using the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), the SELECT statement defined in the DDL statement is executed and the results set is returned as if a SELECT were executed on a database table whose structure matches the structure defined by the view.

Notes

-   Views are usually defined in the implementation of data models in ABAP Dictionary and this is not usually the job of a regular ABAP application programmer. Once created, views are used in ABAP programs using ABAP SQL statements and must be stable enough to allow this.

-   When making selections using views, it is also important that suitable [indexes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_index.htm) are created for the basis tables in the view.

-   The [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm) in the [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) are added to the views specified. A CDS view is defined in a (mostly) platform-independent [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). CDS views expand on the functions provided by the classic views.

Continue
[Classic Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_views.htm)
[External Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_external_views.htm)


### abenddic_classical_views.htm

---
title: "Classic Views"
description: |
  A classic view (or view for short) is a repository object in ABAP Dictionary defined for existing database tables and their fields in the form-based ABAP Dictionary tool(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm) in ABAP Workbench(https://help.sap.com/doc/abap
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_views.htm"
abapFile: "abenddic_classical_views.htm"
keywords: ["select", "insert", "update", "do", "while", "if", "case", "try", "class", "data", "types", "abenddic", "classical", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) → 

Classic Views

A classic view (or view for short) is a repository object in ABAP Dictionary defined for existing database tables and their fields in the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm) in [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). As well as the classic views, the ABAP Dictionary also manages the [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") of the [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm), which are defined by the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry").

The definition of a classic view consists of the following:

-   Basis tables

A list of database tables accessed by the view. Multiple tables are joined using joins.

-   View fields

A list of table fields of the basis tables that defines the structure of the view. Except in the case of projection views, a different [data element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_elements.htm) can be assigned to a view field that that used for the corresponding table field of the basis table. This can only happen if the type of the table field is defined using a data element with a [domain](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_domains.htm) and if the new data element references the same domain. This makes it possible to adjust the semantic attributes of the view field to the view.

-   Key

A key of the view that consists of key fields. The tool derives the key of a view from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are thus marked as key fields. All rows determined by the view must be unique with respect to the key. If no key with this property can be identified, all fields of the view are key fields, which can be bad for performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a database table.

-   Join conditions

Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the view is used to select the cross product of the basis tables. Each row in a table is combined with each row of the other table. Each join condition then selects the matching rows from the cross product.

-   Selection conditions

Used to restrict the read rows to specific values of view fields or other fields.

-   The possible relational operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.

-   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") can be specified for maintenance views and help views using SYST-... or SY-....

-   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of classic views exist, of which only the database views are defined as SQL views on the database:

-   [Database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm)

-   [Projection views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_projection_views.htm)

-   [Maintenance views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_maintenance_views.htm)

-   [Help views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_help_views.htm)

Like database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Notes

-   Projections can be implemented using both database views and with special projection views.

-   Only database tables can be specified as the basis tables of classic views, and no other views.

-   In [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.

-   Views whose fields are all key fields should not be written to using [UPDATE FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm) or [MODIFY FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm). For database views, this produces a syntax check warning and for projection views a syntax error or runtime error.

-   As in database tables, the [client dependency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_dependence_glosry.htm "Glossary Entry") of a classic view that can be accessed using ABAP SQL (a database view or projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored here.

-   [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm) defined using the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the ABAP Core Data Services in [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") offer all the functions of classic views and more. CDS views are, however, read-only, while some classic views can be modified.

Continue
[Database Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm)
[Projection Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_projection_views.htm)
[Maintenance Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_maintenance_views.htm)
[Help Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_help_views.htm)


### abenddic_database_views.htm

---
title: "Database Views"
description: |
  A database view is a general view for one or more basis tables. If there are multiple basis tables, they are joined using an inner join. A matching SQL view(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_view_glosry.htm 'Glossary Entry') is created as a database object(https:
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm"
abapFile: "abenddic_database_views.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abenddic", "database", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) →  [Classic Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_views.htm) → 

Database Views

A database view is a general view for one or more basis tables. If there are multiple basis tables, they are joined using an inner join. A matching [SQL view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_view_glosry.htm "Glossary Entry") is created as a [database object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_object_glosry.htm "Glossary Entry") on the database when the view is activated. The structure type defined using the view fields of the database view can be referenced in ABAP programs using TYPE. A database view can be accessed using ABAP SQL, Native SQL, or AMDP in CDS views, and also from outside AS ABAP using the programming interface of the database. The latter method is, however, [not recommended](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_access_recomm.htm).

-   [Basis Tables](#abenddic-database-views-1--------view-fields---@ITOC@@ABENDDIC_DATABASE_VIEWS_2)

-   [Join Conditions](#abenddic-database-views-3--------maintenance-status---@ITOC@@ABENDDIC_DATABASE_VIEWS_4)

-   [Table Buffering](#abenddic-database-views-5---notes------a-database-view-can-be-activated-in-abap-dictionary-without-its-basis-tables-being-defined-on-the-database--the-view-is-also-not-created-on-the-database-in-this-case-------as-in-a--database-table--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-database-tables-client-htm---the-client-dependency-of-a-database-view-is-determined-by-an-initial-column-with-the-built-in-dictionary-type-clnt--------append-views--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-append-views-htm--are-available-for-enhancing-the-database-views-in-abap-dictionary-delivered-by-sap-without-making-any-modifications-------suitable--cds-views--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-view-glosry-htm--glossary-entry---can-be-defined-as--replacement-objects--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-replacement-objects-htm--for-database-views--in-this-case--reads-in--abap-sql--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenopen-sql-glosry-htm--glossary-entry---access-the-replacement-objects-rather-than-the-database-views-------database-views-managed-by-abap-dictionary-should-not-be-accessed-directly-in-the-database--see--access-to-abap-managed-database-objects--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abendatabase-access-recomm-htm-----basis-tables--the-basis-tables-of-database-views-can-be--transparent-tables--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abentransparent-table-glosry-htm--glossary-entry---and--global-temporary-tables--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenglobal-temporary-table-glosry-htm--glossary-entry-----note--the-basis-tables-of--cds-database-views--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-database-view-glosry-htm--glossary-entry---that-are-generated-for--cds-views--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-view-glosry-htm--glossary-entry---can-also-be-other-database-views---view-fields--an-include-mechanism-can-be-used-to-add-individual-fields-or-all-fields-from-the-basis-tables-as-view-fields-of-a-database-view--when-individual-fields-are-used--a-name-other-than-the-name-in-the-basis-tables-can-be-defined-for-a-view-field--this-name-can-have-a-maximum-of-30-characters--must-meet-the-naming-conventions-for-component-names-of--structures--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-structures-htm---and-cannot-be-a-reserved-name--the-reserved-names-that-cannot-be-used-are-specified-in-the-database-table-trese--fields-with-the-type-char-can-have-a-maximum-of-1333-characters--fields-with-the-type-lraw-or-lchr-must-be-at-the-end-of-the-view--only-one-such-field-is-allowed-per-view--furthermore--a-field-with-the-type-int2-or-int4--for-the-maximum-length-of-the-field--must-be-located-directly-in-front-of-this-field---to-use-all-fields--the----character-is-used-instead-of-the-field-name--if-the----character-is-used-for-individual-fields-of-a-basis-table-included-using-----all-fields-up-to-the-fields-specified-with----become-view-fields--if-the-structure-of-a-database-table-whose-fields-were-added-in-this-way-is-modified--the-structure-of-the-view-is-also-modified---notes------if-a--foreign-key-field--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenforeign-key-field-glosry-htm--glossary-entry---is-added-as-a-view-field--it-keeps-this-attribute-and-all-associated-foreign-key-fields-become-the-foreign-key-of-the-view-------for--cds-database-views--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-database-view-glosry-htm--glossary-entry----the-view-fields-displayed-as-key-fields-are-in-no-way-related-to-the-key-fields-defined-using--define-view--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-f1-define-view-htm--for-the--cds-entity--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abencds-entity-glosry-htm--glossary-entry---------a-database-view-in-the-software-component-sap--basis-can-contain-a-maximum-of-749-view-fields-and-the-total-of-the-field-lengths--the-number-of-bytes-in-non-character-like-fields-plus-the-number-of-characters-in-flat-character-like-fields--must-not-exceed-4096--a-database-view-in-any-other-software-component-can-contain-a-maximum-of-1500-view-fields-and-the-total-of-the-field-lengths-is-not-checked-in-abap-dictionary---join-conditions--the-join-conditions-for-the-inner-join-can-be-formulated-using-equality-relationships-between-any-two-table-fields-in-the-basis-tables--the-inner-join-joins-the-rows-of-the-basis-tables-in-question-as-a-results-set-containing-all-combinations-of-rows-whose-columns-together-meet-the-join-conditions--if-there-are-no-rows-that-meet-the-join-conditions-in-the-basis-tables-in-question--no-row-is-created-in-the-results-set--if-there-is-a-suitable--foreign-key-dependency--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-database-tables-forkeyrel-htm---including-generic-and-constant-foreign-keys--between-two-basis-tables--this-dependency-can-be-used-as-a-default-for-defining-join-conditions-in-abap-dictionary---maintenance-status--the-access-setting-in-the-maintenance-status-of-a-database-view-can-have-the-following-values-------read-only--the-database-view-can-only-be-used-to-read-data-with-abap-sql-------read--change--delete--and-insert--if-the-database-view-contains-only-a-single-basis-table--data-can-be--changed--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenopen-sql-writing-htm--using-abap-sql---a-database-view-with-multiple-basis-tables-can-only-be-read-with-abap-sql--if-a-database-view-contains-only-a-single-table--data-can-be-inserted-in-this-table-using-the-view-with-the-abap-sql-statements--insert--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abapinsert-dbtab-htm--or--modify--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abapinsert-dbtab-htm---the-following-options-are-available-for-the-content-of-the-table-fields-not-in-the-view-------if-the-table-field-is-defined-with--not-null--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-database-tables-init-htm--on-the-database--the-field-is-filled-with-the-corresponding-initial-value-------if-the-table-field-is-defined-with--not-null--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-database-tables-init-htm--on-the-database--and-there-is-no-initial-value--nothing-can-be-inserted-and-a-database-error-occurs-with-a-corresponding-exception-------if-the-table-field-is-not-defined-with--not-null--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-database-tables-init-htm--on-the-database--the-field-is-filled-with-the--null-value--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abennull-value-glosry-htm--glossary-entry-----notes------a-database-view-should-only-be-used-to-insert-data-in-the-table-if-the-flag-for-initial-values-is-set-for-all-table-fields-that-are-not-in-the-view-------it-is-not-usually-a-problem-to-modify-existing-data-records-using-a-database-view-in-cases-where-the-database-view-contains-all-key-fields-of-the-table-------like-a-database-table--the-maintenance-status-of-a-database-view-has-a--display-and-maintain--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-database-tables-maint-htm--setting-alongside-the-access-setting--the-setting-must-match-the-access-setting--in-database-views-containing-multiple-basis-tables--only-the-setting-display-maintenance-not-allowed-is-possible---table-buffering--just-like-in-database-tables--it-is-possible-to-define-for-a-database-view-whether-the-data-in-the--table-buffer--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abentable-buffer-glosry-htm--glossary-entry---is-buffered--the-same--buffering-types--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-database-tables-buffer-htm--can-be-defined-and--table-buffering-in-abap-sql--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abensap-puffering-htm--is-handled-in-the-same-way-for-views-and-for-database-tables-with-the-only-difference-being-that--when-data-is-modified-in-one-of-the-basis-tables--the-entire-buffer-is-invalidated-when-the--buffers-are-synchronized--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenbuffer-synchro-htm---regardless-of-the-buffering-type-in-client-specific-views--however--this-only-affects-the-content-of-the-current-client---the-following-prerequisites-must-be-met-before-a-database-view-can-be-buffered-------a-basis-table-can-occur-in-no-more-than-nine-buffered-database-views-------if-all-fields-of-the-database-view-are-key-fields--these-fields-must-also-be-key-fields-of-the-basis-tables-------a-view-whose-data-is-written-to-using-abap-sql-cannot-have-a--replacement-object--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-replacement-objects-htm----note--no--replacement-objects--https---help-sap-com-doc-abapdocu-754-index-htm-7-54-en-us-abenddic-replacement-objects-htm--can-be-created-for-an-existing-buffered-view-whose-data-can-be-written-to-using-abap-sql---example--the-database-view-demo--scarr--spfli-contains-fields-of-the-tables-scarr-and-spfli--other-names-are-assigned-to-these-fields-in-the-view---the-associated-database-object-could-be-as-follows---create-view-demo--scarr--spfli-----client-----id-----carrier-----flight-----departure-----destination---as-select----t1--mandt------t2--carrid------t1--carrname------t2--connid------t2--cityfrom------t2--cityto--from------scarr--t1-------spfli--t2-where-----t1--mandt-----t2--mandt--and-----t1--carrid----t2--carrid---the-view-can-be-accessed-as-follows-using-abap-sql---select-----------from-demo--scarr--spfli--------order-by-id--carrier--flight--------into-table-DATA(result).
cl\_demo\_output=>display( result ).


### abenddic_projection_views.htm

---
title: "Projection Views"
description: |
  A projection view is a special view for hiding fields from a single basis table. An SQL view is not created on the database. No selection conditions can be specified for a projection view. The structure type defined using the view fields of the projection view can be referenced in ABAP programs usin
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_projection_views.htm"
abapFile: "abenddic_projection_views.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "class", "data", "abenddic", "projection", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) →  [Classic Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_views.htm) → 

Projection Views

A projection view is a special view for hiding fields from a single basis table. An SQL view is not created on the database. No selection conditions can be specified for a projection view.

The structure type defined using the view fields of the projection view can be referenced in ABAP programs using TYPE. A projection view can be accessed using ABAP SQL but not using CDS views, Native SQL, or AMDP. The database interface transforms an ABAP SQL statement that accesses a projection view to a platform-specific SQL statement that provides the correct result.

The Access setting in the maintenance status of a projection view can have the following values:

-   Read only

The projection view can only be used to read data with ABAP SQL.

-   Read, change, delete, and insert

The projection view can only be used to [change](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_writing.htm) data with ABAP SQL.

When rows are inserted using projection views, all table fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_init.htm) on the database.

Notes

-   As in a [database table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_client.htm), the client dependency of a projection view is determined by an initial column with the built-in dictionary type CLNT.

-   Like a database table, the maintenance status of a projection view has a [Display and Maintain](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_maint.htm) setting alongside the Access setting. The setting must match the Access setting.

-   The basis table of a projection view can be a [transparent table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransparent_table_glosry.htm "Glossary Entry") and a [global temporary table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry").

Example

The projection view DEMO\_SPFLI contains fields of the tables SPFLI. The view can be accessed as follows using ABAP SQL:

SELECT \*
       FROM demo\_spfli
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).


### abenddic_maintenance_views.htm

---
title: "Maintenance Views"
description: |
  A maintenance view is a special view for performing writes on multiple tables using extended table maintenance. A single maintenance view can be used to modify the content of multiple related database tables consistently. A maintenance view is not defined on the database. The structure type defined
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_maintenance_views.htm"
abapFile: "abenddic_maintenance_views.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "class", "data", "abenddic", "maintenance", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) →  [Classic Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_views.htm) → 

Maintenance Views

A maintenance view is a special view for performing writes on multiple tables using extended table maintenance. A single maintenance view can be used to modify the content of multiple related database tables consistently.

A maintenance view is not defined on the database. The structure type defined using a maintenance view can be referenced in ABAP programs using TYPE. A maintenance view cannot, however, be accessed using ABAP SQL. Instead, the transaction SE54 can be used to create dialogs called maintenance dialogs for maintenance views, which can themselves be used to edit the tables of the maintenance views jointly in extended table maintenance (transactions SM30 and SM31).

When data records are inserted using maintenance views, all tables fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_init.htm) on the database.

Primary Table and Secondary Tables

All database tables grouped in a maintenance view must be joined using [foreign key dependencies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkeyrel.htm), which means that the join conditions are always derived from a foreign key in the case of maintenance views. The first table included in the maintenance view is known as the primary table of the maintenance view. The tables added to this primary table using foreign keys are known as secondary tables. The following restrictions apply when selecting the secondary tables of a maintenance view:

-   The secondary tables must have an N:1 dependency on the primary table or on the transitively preceding secondary table. This makes sure that no more than one dependent data record exists in each of the secondary tables for a specific data record in the primary table. An N:1 dependency exists if the secondary table is the [check table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheck_table_glosry.htm "Glossary Entry") in the [foreign key in question](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_glosry.htm "Glossary Entry").

-   If the secondary table is the [foreign key table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_table_glosry.htm "Glossary Entry"), the foreign key fields must be key fields of a table or the foreign key must have the cardinality N:1 or N:C.

A maintenance view implements an inner join. All key fields in the primary table must be included in its maintenance view. All key fields of secondary tables that are not part of the foreign key (that is, they are not joined with a key field already in the view using a join condition) must also be included in the view. This makes sure that the records inserted using a maintenance view can be written correctly to the tables in the view.

Note

If a database table is joined with its [text table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_table_glosry.htm "Glossary Entry") in a maintenance view, the logon language is selected automatically for this table.

Time-Dependent Key

In maintenance views, the key can be divided into a non-time-dependent area and a time-dependent area. The time-dependent area can, for example, contain date fields and time fields. This means that the rows of these views have chronological importance.

Note

The ability to change time-dependent views makes it possible to restrict the new entries inserted to those that are only missing time information.

Maintenance Status

The Access setting in the maintenance status of a maintenance view can have the following values:

-   Read only

The maintenance view can only be used to read data.

-   Read, change, delete, and insert

The maintenance view can be used to change, delete, and insert data.

-   Read and change

The maintenance view can be used to change data, but not delete or insert it.

-   Read and change (time-dependent views)

The maintenance view can be used to insert only entries whose non-time-dependent part of the key does not differ from existing entries.

Note

Like a database table, the maintenance status of a maintenance view has a [Display and Maintain](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_maint.htm) setting alongside the Access setting. The setting must match the Access setting. The setting Display/maintenance not allowed is not possible here.

Maintenance Characteristics of View Fields

Alongside the maintenance status of the view, characteristics called maintenance characteristics can be defined for each view field:

-   Standard

There are no restrictions on the view field.

-   Read-only

The maintenance view cannot be used to perform writes on the view field.

-   Subset

A field of this type is used to construct subsets when data is edited in extended table maintenance. Only a subset of the data is displayed. This subset is defined by entering an appropriate value in this field.

-   Hidden

A field of this type is not displayed in extended table maintenance and cannot be edited there. The content is initialized implicitly.

Delivery Class

A maintenance view also has a [delivery class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_delivery.htm). The delivery class of a maintenance view is analyzed in the extended table maintenance.

-   If the view is assigned one of the delivery classes G or E, the customer namespace for the entries of the view must be defined in the database table TRESC.

-   The transport interface of extended table maintenance must match the delivery class.

Regardless of this, the transport of the basis tables involved in upgrades and in transports between customer systems is determined solely by their [delivery class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_delivery.htm).


### abenddic_help_views.htm

---
title: "Help Views"
description: |
  A help view is a special view for use in search helps(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensearch_help_glosry.htm 'Glossary Entry'). The selection methods of a search help can be database tables, database views, and the special help views. Database tables restrict the sea
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_help_views.htm"
abapFile: "abenddic_help_views.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abenddic", "help", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) →  [Classic Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_views.htm) → 

Help Views

A help view is a special view for use in [search helps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensearch_help_glosry.htm "Glossary Entry"). The selection methods of a search help can be database tables, database views, and the special help views. Database tables restrict the search help to one table and database views restrict it to inner joins, whereas help views also make outer joins possible. A help view is not defined on the database. The structure type defined using a help view can be referenced in ABAP programs using TYPE. A help view cannot, however, be accessed using ABAP SQL.

The join conditions of a help view must be applied from existing foreign keys. Tables can be grouped in help views only if they are joined using [foreign keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_glosry.htm "Glossary Entry"). The first table included in the help view is known as the primary table of the help view. The tables added to this primary table using foreign keys are known as secondary tables. The same restrictions apply when selecting secondary tables of a help view as to [maintenance views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_maintenance_views.htm).

A help view implements an outer join, which means that the full content of the primary table of the help view is always displayed. If records in a secondary table cannot be read due to a selection condition, the content of the corresponding fields of the secondary table are displayed with initial values.

Notes

-   Like other views, help views can be used in elementary search helps if the selection is too complex to be defined using a single database table.

-   Unlike database views, help views implement an outer join, which is why this type is particularly well suited for including supplementary information such as explanatory texts from secondary tables. If the supplementary information were missing in an inner join, no part of the dataset would be selected.

-   If the selection is only made using a table and its text table, it is enough to specify the table directly as a selection method of the search help, since the fields of the text table can also be used as parameters in the search help in this case.

-   Help views should not be used if the selection is often restricted using fields of the secondary tables. In this case, a database view should be created instead. It might also be necessary to create additional suitable indexes for the basis tables.

-   Selections using help views can only be made quicker by making restrictions on the primary table. When accessing help views from the ABAP runtime environment, special selection routines are generated. These routines always make the selection using the primary table first and then use the records found as a key for selecting the supplementary information.


### abenddic_classical_views.htm

---
title: "Classic Views"
description: |
  A classic view (or view for short) is a repository object in ABAP Dictionary defined for existing database tables and their fields in the form-based ABAP Dictionary tool(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm) in ABAP Workbench(https://help.sap.com/doc/abap
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_views.htm"
abapFile: "abenddic_classical_views.htm"
keywords: ["select", "insert", "update", "do", "while", "if", "case", "try", "class", "data", "types", "abenddic", "classical", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) → 

Classic Views

A classic view (or view for short) is a repository object in ABAP Dictionary defined for existing database tables and their fields in the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm) in [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). As well as the classic views, the ABAP Dictionary also manages the [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") of the [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm), which are defined by the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry").

The definition of a classic view consists of the following:

-   Basis tables

A list of database tables accessed by the view. Multiple tables are joined using joins.

-   View fields

A list of table fields of the basis tables that defines the structure of the view. Except in the case of projection views, a different [data element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_elements.htm) can be assigned to a view field that that used for the corresponding table field of the basis table. This can only happen if the type of the table field is defined using a data element with a [domain](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_domains.htm) and if the new data element references the same domain. This makes it possible to adjust the semantic attributes of the view field to the view.

-   Key

A key of the view that consists of key fields. The tool derives the key of a view from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are thus marked as key fields. All rows determined by the view must be unique with respect to the key. If no key with this property can be identified, all fields of the view are key fields, which can be bad for performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a database table.

-   Join conditions

Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the view is used to select the cross product of the basis tables. Each row in a table is combined with each row of the other table. Each join condition then selects the matching rows from the cross product.

-   Selection conditions

Used to restrict the read rows to specific values of view fields or other fields.

-   The possible relational operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.

-   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") can be specified for maintenance views and help views using SYST-... or SY-....

-   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of classic views exist, of which only the database views are defined as SQL views on the database:

-   [Database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm)

-   [Projection views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_projection_views.htm)

-   [Maintenance views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_maintenance_views.htm)

-   [Help views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_help_views.htm)

Like database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Notes

-   Projections can be implemented using both database views and with special projection views.

-   Only database tables can be specified as the basis tables of classic views, and no other views.

-   In [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.

-   Views whose fields are all key fields should not be written to using [UPDATE FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm) or [MODIFY FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm). For database views, this produces a syntax check warning and for projection views a syntax error or runtime error.

-   As in database tables, the [client dependency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_dependence_glosry.htm "Glossary Entry") of a classic view that can be accessed using ABAP SQL (a database view or projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored here.

-   [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm) defined using the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the ABAP Core Data Services in [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") offer all the functions of classic views and more. CDS views are, however, read-only, while some classic views can be modified.

Continue
[Database Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm)
[Projection Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_projection_views.htm)
[Maintenance Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_maintenance_views.htm)
[Help Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_help_views.htm)


### abenddic_external_views.htm

---
title: "External Views"
description: |
  An external view is a special view in ABAP Dictionary that defines(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexternal_views.htm) an SAP HANA View(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_view_glosry.htm 'Glossary Entry') in SAP HANA XSC(https://h
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_external_views.htm"
abapFile: "abenddic_external_views.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abenddic", "external", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) → 

External Views

An external view is a special view in ABAP Dictionary that [defines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexternal_views.htm) an [SAP HANA View](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_view_glosry.htm "Glossary Entry") in [SAP HANA XSC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxsc_glosry.htm "Glossary Entry") in ABAP programs. The structure type defined using the view fields of an external view can be referenced in ABAP programs using TYPE. An external view can be specified as a source in [ABAP SQL read](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) statements

External views can only be created using the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") and only if the current database is an [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry"). The SAP HANA view must exist in the [SAP HANA Repository](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_hana_repository_glosry.htm "Glossary Entry").

When an external view is activated, an alias with the name of the view is created on the SAP HANA database that points to the SAP HANA view. The names of the view fields of the external view can be defined differently from the names of the view fields of the SAP HANA view. The [runtime object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_object_glosry.htm "Glossary Entry") of the external view accesses the alias on the SAP HANA database. This performs a mapping of HANA-specific data types to the [built-in types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) in ABAP Dictionary. The following table lists the currently supported HANA-specific data types and indicates which ABAP Dictionary types they are mapped to by default.

HANA Type

Meaning

Type in ABAP Dictionary

SMALLINT

2-byte integer

INT2

INTEGER

4-byte integer

INT4

BIGINT

8-byte integer

INT8

DECIMAL

Packed number

DEC

SMALLDECIMAL

Packed number

DEC

FLOAT

Binary floating point number

FLTP

NVARCHAR

Unicode character string

CHAR

VARBINARY

Byte string

RAW

BLOB

Byte string

RAWSTRING

NCLOB

Unicode character string

STRING

External views can be displayed in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm) in the SAP GUI-based ABAP Workbench, but not edited.

An external view can only be read using ABAP SQL if an SAP HANA database is being accessed in which the associated SAP HANA view exists. If not, the non-handleable exception DBSQL\_TABLE\_UNKNOWN is raised. External views can exist actively and be used as data types in a system whose standard database is not an SAP HANA database. Views of this type cannot, however, be accessed through the [standard connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") using ABAP SQL, only through a [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") to an SAP HANA database. Conversely, when an SAP HANA view in an SAP HANA database is accessed through a secondary connection in the current system, only an identically named database table or a structure suitable for any view in ABAP Dictionary can exist actively in ABAP Dictionary.

Notes

-   The following restrictions currently apply to the use of external views in ABAP programs:

-   The structure of analytic views do not allow them to be read using [SELECT \*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm). The same basic rules apply to the statement SELECT in ABAP SQL as when using the HAND SQL statement SELECT, with individual columns and the addition GROUP BY needing to be specified. If SELECT \* is used, a runtime error occurs.

-   Calculation views with parameters can be access only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.

-   External views should only be used in those cases that are not covered by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry").

-   Access to SAP HANA views in [SAP HANA XS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxs_glosry.htm "Glossary Entry"):

-   SAP HANA views in [SAP HANA XSC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxsc_glosry.htm "Glossary Entry") are stored in the SAP HANA Repository and external views can be used for access to these views from ABAP.

-   SAP HANA views in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxsa_glosry.htm "Glossary Entry"), the successor to [SAP HANA XSC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxsc_glosry.htm "Glossary Entry"), are usually [HDI objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhdi_object_glosry.htm "Glossary Entry") for which no external views can be created. For access from ABAP, other methods must be used such as [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_glosry.htm "Glossary Entry").

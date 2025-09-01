  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) → 

Views

A view in ABAP Dictionary is a grouping of columns in one or more database tables in accordance with an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as data types (like flat structures). Views can be used like database tables in ABAP SQL read statements (and sometimes in write statements). For this reason, the ABAP Dictionary views are in the same namespace as all types and database tables in ABAP Dictionary and the global [object types](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") in the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry").

The name of a view can have a maximum of 16 characters, can consist of letters, numbers, and underscores, must start with a letter, and can be prefixed by a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry") (/.../) of a [prefix namespace](javascript:call_link\('abenprefix_name_space_glosry.htm'\) "Glossary Entry"). The name is in the namespace of the [data types](javascript:call_link\('abenddic_data_types.htm'\)) in ABAP Dictionary.

The data in a view is read from the database tables involved by the database and is not saved physically.

-   Views for a database table can be used to restrict database access to specific fields (known as projection) or to specific rows (known as selection).

-   Views for multiple database tables use joins or subqueries to join these tables and to read the required fields and rows.

The views in ABAP Dictionary are usually platform-independent. With some special exceptions, the views in ABAP Dictionary are, when activated, transformed into platform-specific [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") in the current [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). This is done using the [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") statement CREATE VIEW with the addition AS SELECT, which formulates the corresponding SELECT statement. The definition of a view in the database can be displayed in ABAP Dictionary by choosing Utilities → Database Object.

ABAP Dictionary manages the following categories of views:

-   [Classic views](javascript:call_link\('abenddic_classical_views.htm'\))

In classic views (or views for short), the platform-dependent DDL statement is created from the definition of the view in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)).

-   [External views](javascript:call_link\('abenddic_external_views.htm'\))

An external view externalizes an [SAP HANA view](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") in ABAP programs and makes it usable like a regular view in ABAP Dictionary.

When a view is accessed using the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), the SELECT statement defined in the DDL statement is executed and the results set is returned as if a SELECT were executed on a database table whose structure matches the structure defined by the view.

Notes

-   Views are usually defined in the implementation of data models in ABAP Dictionary and this is not usually the job of a regular ABAP application programmer. Once created, views are used in ABAP programs using ABAP SQL statements and must be stable enough to allow this.

-   When making selections using views, it is also important that suitable [indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) are created for the basis tables in the view.

-   The [CDS views](javascript:call_link\('abenddic_cds_views.htm'\)) in the [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)) are added to the views specified. A CDS view is defined in a (mostly) platform-independent [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). CDS views expand on the functions provided by the classic views.

Continue
[Classic Views](javascript:call_link\('abenddic_classical_views.htm'\))
[External Views](javascript:call_link\('abenddic_external_views.htm'\))
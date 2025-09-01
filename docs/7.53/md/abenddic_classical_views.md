  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_views.htm) → 

Classic Views

A classic view (or view for short) is a repository object in ABAP Dictionary defined for existing database tables and their fields in the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm) in [ABAP Workbench](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). As well as the classic views, the ABAP Dictionary also manages the [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") of the [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm), which are defined by the [CDS DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry").

The definition of a classic view consists of the following:

-   Basis tables

A list of database tables accessed by the view. Multiple tables are joined using joins.

-   View fields

A list of table fields of the basis tables that defines the structure of the view. Except in the case of projection views, a different [data element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm) can be assigned to a view field that that used for the corresponding table field of the basis table. This can only happen if the type of the table field is defined using a data element with a [domain](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains.htm) and if the new data element references the same domain. This makes it possible to adjust the semantic attributes of the view field to the view.

-   Key

A key of the view that consists of key fields. The tool derives the key of a view from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are thus marked as key fields. All rows determined by the view must be unique with respect to the key. If no key with this property can be identified, all fields of the view are key fields, which can be bad for performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a database table.

-   Join conditions

Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the view is used to select the cross product of the basis tables. Each row in a table is combined with each row of the other table. Each join condition then selects the matching rows from the cross product.

-   Selection conditions

Used to restrict the read rows to specific values of view fields or other fields.

-   The possible relational operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.

-   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm "Glossary Entry") can be specified for maintenance views and help views using SYST-... or SY-....

-   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of classic views exist, of which only the database views are defined as SQL views on the database:

-   [Database views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_views.htm)

-   [Projection views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_projection_views.htm)

-   [Maintenance views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_maintenance_views.htm)

-   [Help views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_help_views.htm)

Like database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Notes

-   Projections can be implemented using both database views and with special projection views.

-   Only database tables can be specified as the basis tables of classic views, and no other views.

-   In [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.

-   Views whose fields are all key fields should not be written to using [UPDATE FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate.htm) or [MODIFY FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_dbtab.htm). For database views, this produces a syntax check warning and for projection views a syntax error or runtime error.

-   As in database tables, the [client dependency](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_dependence_glosry.htm "Glossary Entry") of a classic view that can be accessed using ABAP SQL (a database view or projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored here.

-   [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_views.htm) defined using the [CDS DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the ABAP Core Data Services in [DDL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry") offer all the functions of classic views and more. CDS views are, however, read-only, while some classic views can be modified.

Continue
[Database Views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_views.htm)
[Projection Views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_projection_views.htm)
[Maintenance Views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_maintenance_views.htm)
[Help Views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_help_views.htm)
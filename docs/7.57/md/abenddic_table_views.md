  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Table Views, ABENDDIC_TABLE_VIEWS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

DDIC - Table Views

A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

The definition of a DDIC table view consists of the following:

-   Basis tables
    
    A list of DDIC database tables in ABAP Dictionary accessed by the view. Multiple tables are associated using joins.
    
-   View fields
    
    A list of table fields of the basis tables that defines the structure of the view. Except in the case of DDIC projection views, a different [data element](javascript:call_link\('abenddic_data_elements.htm'\)) can be assigned to a view field than used for the corresponding table field of the basis table. This can only happen if the type of the table field is defined using a data element with a [domain](javascript:call_link\('abenddic_domains.htm'\)) and if the new data element references the same domain. This makes it possible to adjust the semantic properties of the view field to the view.
    
-   Key
    
    A key of the view that consists of key fields. The tool derives the key of a view from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are thus marked as key fields. All rows determined by the view must be unique with respect to the key. If no key with this property can be identified, all fields of the view are key fields, which can be bad for performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a DDIC database table.
    
-   Join conditions
    
    Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the view is used to select the cross product of the basis tables. Each row in a table is combined with each row of the other table. Each join condition then selects the matching rows from the cross product.
    
-   Selection conditions
    
    Used to restrict the read rows to specific values of view fields or other fields.
    
    -   The possible comparison operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.
    -   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") can be specified for DDIC maintenance views and DDIC help views using SYST-... or SY-....
    -   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of DDIC table views exist, of which only the DDIC database views are defined as [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") on the database:

-   [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\))
-   [DDIC Projection views](javascript:call_link\('abenddic_projection_views.htm'\))
-   [DDIC maintenance views](javascript:call_link\('abenddic_maintenance_views.htm'\))
-   [DDIC help views](javascript:call_link\('abenddic_help_views.htm'\))

Like DDIC database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Hints

-   Projections can be implemented using both DDIC database views and with special projection views.
-   Only DDIC database tables can be specified as the basis tables of table views, and no other views.
-   In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.
-   Views whose fields are all key fields should not be written to using [UPDATE FROM](javascript:call_link\('abapupdate.htm'\)) or [MODIFY FROM](javascript:call_link\('abapmodify_dbtab.htm'\)). For DDIC database views, this produces a syntax check warning and for projection views a syntax error or runtime error.
-   As in DDIC database tables, the [client dependency](javascript:call_link\('abenclient_dependency_glosry.htm'\) "Glossary Entry") of a table view that can be accessed using ABAP SQL (a DDIC database view or projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored here.
-   The table views cannot be maintained using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").
-   [CDS view entities](javascript:call_link\('abencds_v2_views.htm'\)) defined using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP Core Data Services in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") offer all the functions of table views and more. CDS view entities allow only read access, however, while some DDIC views can be modified.

Continue
[DDIC - Database Views](javascript:call_link\('abenddic_database_views.htm'\))
[DDIC - Projection Views](javascript:call_link\('abenddic_projection_views.htm'\))
[DDIC - Maintenance Views](javascript:call_link\('abenddic_maintenance_views.htm'\))
[DDIC - Help Views](javascript:call_link\('abenddic_help_views.htm'\))
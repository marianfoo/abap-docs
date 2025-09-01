  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Views%2C%20ABENDDIC_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Views

A [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") is a grouping of columns of one or more DDIC database tables, resulting in an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as data types in the same way as DDIC structures. Views can be used like DDIC database tables in reading ABAP SQL statements and, with some limitations, also in writing ABAP SQL statements. For this reason, the ABAP DDIC views are in the same namespace as all types of the ABAP Dictionary and hence in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

The name of a view must follow the [naming rules for DDIC views](javascript:call_link\('abenddic_view_names.htm'\)).

The data in a view is not saved physically. It is read from the database from the involved DDIC database tables.

-   Views can be used to restrict data access for a DDIC database table. Access to fields is restricted with projections and access to specific rows is restricted with selections.
-   Views that select from multiple DDIC database tables use joins or subqueries to join these tables and to read the required fields and rows.

The views in ABAP Dictionary are usually platform-independent. With some exceptions, the views in ABAP Dictionary are, when activated, transformed into platform-dependent [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") in the current [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). This is done using the [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") statement CREATE VIEW with the addition AS SELECT, which formulates the corresponding SELECT statement. The definition of a view in the database can be displayed in transaction SE11 by choosing Utilities → Database Object.

ABAP Dictionary manages the following categories of views:

-   [DDIC table views](javascript:call_link\('abenddic_table_views.htm'\))
    
    In DDIC table views the platform-dependent DDL statement is created from the definition of the view in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)).
    
-   [DDIC external views](javascript:call_link\('abenddic_external_views.htm'\)) (obsolete)
    
    A DDIC external view makes an [SAP HANA view](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") known in ABAP programs and makes it usable like a DDIC table view.
    
    Note: [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry") replaces [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"). The access methods designed specifically for XSC objects are not suitable for XSA objects and have become obsolete. [DDIC external views](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry") represent one such access method and have been declared obsolete. See [SAP Note 3116165](https://launchpad.support.sap.com/#/notes/3116165) and [SAP Note 2465027](https://launchpad.support.sap.com/#/notes/2465027).
    

When a view is accessed using the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), the database SELECT statement defined in the DDL statement is executed and the result set is returned as if a SELECT were executed on a DDIC database table whose structure matches the structure defined by the view.

Hints

-   Defining views is usually not the job of an ABAP application programmer, but is part of the implementation of data models in ABAP Dictionary. Once created, views are used in ABAP programs using ABAP SQL statements and must be stable enough to allow this.
-   The DDIC database tables a view is based on should have suitable [indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)). This is important for selections using views.
-   [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)) offers [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and other [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for the implementation of data models and replaces data modeling with DDIC views. CDS entities are defined in a (mostly) platform-independent [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). CDS entities offer advanced modeling capabilities compared to DDIC views.

Continue
[DDIC - Naming Rules for DDIC Views](javascript:call_link\('abenddic_view_names.htm'\))
[DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\))
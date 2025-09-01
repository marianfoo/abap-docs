---
title: "DDIC - Views"
description: |
  A DDIC view(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_view_glosry.htm 'Glossary Entry') is a grouping of columns in one or more DDIC database tables in accordance with an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_views.htm"
abapFile: "abenddic_views.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abenddic", "views"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) → 

DDIC - Views

A [DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_view_glosry.htm "Glossary Entry") is a grouping of columns in one or more DDIC database tables in accordance with an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as data types in the same way as structures. Views can be used like database tables in reading and sometimes partly writing ABAP SQL statements. For this reason, the ABAP DDIC views are in the same namespace as all types of the ABAP Dictionary and hence in the namespace of all [global types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

The name of a view must follow the [naming rules for DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_view_names.htm).

The data in a view is read from the DDIC database tables involved by the database and is not saved physically.

-   Views for a DDIC database table can be used to restrict database access to specific fields (projection) or to specific rows (selection).
-   Views for multiple DDIC database tables use joins or subqueries to join these tables and to read the required fields and rows.

The views in ABAP Dictionary are usually platform-independent. With some special exceptions, the views in ABAP Dictionary are, when activated, transformed into platform-dependent [SQL views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_view_glosry.htm "Glossary Entry") in the current [standard AS ABAP database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry") in the [ABAP database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). This is done using the [DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_glosry.htm "Glossary Entry") statement CREATE VIEW with the addition AS SELECT, which formulates the corresponding SELECT statement. The definition of a view in the database can be displayed in transaction SE11 by choosing Utilities → Database Object.

ABAP Dictionary manages the following categories of views:

-   [DDIC table views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_views.htm)
    
    In DDIC table views the platform-dependent DDL statement is created from the definition of the view in the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_tools.htm).
    
-   [DDIC external views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_external_views.htm)
    
    A DDIC external view makes an [SAP HANA view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_view_glosry.htm "Glossary Entry") known in ABAP programs and makes it usable like a DDIC table view.
    

When a view is accessed using the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm), the SELECT statement defined in the DDL statement is executed and the result set is returned as if a SELECT were executed on a DDIC database table whose structure matches the structure defined by the view.

Hints

-   Views are usually defined in the implementation of data models in ABAP Dictionary and this is not usually the job of a regular ABAP application programmer. Once created, views are used in ABAP programs using ABAP SQL statements and must be stable enough to allow this.
-   When making selections using views, it is also important that suitable [indexes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_index.htm) are created for the basis tables in the view.
-   The [CDS views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) in [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) are added to the DDIC views and will replace them in the long term. A CDS view is defined in a (mostly) platform-independent [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). CDS views expand on the functions provided by the DDIC views.

Continue
[DDIC - Naming Rules for DDIC Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_view_names.htm)
[DDIC - Table Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_views.htm)
[DDIC - External Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_external_views.htm)
  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20in%20ABAP%20Release%207.51%2C%20ABENNEWS-751-AMDP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP in ABAP Release 7.51

[1\. Logical Database Schemas](#!ABAP_MODIFICATION_1@1@)
[2\. Use of Logical Database Schemas in AMDP Methods](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Logical Database Schemas

[Logical database schemas](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") were introduced as symbolic names for physical [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the SAP HANA database. Instead of physical database schemas, logical database schemas can be used by frameworks (in particular AMDP methods) to access objects from different database schemas in Native SQL or AMDP.

Modification 2   

Use of Logical Database Schemas in AMDP Methods

When an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") is implemented in an AMDP class with SQLScript, the following new [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry")

["$ABAP.schema( \[name =\] schema\_name )"](javascript:call_link\('abenamdp_logical_db_schemas.htm'\))

can be used to specify logical database schemas instead of physical database schemas. The ABAP runtime environment replaces these schemas on the database with the associated physical database schemas.
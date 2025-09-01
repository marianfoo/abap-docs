  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

AMDP in Release 7.51

[1\. Logical database schemas](#!ABAP_MODIFICATION_1@1@)

[2\. Use of logical database schemas in AMDP methods](#!ABAP_MODIFICATION_2@2@)

Modification 1

Logical Database Schemas

[Logical database schemas](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry") were introduced as symbolic names for physical [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the SAP HANA database. Instead of physical database schemas, logical database schemas can be used by frameworks (in particular AMDP methods) to access objects from different database schemas in Native SQL or AMDP.

Modification 2

Use of Logical Database Schemas in AMDP Methods

When an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") is implemented in an AMDP class with SQLScript, the following new [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry")

["$ABAP.schema( \[name =\] schema\_name )"](javascript:call_link\('abenamdp_logical_db_schemas.htm'\))

The ABAP runtime environment replaces these schemas on the database with the associated physical database schemas.
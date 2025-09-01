  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.51](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-751.htm) → 

AMDP in Release 7.51

[1\. Logical database schemas](#!ABAP_MODIFICATION_1@1@)

[2\. Use of logical database schemas in AMDP methods](#!ABAP_MODIFICATION_2@2@)

Modification 1

Logical Database Schemas

[Logical database schemas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") were introduced as symbolic names for physical [database schemas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_schema_glosry.htm "Glossary Entry") in the SAP HANA database. Instead of physical database schemas, logical database schemas can be used by frameworks (in particular AMDP methods) to access objects from different database schemas in Native SQL or AMDP.

Modification 2

Use of Logical Database Schemas in AMDP Methods

When an [AMDP method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_method_glosry.htm "Glossary Entry") is implemented in an AMDP class with SQLScript, the following new [AMDP macro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_macro_glosry.htm "Glossary Entry")

["$ABAP.schema( \[name =\] schema\_name )"](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_logical_db_schemas.htm)

can be used to specify logical database schemas instead of physical database schemas. The ABAP runtime environment replaces these schemas on the database with the associated physical database schemas.
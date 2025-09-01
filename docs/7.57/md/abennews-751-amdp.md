  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP in Release 7.51, ABENNEWS-751-AMDP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

AMDP in Release 7.51

[1\. Logical Database Schemas](#!ABAP_MODIFICATION_1@1@)
[2\. Use of Logical Database Schemas in AMDP Methods](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Logical Database Schemas

[Logical database schemas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") were introduced as symbolic names for physical [database schemas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_schema_glosry.htm "Glossary Entry") in the SAP HANA database. Instead of physical database schemas, logical database schemas can be used by frameworks (in particular AMDP methods) to access objects from different database schemas in Native SQL or AMDP.

Modification 2   

Use of Logical Database Schemas in AMDP Methods

When an [AMDP method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry") is implemented in an AMDP class with SQLScript, the following new [AMDP macro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_macro_glosry.htm "Glossary Entry")

["$ABAP.schema( \[name =\] schema\_name )"](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_logical_db_schemas.htm)

can be used to specify logical database schemas instead of physical database schemas. The ABAP runtime environment replaces these schemas on the database with the associated physical database schemas.
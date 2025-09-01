  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-754.htm) → 

AMDP in Release 7.54

[1\. Specifying CDS entities after USING](#!ABAP_MODIFICATION_1@1@)

[2\. Quotation marks for logical schemas](#!ABAP_MODIFICATION_2@2@)

Modification 1

Specifying CDS Entities After USING

In the implementation of the AMDP method, the name of the [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") can now be specified after the [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethod_by_db_proc.htm) addition for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"). The name of the [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry") of a CDS view or of the [AMDP function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_glosry.htm "Glossary Entry") of a CDS table function can still be specified, but is best replaced by specifying CDS entities. If a CDS entity is specified, all other database objects of CDS entities must be also be specified using this entity.

Modification 2

Quotation Marks for Logical Schemas

If the predefined [AMDP macro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_logical_db_schemas.htm) is specified for a [logical schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_schema_glosry.htm "Glossary Entry"), the optional addition quote can now be used to define which quotation marks are used when the macro is replaced.
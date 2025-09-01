  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

AMDP in Release 7.54

[1\. Specifying CDS entities after USING](#!ABAP_MODIFICATION_1@1@)

[2\. Quotation marks for logical schemas](#!ABAP_MODIFICATION_2@2@)

Modification 1

Specifying CDS Entities After USING

In the implementation of the AMDP method, the name of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can now be specified after the [USING](javascript:call_link\('abapmethod_by_db_proc.htm'\)) addition for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"). The name of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a CDS view or of the [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") of a CDS table function can still be specified, but is best replaced by specifying CDS entities. If a CDS entity is specified, all other database objects of CDS entities must be also be specified using this entity.

Modification 2

Quotation Marks for Logical Schemas

If the predefined [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)) is specified for a [logical schema](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry"), the optional addition quote can now be used to define which quotation marks are used when the macro is replaced.
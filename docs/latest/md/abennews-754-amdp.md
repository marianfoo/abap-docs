  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.54](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20in%20ABAP%20Release%207.54%2C%20ABENNEWS-754-AMDP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP in ABAP Release 7.54

[1\. Specifying CDS Entities After USING](#!ABAP_MODIFICATION_1@1@)
[2\. Quotation Marks for Logical Schemas](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Specifying CDS Entities After USING

In the implementation of the AMDP method, the name of the [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") can now be specified after the [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm) addition for [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"). The name of the [CDS managed DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a CDS view or of the [AMDP function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry") of a CDS table function can still be specified, but is best replaced by specifying CDS entities. If a CDS entity is specified, all other database objects of CDS entities must be also be specified using this entity.

Modification 2   

Quotation Marks for Logical Schemas

If the predefined [AMDP macro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_logical_db_schemas.htm) is specified for a [logical schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_schema_glosry.htm "Glossary Entry"), the optional addition quote can now be used to define which quotation marks are used when the macro is replaced.
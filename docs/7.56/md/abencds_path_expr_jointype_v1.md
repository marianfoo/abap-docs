  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-based View, path\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v1.htm) →  [CDS DDL - DDIC-based View, path\_expr, attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expr_attr_v1.htm) → 

CDS DDL - DDIC-based View, path\_expr, join\_type

Syntax

... INNER*|**{*LEFT OUTER*}* ...

Effect

Defines the [join type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjoin_type_glosry.htm "Glossary Entry") with which the current CDS association is implemented:

-   INNER determines an [inner join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninner_join_glosry.htm "Glossary Entry")
-   LEFT OUTER determines a [left outer join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleft_outer_join_glosry.htm "Glossary Entry")

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

-   After [FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm), it is an inner join (INNER JOIN)
-   In all other locations, it is a left outer join (LEFT OUTER JOIN)

Hint

In the DDL Source Text Editor of the [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry"), you can view the configuration of the join in the display of the generated SQL DDL statement.

Executable Example

[Joins of CDS Associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_assoc_join_v1_abexa.htm)
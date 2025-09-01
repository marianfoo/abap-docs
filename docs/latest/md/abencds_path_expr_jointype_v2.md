  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, path\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm) →  [CDS DDL - CDS View Entity, path\_expr, attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_attr_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20path_expr%2C%20join_type%2C%20ABENCDS_PATH_EXPR_JOINTYPE_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

CDS DDL - CDS View Entity, path\_expr, join\_type

Syntax

... INNER*|**{*LEFT OUTER*}* ...

Effect

Defines the [join type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjoin_type_glosry.htm "Glossary Entry") with which the current CDS association is implemented:

-   INNER determines an [inner join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninner_join_glosry.htm "Glossary Entry")
-   LEFT OUTER determines a [left outer join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleft_outer_join_glosry.htm "Glossary Entry")

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

-   After [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm), it is an inner join
-   In all other locations, it is a left outer join

Hints

-   In the DDL source text editor of the [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"), you can view the configuration of the join in the display of the generated SQL DDL statement.
-   For the last CDS association of a path expression, the specification of a join type property is not allowed. If a path expression consists of one single CDS association, then the join type cannot be specified.

Executable Example

[Joins of CDS Associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_assoc_join_v2_abexa.htm)
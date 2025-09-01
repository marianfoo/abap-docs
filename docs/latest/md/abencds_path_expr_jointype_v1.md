  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, path\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) →  [CDS DDL - DDIC-Based View, path\_expr, attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_attr_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20path_expr%2C%20join_type%2C%20ABENCDS_PATH_EXPR_JOINTYPE_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

CDS DDL - DDIC-Based View, path\_expr, join\_type

Syntax

... INNER*|**{*LEFT OUTER*}* ...

Effect

Defines the [join type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjoin_type_glosry.htm "Glossary Entry") with which the current CDS association is implemented:

-   INNER determines an [inner join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninner_join_glosry.htm "Glossary Entry")
-   LEFT OUTER determines a [left outer join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleft_outer_join_glosry.htm "Glossary Entry")

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

-   After [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm), it is an inner join (INNER JOIN)
-   In all other locations, it is a left outer join (LEFT OUTER JOIN)

Hint

In the DDL source text editor of the [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"), you can view the configuration of the join in the display of the generated SQL DDL statement.

Executable Example

[Joins of CDS Associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_assoc_join_v1_abexa.htm)
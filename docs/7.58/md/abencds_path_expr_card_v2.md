---
title: "Syntax Forms"
description: |
  Cardinality Syntax Written in Words ... EXACT ONE  MANY  ONE  TO EXACT ONE MANY  ONE : Numeric Syntax ... 1: ... Effect Specifies the cardinality(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm 'Glossary Entry')
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expr_card_v2.htm"
abapFile: "abencds_path_expr_card_v2.htm"
keywords: ["select", "insert", "do", "if", "try", "class", "data", "abencds", "path", "expr", "card"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, path\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm) →  [CDS DDL - CDS View Entity, path\_expr, attributes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expr_attr_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20path_expr%2C%20cardinality%2C%20ABENCDS_PATH_EXPR_CARD_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

CDS DDL - CDS View Entity, path\_expr, cardinality

Syntax Forms

Cardinality Syntax Written in Words

...*\[* *{**{*EXACT ONE*}* *|* MANY *|* ONE*}* *\]* TO *{**{*EXACT ONE*}* *|*MANY *|* ONE *}*:

Numeric Syntax

... 1*|*\*: ...

Effect

Specifies the [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") of the current CDS association as unique or non-unique. The cardinality can be specified in words or in numbers. The syntax written in words is recommended.

The syntax written in words can specify the [source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_cardinality_glosry.htm "Glossary Entry") and [target cardinalities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentarget_cardinality_glosry.htm "Glossary Entry"). However, it is also possible to specify only the target cardinality. The source cardinality can be omitted. The following combinations are possible:

-   EXACT ONE TO EXACT ONE
-   EXACT ONE TO MANY
-   EXACT ONE TO ONE
-   MANY TO EXACT ONE
-   MANY TO MANY
-   MANY TO ONE
-   ONE TO EXACT ONE
-   ONE TO MANY
-   ONE TO ONE
-   TO ONE
-   TO EXACT ONE
-   TO MANY

The numeric syntax only specifies the target cardinality. The target cardinality can be specified either as 1 (to-one), or as \* (to-many). The source cardinality is implicitly set to MANY.

A colon (:) must be placed at the end of the cardinality specification.

If the target cardinality is specified as to-one (using the syntax additions TO EXACT ONE:, TO ONE:, or 1:), it is possible to use filter conditions in path expressions, which are used in [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_where_clause_v2.htm) clauses or [HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_having_clause_v2.htm) clauses. In a clause like this, it overwrites the [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") of the [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v2.htm).

The cardinality cannot be specified as the only addition in square brackets. It must always be combined with a [filter condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_filter_v2.htm).

Hint

Specifying the cardinality as to-one cardinality prevents a syntax error if a path specified with filter conditions or with a non-unique cardinality is used in a [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_where_clause_v2.htm) clause or [HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_having_clause_v2.htm) clause. However, at runtime, there is no check to validate whether the condition achieves the required unique cardinality.

Example

The following CDS view entity filters the association \_Text using the cardinality specification written in words.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, card in path\_expr'
define view entity DEMO\_CDS\_PATH\_EXP
  as select from demo\_sales\_mat
  association of exact one to many DEMO\_SALES\_CDS\_MAT\_TEXT as \_Text  
    on  $projection.material = \_Text.material
{
  key matnr as material,
      mtart as material\_type,
      mtgrp as material\_group,
      \_Text,
      \_Text\[to exact one: inner where language = 'D' \].material\_name
}

The class CL\_DEMO\_CDS\_PATH\_EXPRESSION first enters data into the database tables using INSERT, and then selects data from the CDS view entity DEMO\_CDS\_PATH\_EXP using a SELECT statement.

Due to the path expression with filter condition, the result set consists of three rows. Without filter condition, the result set would contain more rows.
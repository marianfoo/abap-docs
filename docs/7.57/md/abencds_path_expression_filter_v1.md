  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v1.htm) →  [CDS DDL - DDIC-Based View, path\_expr, attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expr_attr_v1.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, path_expr, Filter, ABENCDS_PATH_EXPRESSION_FILTER_V1, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, path\_expr, Filter

Syntax

... *\[*WHERE*\]* [cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm) ...

Effect

[Filter condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfilter_condition_glosry.htm "Glossary Entry") for the current CDS association. If the join type is explicitly defined with [INNER*|**{*LEFT OUTER*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expr_jointype_v1.htm), the addition WHERE must be specified explicitly. If this is not the case, WHERE must not be specified.

A filter condition is a condition [cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm) implemented as an expanded condition for the join when resolving the CDS association with the join in question. For the operands, [general](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_operands_v1.htm) and [special rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_filter_v1.htm) apply when specifying the condition.

If no filter condition is specified in the path expression, any default filter condition specified for the [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_v1.htm) is used.

Hint

In most cases, a filter condition modifies the join expression defined for a CDS association of a path expression on the database. This means that a separate join expression is defined for each CDS association with a filter condition by default. This is not necessary, however, if a CDS association is used more than once and the same filter condition is specified. This is why the [ABAP annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_annotation_glosry.htm "Glossary Entry") [AbapCatalog.compiler.compareFilter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) can be used to configure whether the filter conditions of multiple CDS associations are compared semantically for the path expressions defined as joins when a view is activated. If the filter condition matches, the associated join expression is created only once, which generally improves performance. In most cases, it is best to use the annotation and it is automatically proposed when creating a CDS view in the ADT. The result sets of the two configurations can, however, differ.

Example

The following three views contain path expressions with filter conditions in their SELECT list that are implemented as join expressions upon activation.

@AbapCatalog.sqlViewName: 'DEMOCDSASSFI1'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_filter1  
   as select from
    demo\_join1
    association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2\[  
        inner where d = '1' \].d                         as d\_2,
      \_demo\_join2\[  
        inner where d = '1' \].e                         as e\_2,
      \_demo\_join2\[  
        inner where d = '1' \].\_demo\_join3\[  
                                inner where i = '2' \].i as i\_3,
      \_demo\_join2\[  
        inner where d = '1' \].\_demo\_join3\[  
                                inner where i = '2' \].j as j\_3
    }

@AbapCatalog.sqlViewName: 'DEMOCDSASSFI2'
@AbapCatalog.compiler.compareFilter: false
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_filter2  
   as select from
    demo\_join1
    association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2\[  
        inner where d = '1' \].d                         as d\_2,
      \_demo\_join2\[  
        inner where d = '1' \].e                         as e\_2,
      \_demo\_join2\[  
        inner where d = '1' \].\_demo\_join3\[  
                                inner where i = '2' \].i as i\_3,
      \_demo\_join2\[  
        inner where d = '1' \].\_demo\_join3\[  
                                inner where i = '2' \].j as j\_3
    }

@AbapCatalog.sqlViewName: 'DEMOCDSASSFI3'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_filter3  
   as select from
    demo\_join1
    association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2\[  
        inner where d = '1' \].d                         as d\_2,
      \_demo\_join2\[  
        inner where d = '2' \].e                         as e\_2,
      \_demo\_join2\[  
        inner where d = '3' \].\_demo\_join3\[  
                                inner where i = '5' \].i as i\_3,
      \_demo\_join2\[  
        inner where d = '4' \].\_demo\_join3\[  
                                inner where i = '6' \].j as j\_3
    }

In the first view, the annotation AbapCatalog.compiler.compareFilter has the recommended value true. The conditions are detected as identical and the variants of the path expressions on a SAP HANA database looks something like this:

CREATE VIEW "DEMOCDSASSFI1" AS SELECT
  "=A0"."D" AS "D\_2",
  "=A0"."E" AS "E\_2",
  "=A1"."I" AS "I\_3",
  "=A1"."J" AS "J\_3"
FROM (
  "DEMO\_JOIN1" "DEMO\_JOIN1" INNER JOIN "DEMO\_CDS\_ASJO2" "=A0" ON (
    "=A0"."D" = "DEMO\_JOIN1"."D" AND
    "=A0"."D" = N'1'
  )
) INNER JOIN "DEMO\_JOIN3" "=A1" ON (
  "=A1"."L" = "=A0"."D" AND
  "=A1"."I" = N'2'
)

In the second view, AbapCatalog.compiler.compareFilter has the value false and a join expression is defined for each CDS association of the path expressions regardless of the identical conditions. This means that this variant looks like the variant of the third views (in which all conditions are different):

CREATE VIEW "DEMOCDSASSFI2" AS SELECT
  "=A0"."D" AS "D\_2",
  "=A1"."E" AS "E\_2",
  "=A3"."I" AS "I\_3",
  "=A5"."J" AS "J\_3"
FROM (
  (
    (
      (
        (
          "DEMO\_JOIN1" "DEMO\_JOIN1" INNER JOIN "DEMO\_CDS\_ASJO2" "=A0" ON (
            "=A0"."D" = "DEMO\_JOIN1"."D" AND
            "=A0"."D" = N'1'
          )
        ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A1" ON (
          "=A1"."D" = "DEMO\_JOIN1"."D" AND
          "=A1"."D" = N'1'
        )
      ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A2" ON (
        "=A2"."D" = "DEMO\_JOIN1"."D" AND
        "=A2"."D" = N'1'
      )
    ) INNER JOIN "DEMO\_JOIN3" "=A3" ON (
      "=A3"."L" = "=A2"."D" AND
      "=A3"."I" = N'2'
    )
  ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A4" ON (
    "=A4"."D" = "DEMO\_JOIN1"."D" AND
    "=A4"."D" = N'1'
  )
) INNER JOIN "DEMO\_JOIN3" "=A5" ON (
  "=A5"."L" = "=A4"."D" AND
  "=A5"."I" = N'2'
)
CREATE VIEW "DEMOCDSASSFI3" AS SELECT
  "=A0"."D" AS "D\_2",
  "=A1"."E" AS "E\_2",
  "=A3"."I" AS "I\_3",
  "=A5"."J" AS "J\_3"
FROM (
  (
    (
      (
        (
          "DEMO\_JOIN1" "DEMO\_JOIN1" INNER JOIN "DEMO\_CDS\_ASJO2" "=A0" ON (
            "=A0"."D" = "DEMO\_JOIN1"."D" AND
            "=A0"."D" = N'1'
          )
        ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A1" ON (
          "=A1"."D" = "DEMO\_JOIN1"."D" AND
          "=A1"."D" = N'2'
        )
      ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A2" ON (
        "=A2"."D" = "DEMO\_JOIN1"."D" AND
        "=A2"."D" = N'3'
      )
    ) INNER JOIN "DEMO\_JOIN3" "=A3" ON (
      "=A3"."L" = "=A2"."D" AND
      "=A3"."I" = N'5'
    )
  ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A4" ON (
    "=A4"."D" = "DEMO\_JOIN1"."D" AND
    "=A4"."D" = N'4'
  )
) INNER JOIN "DEMO\_JOIN3" "=A5" ON (
  "=A5"."L" = "=A4"."D" AND
  "=A5"."I" = N'6'
)

Continue
[CDS DDL - DDIC-Based View, cds\_cond, Filter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_filter_v1.htm)
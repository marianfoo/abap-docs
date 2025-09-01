  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, ASSOCIATION](javascript:call_link\('abencds_f1_association.htm'\)) →  [ABAP CDS - path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) → 

ABAP CDS - path\_expr, attributes

Syntax

... \[ *\[*1*|*\*:*\]* *\[*INNER*|**{*LEFT OUTER*}* *\[*WHERE*\]**\]* *\[* [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\))*\]* \] ...

Extras:

[1\. ... 1*|*\*:](#!ABAP_ADDITION_1@1@)
[2\. ... INNER*|**{*LEFT OUTER*}* *\[*WHERE*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... cond\_expr](#!ABAP_ADDITION_3@3@)

Effect

For every association [\_assoc](javascript:call_link\('abencds_f1_association.htm'\)) of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), attributes for this part of the path expression can be defined in square brackets \[ \]. The following can be done using these attributes:

-   The polyvalence of the section can be declared.

-   The type of the join expression can be specified.

-   A filter condition cond\_expr can be specified.
    

Addition 1

... 1*|*\*:

Effect

Declaration of the polyvalence of the current association:

-   If the attribute 1: is specified, the current association is declared as not polyvalent.

-   If the attribute \*: is specified, the current association is declared as polyvalent.

The addition 1: makes it possible to use filter conditions in path expressions, which are used in [WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\)) clauses or [HAVING](javascript:call_link\('abencds_f1_having_clause.htm'\)) clauses. In a clause like this, it overwrites the cardinality of the [association](javascript:call_link\('abencds_f1_association.htm'\)). (The variant of the path expression can, however, be affected differently on certain database systems.)

The addition 1: or \*: cannot be specified as the only addition in square brackets.

Note

The addition 1: prevents a syntax error, if a path specified with filter conditions or with a quantity value cardinality is used in a [WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\)) clause or [HAVING](javascript:call_link\('abencds_f1_having_clause.htm'\)) clause. It is not possible at runtime, however, to check whether the required uniqueness is achieved by the condition.

Addition 2

... INNER*|**{*LEFT OUTER*}* *\[*WHERE*\]*

Effect

Defines the type of join expression where the current expression is implemented:

-   INNER is an inner join

-   LEFT OUTER is a left outer join

If the type of join expression is not specified explicitly, the type depends on the place where the path expression is used:

-   After [FROM](javascript:call_link\('abencds_f1_select_statement.htm'\)), it is an inner join (INNER JOIN)

-   In all other locations, it is a left outer join (LEFT OUTER JOIN)

If the type of join expression is defined before a filter condition cond\_expr, the addition must be specified before the addition WHERE. If this is not the case, WHERE cannot be specified.

Note

In the DDL Source Text Editor of the [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), you can view the configuration of the join in the display of the generated SQL DDL statement.

Executable Example

[Joins of Associations](javascript:call_link\('abencds_assoc_join_abexa.htm'\))

Addition 3

... cond\_expr

Effect

[Filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry") for the current association. A filter condition is a condition [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) implemented as an expanded condition for the join when resolving the association to the join in question. Special [rules](javascript:call_link\('abencds_cond_expr_filter.htm'\)) apply when specifying the condition.

If no filter condition is specified in the path expression, any default filter condition specified for the [association](javascript:call_link\('abencds_f1_association.htm'\)) is used.

Note

In most cases, a filter condition modifies the join expression defined for an association of a path expression on the database. This means that a separate join expression is defined for each association with a filter condition by default. This is not necessary, however, if an association is used more than once and the same filter condition is specified. This is why the [ABAP annotation](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") [AbapCatalog.compiler.compareFilter](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) can be used to configure whether the filter conditions of a multiple association are compared semantically for the path expressions defined as joins when a view is activated . If the filter condition matches, the associated join expression is created only once, which generally improves performance. In most cases, it is best to use the annotation and propose it when creating a CDS view in the ADT. The results sets of the two configurations can, however, differ.

Example

The following three views contain path expressions with filter conditions in their SELECT list that can be defined in join expressions when activated.

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

In the second view, AbapCatalog.compiler.compareFilter has the value false and a join expression is defined for each association of the path expressions regardless of the identical conditions. This means that this variant looks like the variant of the third views (in which all conditions are different):

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
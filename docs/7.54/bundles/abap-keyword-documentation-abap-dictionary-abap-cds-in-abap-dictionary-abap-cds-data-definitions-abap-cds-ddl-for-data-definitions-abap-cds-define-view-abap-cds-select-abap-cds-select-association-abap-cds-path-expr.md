# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, ASSOCIATION / ABAP CDS - path_expr

Included pages: 3


### abencds_f1_path_expression.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, ASSOCIATION](javascript:call_link\('abencds_f1_association.htm'\)) → 

ABAP CDS - path\_expr

Syntax

... *\[*source.*\]*\_assoc1*\[* [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\))*\]**\[*[attributes](javascript:call_link\('abencds_path_expression_attr.htm'\))*\]*
           *\[*.\_assoc2*\[* [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\))*\]**\[* [attributes](javascript:call_link\('abencds_path_expression_attr.htm'\))*\]* ... *\]* ...

Effect

Specifies an [SQL path expression](javascript:call_link\('abencds_path_expression_glosry.htm'\) "Glossary Entry") in a SELECT statement of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). A path expression of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") is a string of [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") separated by periods (.) whose names are specified using \_assoc1, \_assoc2, and so on. The name of the CDS entity source in which the first CDS association is defined or published can be specified in front of this CDS association. The first CDS association of a path expression must be either:

-   Defined in the current CDS view.

-   Published as an element of the SELECT list or as an [element list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)) in a CDS view or CDS hierarchy that is a data source of the current view.

All further CDS associations must be published in the target data source of the directly prefixed CDS association in the path expression. No CDS associations can be used in a path expression that are defined in an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

[attributes](javascript:call_link\('abencds_path_expression_attr.htm'\)) can be used to specify attributes in angle brackets after every CDS association. These attributes define the following further properties of this section of the path expression:

-   Declaration of monovalency

-   Type of the join expression defined when used

-   Specified filter conditions

If the data source target of a specified [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is a CDS entity with [input parameters](javascript:call_link\('abencds_f1_param.htm'\)), [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\)) must be used after the name \_assoc to pass actual parameters to them. No parameters can be specified for a CDS association published as an [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of a [SELECT](javascript:call_link\('abencds_f1_select_list.htm'\)) list.

Use of Path Expressions

Path expressions can be used as follows in the CDS DDL in ABAP CDS:

-   Path expressions with CDS associations of any target data sources can [publish](javascript:call_link\('abencds_f1_select_list_association.htm'\)) their final CDS associations as [elements](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of [SELECT lists](javascript:call_link\('abencds_f1_select_list.htm'\)) for use in other CDS entities or in ABAP SQL.

-   Path expressions with CDS associations whose target data source is not an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry") can be used as follows:

-   To specify the target data source of the final CDS association as the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) after [FROM](javascript:call_link\('abencds_f1_select_statement.htm'\)). The path expression represents an inner join (INNER JOIN) by default.

-   To specify an appended element .element of the target data source of the last CDS association as an [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)). The path expression represents a right outer join (LEFT OUTER JOIN) by default.

-   To specify an appended element .element of the target data source of the last CDS association as an operand of [WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\)) or [HAVING](javascript:call_link\('abencds_f1_having_clause.htm'\)) conditions, and [WHEN conditions](javascript:call_link\('abencds_f1_searched_case_expr.htm'\)). The path expression represents a right outer join (LEFT OUTER JOIN) by default.

In the case of self associations in which the target data source is the same as the source data source, these usages are not possible in the CDS entity where they are defined.

When a non-aggregated element of a SELECT list is specified with [aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) and in a WHERE condition or HAVING condition, the result of the path expression must be monovalent. This means that the cardinality of all CDS associations used is either "to 1" or the path expression can contain only [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) that are declared as monovalent using the addition 1:.

The following is evaluated when a CDS entity is accessed using a path expression:

-   The joins defined by the CDS associations, from left to right.

-   All other conditions of the CDS entities in question.

The path expression addresses the full result of this evaluation or a single element appended using .element.

Notes

-   The most simple path expression is the name of a single CDS association.

-   When joins in path expressions are defined by CDS associations, note that their left side is always the CDS entity that publishes the CDS association. This applies particularly to CDS associations that are published in data sources of CDS entities and passed.

-   CDS DDL path expressions can also be used in [conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) in the ABAP [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") of ABAP CDS.

-   A CDS association whose target data source does not publish a CDS association cannot be followed by any further associations in a path expression. More specifically, no further CDS associations can be made into a path expression after CDS associations whose target data sources are database tables or classic views.

-   When the CDS associations of the path expressions of a view are defined as joins, they are mapped to as few join expressions as possible. The [ABAP annotation](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") [AbapCatalog.compiler.compareFilter](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) is used as support here. The value true guarantees that CDS associations with semantically identical [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) do not produce differing join expressions.

-   Path expressions with CDS associations whose target data source is an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry") cannot be used anywhere where they could produce instances of join expressions.

Example

The following CDS view contains the simple path expression \_scarr\[inner\].carrname in the SELECT list, whereby the attribute [INNER](javascript:call_link\('abencds_path_expression_attr.htm'\)) is specified that controls the type of join. The program DEMO\_FROM\_JOIN\_TO\_ASSOCIATION demonstrates that this view returns the same result as a directly programmed inner join in ABAP CDS or in ABAP SQL.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JN2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_join2
  as select from spfli
  association to scarr as \_scarr on
    spfli.carrid = \_scarr.carrid
  {
    \_scarr\[inner\].carrname as carrier,
    spfli.connid           as flight,
    spfli.cityfrom         as departure,
    spfli.cityto           as arrival
  }      

Example

This example shows three CDS views, sales\_order, business\_partner, and invoice. The CDS view invoice uses its own CDS association and CDS associations from the other two views in path expressions:

-   The CDS association sales\_order of the CDS view business\_partner is specified as a data source after FROM. A filter condition guarantees that only certain orders can be used as data sources.

-   The separate CDS association invoice\_header is used in a path expression as an operand in the WHERE condition.

-   The CDS association note\_header of the CDS view sales\_order is addressed using the alternative name bpa in business\_partner and defined as an element of the SELECT list. This means this CDS association can also be used in CDS views that use invoice as a data source.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
         association \[0..1\] to snwd\_text\_key as \_note\_header
           on snwd\_so.note\_guid = \_note\_header.node\_key
  { \* } // Include all fields from snwd\_text\_key

@AbapCatalog.sqlViewName: 'BPA\_VW'
define view business\_partner as
  select from snwd\_bpa
         association \[0..\*\] to sales\_order
           on snwd\_bpa.node\_key = sales\_order.buyer\_guid
  { \* }

@AbapCatalog.sqlViewName: 'SALESO\_INV\_VW'
define view invoice as
  select from
         /\* Association "sales\_order" with filter as data source \*/
         business\_partner.sales\_order\[
           lifecycle\_status <> 'C' and lifecycle\_status <> 'X'\]
           as bpa\_so //alias for data source
         /\* Association only used in this view definition \*/
         association \[0..1\] to snwd\_so\_inv\_head as \_invoice\_header
           on bpa\_so.node\_key = \_invoice\_header.so\_guid
        { key bpa\_so.node\_key, //Field from ON-condition in \_invoice\_header
              bpa\_so.so\_id,
              bpa\_so.note\_guid, //Field from ON-condition in note\_header
              bpa\_so.lifecycle\_status,
              /\* Association is not published, but its element \*/
              \_invoice\_header.dunning\_level,
              /\* Association from data source is published here \*/
              bpa\_so.note\_header }
          /\* Path expression in WHERE clause \*/
          where \_invoice\_header.dunning\_level > '0';

Executable Example

[Path Expressions, Use in the SELECT List](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\))

Continue
[ABAP CDS - path\_expr, attributes](javascript:call_link\('abencds_path_expression_attr.htm'\))
![Example](exa.gif "Example") [ABAP CDS - Joins of Associations](javascript:call_link\('abencds_assoc_join_abexa.htm'\))


### abencds_path_expression_attr.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, ASSOCIATION](javascript:call_link\('abencds_f1_association.htm'\)) →  [ABAP CDS - path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) → 

ABAP CDS - path\_expr, attributes

Syntax

... \[ *\[*1*|*\*:*\]* *\[*INNER*|**{*LEFT OUTER*}* *\[*WHERE*\]**\]* *\[* [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\))*\]* \] ...

Extras:

[1\. ... 1*|*\*:](#!ABAP_ADDITION_1@1@)
[2\. ... INNER*|**{*LEFT OUTER*}* *\[*WHERE*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... cond\_expr](#!ABAP_ADDITION_3@3@)

Effect

For every CDS association [\_assoc](javascript:call_link\('abencds_f1_association.htm'\)) of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), attributes for this part of the path expression can be defined in square brackets \[ \]. The following can be done using these attributes:

-   The polyvalence of the section can be declared.

-   The type of the join expression can be specified.

-   A filter condition cond\_expr can be specified.
    

Addition 1

... 1*|*\*:

Effect

Declaration of the polyvalence of the current CDS association:

-   If the attribute 1: is specified, the current CDS association is declared as not polyvalent.

-   If the attribute \*: is specified, the current CDS association is declared as polyvalent.

The addition 1: makes it possible to use filter conditions in path expressions, which are used in [WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\)) clauses or [HAVING](javascript:call_link\('abencds_f1_having_clause.htm'\)) clauses. In a clause like this, it overwrites the cardinality of the [CDS association](javascript:call_link\('abencds_f1_association.htm'\)). (The variant of the path expression can, however, be affected differently on certain database systems.)

The addition 1: or \*: cannot be specified as the only addition in square brackets.

Note

The addition 1: prevents a syntax error, if a path specified with filter conditions or with a quantity value cardinality is used in a [WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\)) clause or [HAVING](javascript:call_link\('abencds_f1_having_clause.htm'\)) clause. It is not possible at runtime, however, to check whether the required uniqueness is achieved by the condition.

Addition 2

... INNER*|**{*LEFT OUTER*}* *\[*WHERE*\]*

Effect

Defines the type of join expression where the current CDS association is implemented:

-   INNER is an inner join

-   LEFT OUTER is a left outer join

If the type of join expression is not specified explicitly, the type depends on the place where the path expression is used:

-   After [FROM](javascript:call_link\('abencds_f1_select_statement.htm'\)), it is an inner join (INNER JOIN)

-   In all other locations, it is a left outer join (LEFT OUTER JOIN)

If the type of join expression is defined before a filter condition cond\_expr, the addition must be specified before the addition WHERE. If this is not the case, WHERE cannot be specified.

Note

In the DDL Source Text Editor of the [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), you can view the configuration of the join in the display of the generated SQL DDL statement.

Executable Example

[Joins of CDS Associations](javascript:call_link\('abencds_assoc_join_abexa.htm'\))

Addition 3

... cond\_expr

Effect

[Filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry") for the current CDS association. A filter condition is a condition [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) implemented as an expanded condition for the join when resolving the CDS association with the join in question. Special [rules](javascript:call_link\('abencds_cond_expr_filter.htm'\)) apply when specifying the condition.

If no filter condition is specified in the path expression, any default filter condition specified for the [CDS association](javascript:call_link\('abencds_f1_association.htm'\)) is used.

Note

In most cases, a filter condition modifies the join expression defined for a CDS association of a path expression on the database. This means that a separate join expression is defined for each CDS association with a filter condition by default. This is not necessary, however, if a CDS association is used more than once and the same filter condition is specified. This is why the [ABAP annotation](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") [AbapCatalog.compiler.compareFilter](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) can be used to configure whether the filter conditions of a multiple CDS association are compared semantically for the path expressions defined as joins when a view is activated . If the filter condition matches, the associated join expression is created only once, which generally improves performance. In most cases, it is best to use the annotation and propose it when creating a CDS view in the ADT. The results sets of the two configurations can, however, differ.

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


### abencds_assoc_join_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, ASSOCIATION](javascript:call_link\('abencds_f1_association.htm'\)) →  [ABAP CDS - path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) → 

ABAP CDS - Joins of Associations

This example demonstrates how to implement path expressions in joins in ABAP CDS.

Source Code

REPORT demo\_cds\_assoc\_joins.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES: wa1 TYPE demo\_join1,
           wa2 TYPE demo\_join2,
           wa3 TYPE demo\_join3.
    TYPES BEGIN OF wa.
    INCLUDE TYPE wa1 AS wa1 RENAMING WITH SUFFIX \_1.
    INCLUDE TYPE wa2 AS wa2 RENAMING WITH SUFFIX \_2.
    INCLUDE TYPE wa3 AS wa3 RENAMING WITH SUFFIX \_3.
    TYPES END OF wa.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      path\_outer TYPE TABLE OF demo\_cds\_assoc\_join1\_o WITH DEFAULT KEY,
      path\_inner TYPE TABLE OF demo\_cds\_assoc\_join1\_i WITH DEFAULT KEY,
      join\_outer TYPE TABLE OF wa WITH DEFAULT KEY,
      join\_inner TYPE TABLE OF wa WITH DEFAULT KEY.
    out->begin\_section( 'CDS Views'
      )->begin\_section( 'Path with \[left outer\]' ).
    SELECT \*
           FROM demo\_cds\_assoc\_join1\_o
           INTO TABLE @path\_outer.
    SORT path\_outer.
    out->write( path\_outer
      )->next\_section( 'Path with \[inner\]' ).
    SELECT \*
           FROM demo\_cds\_assoc\_join1\_i
           INTO TABLE @path\_inner.
    SORT path\_inner.
    out->write( path\_inner
      )->end\_section( )->end\_section(
      )->begin\_section( \`Open SQL Joins\`
      )->begin\_section(
        \`LEFT OUTER JOINs\` ).
    SELECT FROM
             demo\_cds\_assoc\_join1\_o AS t1
               LEFT OUTER JOIN
                 demo\_cds\_assoc\_join2 AS t2 ON t2~d = t1~d\_1
                     LEFT OUTER JOIN
                       demo\_join3 AS t3 ON t3~l = t2~d
           FIELDS t1~a\_1,
                  t1~b\_1,
                  t1~c\_1,
                  t1~d\_1,
                  t2~d AS d\_2,
                  t2~e AS e\_2,
                  t2~f AS f\_2,
                  t2~g AS g\_2,
                  t2~h AS h\_2,
                  t3~i AS i\_3,
                  t3~j AS j\_3,
                  t3~k AS k\_3,
                  t3~l AS l\_3
           INTO CORRESPONDING FIELDS OF TABLE @join\_outer.
    SORT join\_outer.
    out->write( join\_outer
      )->next\_section( \`INNER JOINs\` ).
    SELECT FROM
             demo\_cds\_assoc\_join1\_i AS t1
               INNER JOIN
                 demo\_cds\_assoc\_join2 AS t2 ON t2~d = t1~d\_1
                     INNER JOIN
                       demo\_join3 AS t3 ON t3~l = t2~d
           FIELDS t1~a\_1,
                  t1~b\_1,
                  t1~c\_1,
                  t1~d\_1,
                  t2~d AS d\_2,
                  t2~e AS e\_2,
                  t2~f AS f\_2,
                  t2~g AS g\_2,
                  t2~h AS h\_2,
                  t3~i AS i\_3,
                  t3~j AS j\_3,
                  t3~k AS k\_3,
                  t3~l AS l\_3
           INTO CORRESPONDING FIELDS OF TABLE @join\_inner.
    SORT join\_inner.
    out->write( join\_inner )->display( ).
    ASSERT path\_inner = join\_inner.
    ASSERT path\_outer = join\_outer.  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( )->begin\_section( \`Database Tables\` ).
    DELETE FROM demo\_join1.
    INSERT demo\_join1 FROM TABLE @( VALUE #(
      ( a = 'a1' b = 'b1' c = 'c1' d = 'uu' )
      ( a = 'a2' b = 'b2' c = 'c2' d = 'uu' )
      ( a = 'a3' b = 'b3' c = 'c3' d = 'vv' )
      ( a = 'a4' b = 'b4' c = 'c4' d = 'ww' ) ) ).
    SELECT \* FROM demo\_join1 INTO TABLE @DATA(itab1).
    DELETE FROM demo\_join2.
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'uu' e = 'e1' f = 'f1' g = 'g1'  h = 'h1' )
      ( d = 'ww' e = 'e2' f = 'f2' g = 'g2'  h = 'h2' )
      ( d = 'xx' e = 'e3' f = 'f3' g = 'g3'  h = 'h3' ) ) ).
    SELECT \* FROM demo\_join2 INTO TABLE @DATA(itab2).
    DELETE FROM demo\_join3.
    INSERT demo\_join3 FROM TABLE @( VALUE #(
      ( i = 'i1' j = 'j1' k = 'k1' l = 'vv' )
      ( i = 'i2' j = 'j2' k = 'k2' l = 'vv' )
      ( i = 'i3' j = 'j3' k = 'k3' l = 'ww' ) ) ).
    SELECT \* FROM demo\_join3 INTO TABLE @DATA(itab3).
    out->begin\_section( \`demo\_join1\`
      )->write( itab1
      )->next\_section( \`demo\_join2\`
      )->write( itab2
      )->next\_section( \`demo\_join3\`
      )->write( itab3
      )->end\_section(
      )->end\_section( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates how joins are used for [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) with [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"). The following two CDS views - DEMO\_CDS\_ASSOC\_JOIN1\_O and DEMO\_CDS\_ASSOC\_JOIN1\_I - access their own association \_demo\_join2 in path expressions of the SELECT list and the [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) CDS association \_demo\_join3 of DEMO\_CDS\_ASSOC\_JOIN2.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASJO1O'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Join1\_o
  as select from demo\_join1
  association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
    \_demo\_join2.d = demo\_join1.d
{
  demo\_join1.a                                      as a\_1,
  demo\_join1.b                                      as b\_1,
  demo\_join1.c                                      as c\_1,
  demo\_join1.d                                      as d\_1,
  \_demo\_join2\[left outer\].d                         as d\_2,
  \_demo\_join2\[left outer\].e                         as e\_2,
  \_demo\_join2\[left outer\].f                         as f\_2,
  \_demo\_join2\[left outer\].g                         as g\_2,
  \_demo\_join2\[left outer\].h                         as h\_2,
  \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].i as i\_3,
  \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].j as j\_3,
  \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].k as k\_3,
  \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].l as l\_3
}    

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASJO1I'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Join1\_i
  as select from demo\_join1
  association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
    \_demo\_join2.d = demo\_join1.d
{
  demo\_join1.a                            as a\_1,
  demo\_join1.b                            as b\_1,
  demo\_join1.c                            as c\_1,
  demo\_join1.d                            as d\_1,
  \_demo\_join2\[inner\].d                    as d\_2,
  \_demo\_join2\[inner\].e                    as e\_2,
  \_demo\_join2\[inner\].f                    as f\_2,
  \_demo\_join2\[inner\].g                    as g\_2,
  \_demo\_join2\[inner\].h                    as h\_2,
  \_demo\_join2\[inner\].\_demo\_join3\[inner\].i as i\_3,
  \_demo\_join2\[inner\].\_demo\_join3\[inner\].j as j\_3,
  \_demo\_join2\[inner\].\_demo\_join3\[inner\].k as k\_3,
  \_demo\_join2\[inner\].\_demo\_join3\[inner\].l as l\_3
}    

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASJO2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Join2
  as select from demo\_join2
  association \[\*\] to demo\_join3 as \_demo\_join3 on
    \_demo\_join3.l = demo\_join2.d
{
  \_demo\_join3,
  demo\_join2.d,
  demo\_join2.e,
  demo\_join2.f,
  demo\_join2.g,
  demo\_join2.h
}    

[LEFT OUTER](javascript:call_link\('abencds_path_expression_attr.htm'\)) and [INNER](javascript:call_link\('abencds_path_expression_attr.htm'\)) are explicitly specified in the path expressions.

-   LEFT OUTER affects the implementation of CDS associations in a left outer join, which is the default behavior at these places.

-   INNER affects the implementation of CDS associations in an inner join, which overwrites the default behavior at these places.

In the DDL Source Text Editor of the [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), you can view the relevant configuration of the join in the display of the generated SQL DDL statement.

This example shows that the result sets of the CDS views DEMO\_CDS\_ASSOC\_JOIN1\_O and DEMO\_CDS\_ASSOC\_JOIN1\_I are identical to the result sets of ABAP SQL statements [SELECT](javascript:call_link\('abapselect.htm'\)) with explicitly programmed left outer and inner joins. The CDS views and the database table DEMO\_JOIN3 above are accessed. All involved database tables are filled with sample data. With an inner join, unlike a left outer join, only the row is returned for which the join condition t3~l = t2~d is fulfilled.

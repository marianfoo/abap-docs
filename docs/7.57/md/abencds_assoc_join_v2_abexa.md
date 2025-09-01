---
title: "CDS DDL - CDS View Entity, Joins of CDS Associations"
description: |
  This example demonstrates how path expressions are transformed to joins in ABAP CDS. Source Code REPORT demo_cds_assoc_joins_ve. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: class_constructor, main. PRIVATE SECTION. TYPES: wa1 TYPE demo_join1, wa2 TYPE demo_join2, wa3 TYPE demo_join
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_assoc_join_v2_abexa.htm"
abapFile: "abencds_assoc_join_v2_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "types", "abencds", "assoc", "join", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, Joins of CDS Associations, ABENCDS_ASSOC_JOIN_V2_ABEXA, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, Joins of CDS Associations

This example demonstrates how path expressions are transformed to joins in ABAP CDS.

Source Code   

REPORT demo\_cds\_assoc\_joins\_ve.
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
      path\_outer TYPE TABLE OF demo\_cds\_assoc\_join1\_o\_ve
                 WITH DEFAULT KEY,
      path\_inner TYPE TABLE OF demo\_cds\_assoc\_join1\_i\_ve
                 WITH DEFAULT KEY,
      join\_outer TYPE TABLE OF wa WITH DEFAULT KEY,
      join\_inner TYPE TABLE OF wa WITH DEFAULT KEY.
    out->begin\_section( 'CDS Views'
      )->begin\_section( 'Path with \[left outer\]' ).
    SELECT \*
           FROM demo\_cds\_assoc\_join1\_o\_ve
           INTO TABLE @path\_outer.
    SORT path\_outer.
    out->write( path\_outer
      )->next\_section( 'Path with \[inner\]' ).
    SELECT \*
           FROM demo\_cds\_assoc\_join1\_i\_ve
           INTO TABLE @path\_inner.
    SORT path\_inner.
    out->write( path\_inner
      )->end\_section( )->end\_section(
      )->begin\_section( \`ABAP SQL Joins\`
      )->begin\_section(
        \`LEFT OUTER JOINs\` ).
    SELECT FROM
             demo\_cds\_assoc\_join1\_o\_ve AS t1
               LEFT OUTER JOIN
                 demo\_cds\_assoc\_join2\_ve AS t2 ON t2~d = t1~d\_1
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
             demo\_cds\_assoc\_join1\_i\_ve AS t1
               INNER JOIN
                 demo\_cds\_assoc\_join2\_ve AS t2 ON t2~d = t1~d\_1
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
    SELECT \* FROM demo\_join1 INTO TABLE @FINAL(itab1).
    DELETE FROM demo\_join2.
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'uu' e = 'e1' f = 'f1' g = 'g1'  h = 'h1' )
      ( d = 'ww' e = 'e2' f = 'f2' g = 'g2'  h = 'h2' )
      ( d = 'xx' e = 'e3' f = 'f3' g = 'g3'  h = 'h3' ) ) ).
    SELECT \* FROM demo\_join2 INTO TABLE @FINAL(itab2).
    DELETE FROM demo\_join3.
    INSERT demo\_join3 FROM TABLE @( VALUE #(
      ( i = 'i1' j = 'j1' k = 'k1' l = 'vv' )
      ( i = 'i2' j = 'j2' k = 'k2' l = 'vv' )
      ( i = 'i3' j = 'j3' k = 'k3' l = 'ww' ) ) ).
    SELECT \* FROM demo\_join3 INTO TABLE @FINAL(itab3).
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

This example demonstrates which joins are implemented for [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm) containing [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry"). The following two CDS view entities - DEMO\_CDS\_ASSOC\_JOIN1\_O\_VE and DEMO\_CDS\_ASSOC\_JOIN1\_I\_VE - access their own association \_demo\_join2 in path expressions of the SELECT list and the [exposed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_association_v2.htm) CDS association \_demo\_join3 of DEMO\_CDS\_ASSOC\_JOIN2.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_ASSOC\_JOIN1\_O\_VE
  as select from demo\_join1
  association to DEMO\_CDS\_ASSOC\_JOIN2\_VE as \_demo\_join2 on
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

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_ASSOC\_JOIN1\_I\_VE
  as select from demo\_join1
  association to DEMO\_CDS\_ASSOC\_JOIN2\_VE as \_demo\_join2 on
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

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_ASSOC\_JOIN2\_VE
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

[LEFT OUTER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expr_jointype_v2.htm) and [INNER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expr_jointype_v2.htm) are explicitly specified in the path expressions.

-   LEFT OUTER specifies the implementation of CDS associations as a left outer join, which is the default behavior at these places.
-   INNER specifies the implementation of CDS associations as an inner join, which overwrites the default behavior at these places.

In the DDL source code editor of the [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), the respective join can be seen in the display of the generated SQL DDL statement.

The program DEMO\_CDS\_ASSOC\_JOINS\_VE displayed above shows that the result sets of the CDS view entities DEMO\_CDS\_ASSOC\_JOIN1\_O\_VE and DEMO\_CDS\_ASSOC\_JOIN1\_I\_VE are identical to the result sets of ABAP SQL statements [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) with explicitly programmed left outer and inner joins. The CDS view entities and the DDIC database table DEMO\_JOIN3 above are accessed. All involved database tables are filled with sample data. With an inner join, unlike a left outer join, only the row is returned for which the join condition t3~l = t2~d is fulfilled.
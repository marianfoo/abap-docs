---
title: "CDS DDL - DDIC-Based View, Joins of Associations"
description: |
  This example demonstrates how path expressions are transformed to joins in ABAP CDS. Source Code  Public class definition CLASS cl_demo_cds_assoc_joins DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . PRIVATE SECTION. TYPES wa1 TY
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_assoc_join_v1_abexa.htm"
abapFile: "abencds_assoc_join_v1_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "types", "abencds", "assoc", "join", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, path\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20Joins%20of%20Associations%2C%20ABENCDS_ASSOC_JOIN_V1_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n%20for%20improvement:)

CDS DDL - DDIC-Based View, Joins of Associations

This example demonstrates how path expressions are transformed to joins in ABAP CDS.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_assoc\_joins DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
        REDEFINITION .
  PRIVATE SECTION.
    TYPES wa1 TYPE demo\_join1 .
    TYPES wa2 TYPE demo\_join2 .
    TYPES wa3 TYPE demo\_join3 .
    TYPES:
      BEGIN OF wa.
        INCLUDE TYPE wa1 AS wa1 RENAMING WITH SUFFIX \_1.
        INCLUDE TYPE wa2 AS wa2 RENAMING WITH SUFFIX \_2.
        INCLUDE TYPE wa3 AS wa3 RENAMING WITH SUFFIX \_3.
  TYPES END OF wa .
    METHODS fill\_tables .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_assoc\_joins IMPLEMENTATION.
  METHOD main.
    DATA:
      path\_outer TYPE TABLE OF demo\_cds\_assoc\_join1\_o WITH DEFAULT KEY,
      path\_inner TYPE TABLE OF demo\_cds\_assoc\_join1\_i WITH DEFAULT KEY,
      join\_outer TYPE TABLE OF wa WITH DEFAULT KEY,
      join\_inner TYPE TABLE OF wa WITH DEFAULT KEY.
    fill\_tables( ).
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
      )->begin\_section( \`ABAP SQL Joins\`
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
    out->write( join\_inner ).
    ASSERT path\_inner = join\_inner.
    ASSERT path\_outer = join\_outer.
  ENDMETHOD.
  METHOD fill\_tables.
    out->begin\_section( \`Database Tables\` ).
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

Description   

This example demonstrates which joins are implemented for [path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) containing [CDS associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry"). The following two CDS views - DEMO\_CDS\_ASSOC\_JOIN1\_O and DEMO\_CDS\_ASSOC\_JOIN1\_I - access their own association \_demo\_join2 in path expressions of the SELECT list and the [exposed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_association_v1.htm) CDS association \_demo\_join3 of DEMO\_CDS\_ASSOC\_JOIN2.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASJO1O'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Join1\_o
  as select from demo\_join1
  association to Demo\_Cds\_Assoc\_Join2  
    as \_demo\_join2  
    on \_demo\_join2.d = demo\_join1.d
{
  key demo\_join1.a                                      as a\_1,
      demo\_join1.b                                      as b\_1,
      demo\_join1.c                                      as c\_1,
      demo\_join1.d                                      as d\_1,
      \_demo\_join2\[left outer\].d                         as d\_2,
      \_demo\_join2\[left outer\].e                         as e\_2,
      \_demo\_join2\[left outer\].f                         as f\_2,
      \_demo\_join2\[left outer\].g                         as g\_2,
      \_demo\_join2\[left outer\].h                         as h\_2,
      \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].i as i\_3,
      \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].j as j\_3,
      \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].k as k\_3,
      \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].l as l\_3
}

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASJO1I'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Join1\_i
  as select from demo\_join1
  association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2
    on \_demo\_join2.d = demo\_join1.d
{
  key demo\_join1.a                            as a\_1,
      demo\_join1.b                            as b\_1,
      demo\_join1.c                            as c\_1,
      demo\_join1.d                            as d\_1,
      \_demo\_join2\[inner\].d                    as d\_2,
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
  association \[\*\] to demo\_join3 as \_demo\_join3
    on \_demo\_join3.l = demo\_join2.d
{
      \_demo\_join3,
  key demo\_join2.d,
      demo\_join2.e,
      demo\_join2.f,
      demo\_join2.g,
      demo\_join2.h
}

[LEFT OUTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_jointype_v1.htm) and [INNER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_jointype_v1.htm) are explicitly specified in the path expressions.

-   LEFT OUTER specifies the implementation of CDS associations as a left outer join, which is the default behavior at these places.
-   INNER specifies the implementation of CDS associations as an inner join, which overwrites the default behavior at these places.

In the DDL source code editor of the [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"), the respective join can be seen in the display of the generated SQL DDL statement.

This example shows that the result sets of the CDS views DEMO\_CDS\_ASSOC\_JOIN1\_O and DEMO\_CDS\_ASSOC\_JOIN1\_I are identical to the result sets of ABAP SQL statements [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) with explicitly programmed left outer and inner joins. The CDS views and the DDIC database table DEMO\_JOIN3 above are accessed. All involved database tables are filled with sample data. With an inner join, unlike a left outer join, only the row is returned for which the join condition t3~l = t2~d is fulfilled.
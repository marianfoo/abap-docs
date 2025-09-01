  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, select\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm) →  [ABAP CDS - SELECT, element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm) →  [ABAP CDS - SELECT, association](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_association.htm) → 

ABAP CDS - Publishing Associations

This example demonstrates how associations are [published](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_association.htm) in the SELECT list of a CDS view.

Source Code

REPORT demo\_cds\_publish\_associations.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    "Using published association in FROM clause
    SELECT \*
           FROM demo\_cds\_publish\_assoc\_1\\\_demo\_join2
           INTO TABLE @DATA(result1).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_publish\_assoc\_1
             INNER JOIN demo\_join2
               ON demo\_cds\_publish\_assoc\_1~d = demo\_join2~d
           INTO TABLE @DATA(result1e).
    ASSERT result1 = result1e.
    out->write( result1 ).
    "Using published association in FROM clause
    SELECT \*
           FROM demo\_cds\_publish\_assoc\_1a\\\_demo\_join2
           INTO TABLE @DATA(result1a).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_publish\_assoc\_1a
             INNER JOIN demo\_join2
               ON demo\_cds\_publish\_assoc\_1a~d = demo\_join2~d
           INTO TABLE @DATA(result1ae).
    ASSERT result1a = result1ae.
    out->write( result1a ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_publish\_assoc\_2\\\_demo\_join2
           INTO TABLE @DATA(result2).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_publish\_assoc\_2
             INNER JOIN demo\_join2
               ON demo\_cds\_publish\_assoc\_2~d = demo\_join2~d
           INTO TABLE @DATA(result2e).
    ASSERT result2 = result2e.
    out->write( result2 ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_publish\_assoc\_2a\\\_demo\_join2
           INTO TABLE @DATA(result2a).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_publish\_assoc\_2a
             INNER JOIN demo\_join2
               ON demo\_cds\_publish\_assoc\_2a~d = demo\_join2~d
           INTO TABLE @DATA(result2ae).
    ASSERT result2a = result2ae.
    out->write( result2a ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_publish\_assoc\_3\\\_demo\_join2
           INTO TABLE @DATA(result3).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_publish\_assoc\_3
             INNER JOIN demo\_join2
               ON demo\_cds\_publish\_assoc\_3~d = demo\_join2~d
           INTO TABLE @DATA(result3e).
    ASSERT result3 = result3e.
    out->write( result3 ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_publish\_assoc\_3a\\\_demo\_join2
           INTO TABLE @DATA(result3a).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_publish\_assoc\_3a
             INNER JOIN demo\_join2
               ON demo\_cds\_publish\_assoc\_3a~d = demo\_join2~d
           INTO TABLE @DATA(result3ae).
    ASSERT result3a = result3ae.
    out->write( result3a ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    DELETE FROM demo\_join1.
    INSERT demo\_join1 FROM TABLE @( VALUE #(
      ( a = 'a1' b = 'b1' c = 'c1' d = 'uu' )
      ( a = 'a2' b = 'b2' c = 'c2' d = 'uu' )
      ( a = 'a3' b = 'b3' c = 'c3' d = 'vv' )
      ( a = 'a4' b = 'b4' c = 'c4' d = 'ww' )
      ( a = 'a5' b = 'b5' c = 'c5' d = 'xx' ) ) ).
    DELETE FROM demo\_join2.
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'uu' e = 'e1' f = 'f1' g = 'g1'  h = 'h1' )
      ( d = 'ww' e = 'e2' f = 'f2' g = 'g2'  h = 'h2' )
      ( d = 'xx' e = 'e3' f = 'f3' g = 'g3'  h = 'h3' ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

It also demonstrates how [CDS associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") are accessed that are published in their SELECT list using CDS views. For each view, a use of the published association as a data source of a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement in a [path expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) is shown. As a comparison, the explicit join expression that produces the same result is shown.

-   The following CDS view publishes its association \_demo\_join2, which associates its data source demo\_join1 with the database table demo\_join1. The field d used in the ON condition of the source data source must also be an element of the SELECT list.

@AbapCatalog.sqlViewName: 'DEMOCDSPUBASSO1'
define view demo\_cds\_publish\_assoc\_1
  as select from
    demo\_join1
    association to demo\_join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2,
      demo\_join1.d
    }

When the association demo\_cds\_publish\_assoc\_1\\\_demo\_join2 is accessed, the subsequent access creates an instance of the explicitly used inner join and produces the result of this join.

-   The following CDS view matches the preceding view, but has an additional WHERE condition.

@AbapCatalog.sqlViewName: 'DEMOCDSPUBASSO1A'
define view demo\_cds\_publish\_assoc\_1a
  as select from
    demo\_join1
    association to demo\_join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2,
      demo\_join1.d
    }
    where
      d = 'ww'

When the association demo\_cds\_publish\_assoc\_1a\\\_demo\_join2 is accessed, the results set of the left side of the join is restricted by the WHERE condition in the source data source of the path expression.

-   The following CDS view accesses the view demo\_cds\_publish\_assoc\_1 above. It does not have its own association, but it does publish the association of its data source demo\_cds\_publish\_assoc\_1.\_demo\_join2. Here, the field demo\_cds\_publish\_assoc\_1.d of the source data source used in the ON condition must again be part of the SELECT list.

@AbapCatalog.sqlViewName: 'DEMOCDSPUBASSO2'
define view demo\_cds\_publish\_assoc\_2
  as select from
    demo\_cds\_publish\_assoc\_1
    {
      demo\_cds\_publish\_assoc\_1.\_demo\_join2,
      demo\_cds\_publish\_assoc\_1.d
    }

When the association demo\_cds\_publish\_assoc\_2\\\_demo\_join2 is accessed, the subsequent access creates an instance of the explicitly used inner join and produces its result. The view demo\_cds\_publish\_assoc\_2 is not subject to any further restrictions, which means the result is the same as when demo\_cds\_publish\_assoc\_1\\\_demo\_join2 is accessed.

-   The following CDS view matches the preceding view, but has an additional WHERE condition.

@AbapCatalog.sqlViewName: 'DEMOCDSPUBASSO2A'
define view demo\_cds\_publish\_assoc\_2a
  as select from
    demo\_cds\_publish\_assoc\_1
    {
      demo\_cds\_publish\_assoc\_1.\_demo\_join2,
      demo\_cds\_publish\_assoc\_1.d
    }
    where
      d = 'xx'

When the association demo\_cds\_publish\_assoc\_2a\\\_demo\_join2 is accessed, the results set of the left side of the join is restricted by the WHERE condition in the source data source of the path expression. This is different from accessing demo\_cds\_publish\_assoc\_1a\\\_demo\_join2. The association defined in demo\_cds\_publish\_assoc\_1a is published, but the source data source is demo\_cds\_publish\_assoc\_2a with a different WHERE condition.

-   The following CDS view accesses the view demo\_cds\_publish\_assoc\_1a above. It does not have its own association, but it doers publish the association of its data source demo\_cds\_publish\_assoc\_1a.\_demo\_join2.

@AbapCatalog.sqlViewName: 'DEMOCDSPUBASSO3'
define view demo\_cds\_publish\_assoc\_3
  as select from
    demo\_cds\_publish\_assoc\_1a
    {
      demo\_cds\_publish\_assoc\_1a.\_demo\_join2,
      demo\_cds\_publish\_assoc\_1a.d
    }

When the association demo\_cds\_publish\_assoc\_3\\\_demo\_join2 is accessed, the subsequent access creates an instance of the explicitly used inner join and produces its result. The view demo\_cds\_publish\_assoc\_3 is not subject to any further restrictions, which means the result is the same as when demo\_cds\_publish\_assoc\_1a\\\_demo\_join2 is accessed.

-   The following CDS view matches the preceding view, but has an additional WHERE condition.

@AbapCatalog.sqlViewName: 'DEMOCDSPUBASSO3A'
define view demo\_cds\_publish\_assoc\_3A
  as select from
    demo\_cds\_publish\_assoc\_1a
    {
      demo\_cds\_publish\_assoc\_1a.\_demo\_join2,
      demo\_cds\_publish\_assoc\_1a.d
    }
    where
      d = 'xx'

When the association demo\_cds\_publish\_assoc\_3a\\\_demo\_join2 is accessed, the results set of the left side of the join is restricted by the WHERE condition in the source data source of the path expression. The disjoint WHERE condition in demo\_cds\_publish\_assoc\_1a means that no matching rows are found, however, and the results set of the left side of the join is empty.
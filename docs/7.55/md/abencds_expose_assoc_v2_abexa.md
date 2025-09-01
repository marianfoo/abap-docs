  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - CDS View Entity, SELECT, select\_list](javascript:call_link\('abencds_select_list_v2.htm'\)) →  [CDS DDL - CDS View Entity, SELECT, element](javascript:call_link\('abencds_select_list_entry_v2.htm'\)) →  [CDS DDL - CDS View Entity, SELECT, expose\_assoc](javascript:call_link\('abencds_select_list_association_v2.htm'\)) → 

CDS DDL - CDS View Entity, Exposing CDS Associations

This example demonstrates how CDS associations are [exposed](javascript:call_link\('abencds_select_list_association_v2.htm'\)) in the SELECT list of a CDS view entity.

Source Code

REPORT demo\_cds\_expose\_assoc\_ve.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    "Using exposed association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_1\_ve\\\_demo\_join2 as \_demo\_join2
           INTO TABLE @DATA(result1).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_1\_ve
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_1\_ve~d = demo\_join2~d
           INTO TABLE @DATA(result1e).
    ASSERT result1 = result1e.
    out->write( result1 ).
    "Using exposed association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_1a\_ve\\\_demo\_join2 as \_demo\_join2
           INTO TABLE @DATA(result1a).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_1a\_ve
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_1a\_ve~d = demo\_join2~d
           INTO TABLE @DATA(result1ae).
    ASSERT result1a = result1ae.
    out->write( result1a ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_2\_ve\\\_demo\_join2 as \_demo\_join2
           INTO TABLE @DATA(result2).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_2\_ve
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_2\_ve~d = demo\_join2~d
           INTO TABLE @DATA(result2e).
    ASSERT result2 = result2e.
    out->write( result2 ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_2a\_ve\\\_demo\_join2 as \_demo\_join2
           INTO TABLE @DATA(result2a).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_2a\_ve
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_2a\_ve~d = demo\_join2~d
           INTO TABLE @DATA(result2ae).
    ASSERT result2a = result2ae.
    out->write( result2a ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_3\_ve\\\_demo\_join2 as \_demo\_join2
           INTO TABLE @DATA(result3).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_3\_ve
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_3\_ve~d = demo\_join2~d
           INTO TABLE @DATA(result3e).
    ASSERT result3 = result3e.
    out->write( result3 ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_3a\_ve\\\_demo\_join2 as \_demo\_join2
           INTO TABLE @DATA(result3a).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_3a\_ve
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_3a\_ve~d = demo\_join2~d
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

The executable example shown above demonstrates how [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") are accessed that are exposed in the SELECT list of a CDS view entity. For each view, the data source in the SELECT statement is specified not directly, but as path expression, making use of an exposed association. For comparison, the explicit join expression that produces the same result is shown.

-   The following CDS view entity exposes its CDS association \_demo\_join2, which associates its data source demo\_join1 with the DDIC database table demo\_join1. The field d used in the ON condition of the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") must also be an element of the SELECT list.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPOSE\_ASSOC\_1\_VE
  as select from
    demo\_join1  
    association to demo\_join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2,
      demo\_join1.d
    }

When the CDS association demo\_cds\_expose\_assoc\_1\_ve\\\_demo\_join2 is accessed, the same inner join is created that is explicitly used in the subsequent access. Both produce the same result.

-   The following CDS view entity matches the preceding view, but has an additional WHERE condition.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPOSE\_ASSOC\_1A\_VE
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

When the CDS association demo\_cds\_expose\_assoc\_1a\_ve\\\_demo\_join2 is accessed, the result set of the left side of the join is restricted by the WHERE condition in the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") of the path expression.

-   The following CDS view entity accesses the view demo\_cds\_expose\_assoc\_1\_ve above. It does not have its own CDS association, but it exposes the CDS association of its data source demo\_cds\_expose\_assoc\_1\_ve.\_demo\_join2. Here, the field demo\_cds\_expose\_assoc\_1\_ve.d of the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") used in the ON condition must again be part of the SELECT list.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPOSE\_ASSOC\_2\_VE
  as select from
    DEMO\_CDS\_EXPOSE\_ASSOC\_1\_VE
    {
      demo\_cds\_expose\_assoc\_1\_ve.\_demo\_join2,
      DEMO\_CDS\_EXPOSE\_ASSOC\_1\_VE.d  
    }

When the CDS association demo\_cds\_expose\_assoc\_2\_ve\\\_demo\_join2 is accessed, the same inner join is created as the subsequent explicit inner join and produces the same result. The CDS view entity demo\_cds\_expose\_assoc\_2\_ve is not subject to any further restrictions, which means the result is the same as when demo\_cds\_expose\_assoc\_1\_ve\\\_demo\_join2 is accessed.

-   The following CDS view entity matches the preceding view, but has an additional WHERE condition.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPOSE\_ASSOC\_2A\_VE
  as select from
    DEMO\_CDS\_EXPOSE\_ASSOC\_1\_VE
    {
      demo\_cds\_expose\_assoc\_1\_ve.\_demo\_join2,
      DEMO\_CDS\_EXPOSE\_ASSOC\_1\_VE.d
    }
    where  
      d = 'xx'

When the CDS association demo\_cds\_expose\_assoc\_2a\_ve\\\_demo\_join2 is accessed, the result set of the left side of the join is restricted by the WHERE condition in the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") of the path expression. This is different from accessing demo\_cds\_expose\_assoc\_1a\_ve\\\_demo\_join2. The CDS association defined in demo\_cds\_expose\_assoc\_1a\_ve is exposed, but the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") is demo\_cds\_expose\_assoc\_2a\_ve with a different WHERE condition.

-   The following CDS view entity accesses the view demo\_cds\_expose\_assoc\_1a\_ve above. It does not have its own CDS association, but it exposes the CDS association of its data source demo\_cds\_expose\_assoc\_1a\_ve.\_demo\_join2.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPOSE\_ASSOC\_3\_VE
  as select from
    DEMO\_CDS\_EXPOSE\_ASSOC\_1A\_VE
    {
      demo\_cds\_expose\_assoc\_1a\_ve.\_demo\_join2,
      DEMO\_CDS\_EXPOSE\_ASSOC\_1A\_VE.d  
    }

When the CDS association demo\_cds\_expose\_assoc\_3\_ve\\\_demo\_join2 is accessed, the subsequent access creates an instance of the explicitly used inner join and produces its result. The view demo\_cds\_expose\_assoc\_3\_ve is not subject to any further restrictions, which means the result is the same as when demo\_cds\_expose\_assoc\_1a\_ve\\\_demo\_join2 is accessed.

-   The following CDS view entity matches the preceding view, but has an additional WHERE condition.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPOSE\_ASSOC\_3A\_VE
  as select from DEMO\_CDS\_EXPOSE\_ASSOC\_1A\_VE
{
  demo\_cds\_expose\_assoc\_1a\_ve.\_demo\_join2,
  DEMO\_CDS\_EXPOSE\_ASSOC\_1A\_VE.d
}
where
  d = 'xx'

When the CDS association demo\_cds\_expose\_assoc\_3a\_ve\\\_demo\_join2 is accessed, the result set of the left side of the join is restricted by the WHERE condition in the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") of the path expression. The disjoint WHERE condition in demo\_cds\_expose\_assoc\_1a\_ve means that no matching rows are found, however, and the result set of the left side of the join is empty.
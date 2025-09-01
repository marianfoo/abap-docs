---
title: "CDS DDL - DDIC-Based View, Exposing CDS Associations"
description: |
  This example demonstrates how CDS associations are exposed(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_association_v1.htm) in the SELECT list of a CDS view. Source Code  Public class definition CLASS cl_demo_cds_expose_assctns DEFINITION INHERITING FRO
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expose_assoc_v1_abexa.htm"
abapFile: "abencds_expose_assoc_v1_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "abencds", "expose", "assoc", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, select\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, expose\_assoc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_association_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20Exposing%20CDS%20Associations%2C%20ABENCDS_EXPOSE_ASSOC_V1_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion%20for%20improvement:)

CDS DDL - DDIC-Based View, Exposing CDS Associations

This example demonstrates how CDS associations are [exposed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_association_v1.htm) in the SELECT list of a CDS view.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_expose\_assctns DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_expose\_assctns IMPLEMENTATION.
  METHOD main.
    "Using exposed association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_1\\\_demo\_join2 AS path1
           INTO TABLE @DATA(result1).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_1
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_1~d = demo\_join2~d
           INTO TABLE @FINAL(result1e).
    ASSERT result1 = result1e.
    out->write( result1 ).
    "Using exposed association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_1a\\\_demo\_join2 AS path1a
           INTO TABLE @DATA(result1a).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_1a
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_1a~d = demo\_join2~d
           INTO TABLE @FINAL(result1ae).
    ASSERT result1a = result1ae.
    out->write( result1a ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_2\\\_demo\_join2 AS path2
           INTO TABLE @DATA(result2).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_2
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_2~d = demo\_join2~d
           INTO TABLE @FINAL(result2e).
    ASSERT result2 = result2e.
    out->write( result2 ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_2a\\\_demo\_join2 AS path2a
           INTO TABLE @DATA(result2a).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_2a
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_2a~d = demo\_join2~d
           INTO TABLE @FINAL(result2ae).
    ASSERT result2a = result2ae.
    out->write( result2a ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_3\\\_demo\_join2 AS path3
           INTO TABLE @DATA(result3).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_3
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_3~d = demo\_join2~d
           INTO TABLE @FINAL(result3e).
    ASSERT result3 = result3e.
    out->write( result3 ).
    "Using propagated association in FROM clause
    SELECT \*
           FROM demo\_cds\_expose\_assoc\_3a\\\_demo\_join2 AS path3a
           INTO TABLE @DATA(result3a).
    "Explicit join
    SELECT demo\_join2~\*
           FROM demo\_cds\_expose\_assoc\_3a
             INNER JOIN demo\_join2
               ON demo\_cds\_expose\_assoc\_3a~d = demo\_join2~d
           INTO TABLE @FINAL(result3ae).
    ASSERT result3a = result3ae.
    out->write( result3a ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
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

Description   

The example demonstrates how [CDS associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") are accessed that are exposed in the SELECT list of CDS views. For each view, the data source is specified not directly, but as path expression, making use of an exposed association. As a comparison, the explicit join expression that produces the same result is shown.

-   The following CDS view exposes its CDS association \_demo\_join2, which associates its data source demo\_join1 with the DDIC database table demo\_join1. The field d used in the ON condition of the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") must also be an element of the SELECT list.
    
    define view entity DEMO\_CDS\_EXPOSE\_ASSOC\_1
      as select from
        demo\_join1  
        association to demo\_join2 as \_demo\_join2 on
          \_demo\_join2.d = demo\_join1.d
        {
          \_demo\_join2,
          demo\_join1.d
        }
    
    When the CDS association demo\_cds\_expose\_assoc\_1\\\_demo\_join2 is accessed, the same inner join is created, that is explicitly used in the subsequent access. Both produce the same result.
    
-   The following CDS view matches the preceding view, but has an additional WHERE condition.
    
    @AbapCatalog.sqlViewName: 'DEMOCDSEXPASSO1A'
    define view DEMO\_CDS\_EXPOSE\_ASSOC\_1A
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
    
    When the CDS association demo\_cds\_expose\_assoc\_1a\\\_demo\_join2 is accessed, the result set of the left side of the join is restricted by the WHERE condition in the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the path expression.
    
-   The following CDS view accesses the view demo\_cds\_expose\_assoc\_1 above. It does not have its own CDS association, but it does expose the CDS association of its data source demo\_cds\_expose\_assoc\_1.\_demo\_join2. Here, the field demo\_cds\_expose\_assoc\_1.d of the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") used in the ON condition must again be part of the SELECT list.
    
    @AbapCatalog.sqlViewName: 'DEMOCDSEXPASSO2'
    define view DEMO\_CDS\_EXPOSE\_ASSOC\_2
      as select from
        DEMO\_CDS\_EXPOSE\_ASSOC\_1
        {
          DEMO\_CDS\_EXPOSE\_ASSOC\_1.\_demo\_join2,
          DEMO\_CDS\_EXPOSE\_ASSOC\_1.d  
        }
    
    When the CDS association demo\_cds\_expose\_assoc\_2\\\_demo\_join2 is accessed, the same inner join is created as the subsequent explicit inner join and produces the same result. The view demo\_cds\_expose\_assoc\_2 is not subject to any further restrictions, which means the result is the same as when demo\_cds\_expose\_assoc\_1\\\_demo\_join2 is accessed.
    
-   The following CDS view matches the preceding view, but has an additional WHERE condition.
    
    @AbapCatalog.sqlViewName: 'DEMOCDSEXPASSO2A'
    define view DEMO\_CDS\_EXPOSE\_ASSOC\_2A
      as select from
        DEMO\_CDS\_EXPOSE\_ASSOC\_1
        {
          DEMO\_CDS\_EXPOSE\_ASSOC\_1.\_demo\_join2,
          DEMO\_CDS\_EXPOSE\_ASSOC\_1.d
        }
        where  
          d = 'xx'
    
    When the CDS association demo\_cds\_expose\_assoc\_2a\\\_demo\_join2 is accessed, the result set of the left side of the join is restricted by the WHERE condition in the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the path expression. This is different from accessing demo\_cds\_expose\_assoc\_1a\\\_demo\_join2. The CDS association defined in demo\_cds\_expose\_assoc\_1a is exposed, but the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") is demo\_cds\_expose\_assoc\_2a with a different WHERE condition.
    
-   The following CDS view accesses the view demo\_cds\_expose\_assoc\_1a above. It does not have its own CDS association, but it does expose the CDS association of its data source demo\_cds\_expose\_assoc\_1a.\_demo\_join2.
    
    @AbapCatalog.sqlViewName: 'DEMOCDSEXPASSO3'
    define view DEMO\_CDS\_EXPOSE\_ASSOC\_3
      as select from
        DEMO\_CDS\_EXPOSE\_ASSOC\_1A
        {
          DEMO\_CDS\_EXPOSE\_ASSOC\_1A.\_demo\_join2,
          DEMO\_CDS\_EXPOSE\_ASSOC\_1A.d  
        }
    
    When the CDS association demo\_cds\_expose\_assoc\_3\\\_demo\_join2 is accessed, the subsequent access creates an instance of the explicitly used inner join and produces its result. The view demo\_cds\_expose\_assoc\_3 is not subject to any further restrictions, which means the result is the same as when demo\_cds\_expose\_assoc\_1a\\\_demo\_join2 is accessed.
    
-   The following CDS view matches the preceding view, but has an additional WHERE condition.
    
    @AbapCatalog.sqlViewName: 'DEMOCDSEXPASSO3A'
    define view DEMO\_CDS\_EXPOSE\_ASSOC\_3A
      as select from DEMO\_CDS\_EXPOSE\_ASSOC\_1A
    {
      DEMO\_CDS\_EXPOSE\_ASSOC\_1A.\_demo\_join2,
      DEMO\_CDS\_EXPOSE\_ASSOC\_1A.d
    }
    where
      d = 'xx'
    
    When the CDS association demo\_cds\_expose\_assoc\_3a\\\_demo\_join2 is accessed, the result set of the left side of the join is restricted by the WHERE condition in the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the path expression. The disjoint WHERE condition in demo\_cds\_expose\_assoc\_1a means that no matching rows are found, however, and the result set of the left side of the join is empty.
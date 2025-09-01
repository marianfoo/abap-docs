---
title: "WITH, Exposing Associations"
description: |
  This example demonstrates how CDS associations are exposed using WITH ASSOCIATIONS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations.htm) after a common table expression(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.h
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwith_associations_abexa.htm"
abapFile: "abenwith_associations_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "method", "class", "data", "abenwith", "associations", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) →  [WITH, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwith_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20Exposing%20Associations%2C%20ABENWITH_ASSOCIATIONS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, Exposing Associations

This example demonstrates how CDS associations are exposed using [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations.htm) after a common [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_with\_associations DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_with\_associations IMPLEMENTATION.
  METHOD main.
    WITH
      +cte\_2 AS ( SELECT demo\_cds\_expose\_assoc\_1~d
                         FROM  demo\_cds\_expose\_assoc\_1 )
             WITH ASSOCIATIONS
               ( demo\_cds\_expose\_assoc\_1~\\\_demo\_join2 )
      SELECT \*
             FROM +cte\_2\\\_demo\_join2 AS demo\_join2
             INTO TABLE @FINAL(result2).
    out->write( result2 ).
    WITH
      +cte\_2a AS ( SELECT demo\_cds\_expose\_assoc\_1~d
                          FROM  demo\_cds\_expose\_assoc\_1
                          WHERE d = 'xx' )
              WITH ASSOCIATIONS
                ( demo\_cds\_expose\_assoc\_1~\\\_demo\_join2 )
      SELECT \*
             FROM +cte\_2a\\\_demo\_join2 AS demo\_join2
             INTO TABLE @FINAL(result2a).
    out->write( result2a ).
    WITH
      +cte\_3 AS ( SELECT demo\_cds\_expose\_assoc\_1a~d
                         FROM  demo\_cds\_expose\_assoc\_1a )
             WITH ASSOCIATIONS
               ( demo\_cds\_expose\_assoc\_1a~\\\_demo\_join2 )
      SELECT \*
             FROM +cte\_3\\\_demo\_join2 AS demo\_join2
             INTO TABLE @FINAL(result3).
    out->write( result3 ).
    WITH
      +cte\_3a AS ( SELECT demo\_cds\_expose\_assoc\_1a~d
                          FROM  demo\_cds\_expose\_assoc\_1a
                          WHERE d = 'xx' )
              WITH ASSOCIATIONS
                ( demo\_cds\_expose\_assoc\_1a~\\\_demo\_join2 )
      SELECT \*
             FROM +cte\_3a\\\_demo\_join2 AS demo\_join2
             INTO TABLE @FINAL(result3a).
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

The common table expressions in this example access the CDS views demo\_cds\_expose\_assoc\_1 and demo\_cds\_expose\_assoc\_1a of the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expose_assoc_v1_abexa.htm) for [exposing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_association_v1.htm) CDS associations in the SELECT list of CDS views. The subqueries of the common table expressions +cte\_2, +cte\_2a, +cte\_3, and +cte\_3a match the queries of the CDS views demo\_cds\_expose\_assoc\_2, demo\_cds\_expose\_assoc\_2a, demo\_cds\_expose\_assoc\_3, and demo\_cds\_expose\_assoc\_3a used in the executable example. The additions [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations.htm) expose the CDS association \_demo\_join2 of the data sources of the subqueries. In the case of the CDS views, this is done in their SELECT list. When accessed using the path expression in the main queries of the WITH statements, the exposed CDS associations produce the exact same results as the corresponding accesses in the [example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expose_assoc_v1_abexa.htm) for the CDS views. This demonstrates that the result sets of the subqueries are used as the left side of the join instances.
  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) →  [WITH Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_abexas.htm) → 

WITH, Publishing Associations

This example demonstrates how associations are published using [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_associations.htm) after a common [table expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommon_table_expression_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_cds\_with\_associations.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    WITH
      +cte\_2 AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                         FROM  demo\_cds\_publish\_assoc\_1 )
             WITH ASSOCIATIONS
               ( demo\_cds\_publish\_assoc\_1~\\\_demo\_join2 )
      SELECT \*
             FROM +cte\_2\\\_demo\_join2 AS demo\_join2
             INTO TABLE @DATA(result2).
    out->write( result2 ).
    WITH
      +cte\_2a AS ( SELECT demo\_cds\_publish\_assoc\_1~d
                          FROM  demo\_cds\_publish\_assoc\_1
                          WHERE d = 'xx' )
              WITH ASSOCIATIONS
                ( demo\_cds\_publish\_assoc\_1~\\\_demo\_join2 )
      SELECT \*
             FROM +cte\_2a\\\_demo\_join2 AS demo\_join2
             INTO TABLE @DATA(result2a).
    out->write( result2a ).
    WITH
      +cte\_3 AS ( SELECT demo\_cds\_publish\_assoc\_1a~d
                         FROM  demo\_cds\_publish\_assoc\_1a )
             WITH ASSOCIATIONS
               ( demo\_cds\_publish\_assoc\_1a~\\\_demo\_join2 )
      SELECT \*
             FROM +cte\_3\\\_demo\_join2 AS demo\_join2
             INTO TABLE @DATA(result3).
    out->write( result3 ).
    WITH
      +cte\_3a AS ( SELECT demo\_cds\_publish\_assoc\_1a~d
                          FROM  demo\_cds\_publish\_assoc\_1a
                          WHERE d = 'xx' )
              WITH ASSOCIATIONS
                ( demo\_cds\_publish\_assoc\_1a~\\\_demo\_join2 )
      SELECT \*
             FROM +cte\_3a\\\_demo\_join2 AS demo\_join2
             INTO TABLE @DATA(result3a).
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

The common table expressions in this example access the CDS views demo\_cds\_publish\_assoc\_1 and demo\_cds\_publish\_assoc\_1a of the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_publish_assocs_abexa.htm) for [publishing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_association.htm) associations in the SELECT list of CDS views. The subqueries of the common table expressions +cte\_2, +cte\_2a, +cte\_3, and +cte\_3a match the queries of the CDS views demo\_cds\_publish\_assoc\_2, demo\_cds\_publish\_assoc\_2a, demo\_cds\_publish\_assoc\_3, and demo\_cds\_publish\_assoc\_3a used in the executable example. The additions [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_associations.htm) publish the association \_demo\_join2 of the data sources of the subqueries. In the case of the CDS views, this is done in their SELECT list. When accessed using the path expression in the main queries of the WITH statements, the published associations produce the exact same results as the same action in the [example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_publish_assocs_abexa.htm) for the CDS views. This demonstrates that the results sets of the subqueries are used as the left side of the join instances.
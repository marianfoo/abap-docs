  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, INTO, APPENDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) →  [SELECT, indicators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_indicators.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Byte Field Indicators, ABENSELECT_IND_BITFIELD_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Byte Field Indicators

This example demonstrates a [condensed indicator structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencondensed_ind_structure_glosry.htm "Glossary Entry") as a [null indicator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_indicator_glosry.htm "Glossary Entry") in a SELECT statement. The difference between position based and name based assignments of indicator bits without and with CORRESPONDING FIELDS.

Source Code   

REPORT demo\_indicators\_bitfield.
TYPES:
  BEGIN OF data\_line,
    col1 TYPE i,
    col2 TYPE i,
    col3 TYPE i,
    col4 TYPE i,
    col5 TYPE i,
  END OF data\_line.
DATA data\_tab TYPE STANDARD TABLE OF data\_line WITH EMPTY KEY.
data\_tab = VALUE #( ( col2 = 10 col3 = 10 col4 = 10 ) ).
TYPES:
  BEGIN OF wa\_ind,
    col5     TYPE i,
    colx     TYPE i,
    col3     TYPE i,
    coly     TYPE i,
    col1     TYPE i,
    col2     TYPE i,
    col4     TYPE i,
    null\_ind TYPE x LENGTH 1,
  END OF wa\_ind.
DATA:
  wa\_ind1 TYPE wa\_ind,
  wa\_ind2 TYPE wa\_ind.
SELECT SINGLE
       FROM @data\_tab AS data\_tab
       FIELDS CASE WHEN 1 = 0 THEN 0 END AS col1 ,
              col2,
              CASE WHEN 1 = 0 THEN 0 END AS col3,
              CASE WHEN 1 = 0 THEN 0 END AS col4,
              col5
       INTO @wa\_ind1 INDICATORS NULL BITFIELD null\_ind.
DATA binary\_ind1 TYPE string.
WHILE sy-index <= xstrlen( wa\_ind1-null\_ind ) \* 8.
  GET BIT sy-index OF wa\_ind1-null\_ind INTO FINAL(bit1).
  binary\_ind1 &&= bit1.
ENDWHILE.
SELECT SINGLE
       FROM @data\_tab AS data\_tab
       FIELDS CASE WHEN 1 = 0 THEN 0 END AS col1,
              col2,
              CASE WHEN 1 = 0 THEN 0 END AS col3,
              CASE WHEN 1 = 0 THEN 0 END AS col4,
              col5
       INTO CORRESPONDING FIELDS OF @wa\_ind2
            INDICATORS NULL BITFIELD null\_ind.
DATA binary\_ind2 TYPE string.
WHILE sy-index <= xstrlen( wa\_ind2-null\_ind ) \* 8.
  GET BIT sy-index OF wa\_ind2-null\_ind INTO FINAL(bit2).
  binary\_ind2 &&= bit2.
ENDWHILE.
cl\_demo\_output=>new(
)->write( wa\_ind1
)->write\_data( binary\_ind1
)->write( wa\_ind2
)->write\_data( binary\_ind2
)->display( ).

Description   

Data are selected with and without CORRESPONDING FIELDS from an internal table @data\_tab with five columns col1 to col5. In the result set, columns col1 col3 and col4 contain the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry"). The target areas contains a byte field null\_ind as the last component but are differently structured than the result set in front of null\_ind.

The assignments take place as follows:

-   Without CORRESPONDING FIELDS, the values from the columns of the result set are assigned from left to right to the components of the target area. Accordingly. the first five bits of the null indicator are set from left to right. The bits at positions 1, 3, and 4 are set to 1. The bit at positions 2 and 5 as well as the excess bits at positions 6 to 8 are set to 0.
-   With CORRESPONDING FIELDS, the columns of the result set are assigned to the components of the target area that have the same name. Since the positions of the columns named col1 to col5 in the target are 5, 6, 3, 7, and 1, the respective bits are set in the null indicator: The bits at positions 3, 5 and 7 are set to 1 and the bits at positions 1 and 6 are set to 0.colx and coly at positions 2 and 4 of the target area do not correspond to columns of the result set and the bits at these positions as well as the excess bit at position 8 are set to 0.
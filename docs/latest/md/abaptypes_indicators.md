  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20INDICATORS%2C%20ABAPTYPES_INDICATORS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, INDICATORS

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype TYPE struct WITH INDICATORS ind *\[**{*TYPE type*}*
                                          *|* *{*AS BITFIELD*}**\]*.

Additions:

[1\. ... TYPE type](#!ABAP_ADDITION_1@1@)
[2\. ... AS BITFIELD](#!ABAP_ADDITION_2@2@)

Effect

Derivation of a structured data type with an [indicator structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindicator_structure_glosry.htm "Glossary Entry") with the name ind. For struct, an existing local or global [structured type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructured_type_glosry.htm "Glossary Entry") must be specified. For ind, a name must be specified that follows the [naming conventions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_conventions.htm).

This variant of the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) defines a structured data type that has the same components as the structured type struct specified behind TYPE, as well as an additional last component named ind as an indicator structure. The last component ind is one of the following:

-   An actual [indicator structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindicator_structure_glosry.htm "Glossary Entry") realized by a [substructure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubstructure_glosry.htm "Glossary Entry") that contains the same number of first-level components as struct, in the same order as in struct and with the same names as in struct. The data type of each component is x of length 1 by default and can be defined explicitly with the optional addition TYPE.
-   A [condensed indicator structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencondensed_ind_structure_glosry.htm "Glossary Entry") realized by a [byte field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_field_glosry.htm "Glossary Entry") of type x with enough bits for each component of struct. A condensed indicator structure is defined with the addition AS BITFIELD.

Hints

-   The main purpose of an indicator structure is to serve as an [ABAP SQL indicator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_indicator_glosry.htm "Glossary Entry"). The addition WITH INDICATORS facilitates the definition of [null indicators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_indicator_glosry.htm "Glossary Entry") or [set indicators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_indicator_glosry.htm "Glossary Entry") for ABAP SQL statements. This is especially important for the [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm) statement with the addition [INDICATORS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_indicator.htm), since no inline declarations can be used there. Only actual indicator structures can be used with UPDATE and no condensed indicator structures.
-   The components of an actual indicator structure are created for each first-level component of struct independent of its type. This means that substructures, reference variables or tabular components of struct are handled in the same way as elementary components and are mirrored by one indicator of type x or the type defined with addition TYPE. Likewise, each component of struct is represented by a single bit of a condensed indicator structure independent from its type.

Example

The structured type ind\_struct has the same components with the same types as struct plus an additional substructure named ind. The substructure ind has the same components col1 to col11 as struct but all of them have type x of length 1.

TYPES:
  BEGIN OF struct,
    col1  TYPE i,
    col2  TYPE i,
    col3  TYPE i,
    col4  TYPE i,
    col5  TYPE i,
    col6  TYPE i,
    col7  TYPE i,
    col8  TYPE i,
    col9  TYPE REF TO i,
    BEGIN OF col10,
      col1 TYPE i,
      col2 TYPE i,
    END OF col10,
    col11 TYPE TABLE OF demo\_struc WITH EMPTY KEY,
  END OF struct.
TYPES ind\_struct TYPE struct WITH INDICATORS ind.
DATA ind\_struct TYPE ind\_struct.
cl\_demo\_output=>display( ind\_struct ).

Example

An internal table that has a line structure with an indicator structure is partly filled with today's flight data for a given flight connection from the DDIC database table SFLIGHT. In the internal table, the price is reduced by 80 %. The modified table is used to update the respective date in the database table. While the lines that are to be updated are selected by the content of key fields in the internal table, the column to be updated is indicated by marking the column PRICE of the indicator structure. Without using the [INDICATORS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_indicator.htm) addition of the [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm) statement, all other non-key columns of the database table would be initialized since their values are initial in the internal table.

TYPES wa TYPE sflight WITH INDICATORS ind.
DATA itab TYPE TABLE OF wa WITH EMPTY KEY.
SELECT carrid, connid, fldate, price
       FROM sflight
       WHERE carrid = char\`LH\` AND
             connid = numc\`0400\` AND
             fldate = @( cl\_demo\_date\_time=>get\_user\_date( ) )
       INTO CORRESPONDING FIELDS OF TABLE @itab.
IF sy-subrc  = 0.
  LOOP AT itab ASSIGNING FIELD-SYMBOL(<wa>).
    <wa>-price \*= '0.8'.
    <wa>-ind-price = '01'.
  ENDLOOP.
  UPDATE sflight FROM TABLE @itab INDICATORS SET STRUCTURE ind.
ENDIF.

Addition 1   

... TYPE type

Effect

Definition of the data type of each component of an actual [indicator structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindicator_structure_glosry.htm "Glossary Entry") ind. The same applies to type as to [TYPES ... TYPE abap\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_simple.htm) and [TYPES ... TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_referring.htm). Each non-generic local or global data type that is visible at the current position can be specified. The generic built-in ABAP types c, n, p, and x can also be specified and their [standard length](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm) is used implicitly then,.

Hint

For [ABAP SQL indicators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_indicator_glosry.htm "Glossary Entry"), only the types c and x of length 1 are relevant.

Example

The structured type ind\_struct has the same components with the same types as struct plus an additional substructure named ind. The substructure ind has the same components col1 to col11 as struct but all of them have type itab that is a table type with line type i.

TYPES:
  BEGIN OF struct,
    col1 TYPE i,
    col2 TYPE i,
    col3 TYPE i,
    col4 TYPE i,
    col5 TYPE i,
    col6 TYPE i,
    col7 TYPE i,
    col8 TYPE i,
    col9 TYPE REF TO i,
    BEGIN OF col10,
      col1 TYPE i,
      col2 TYPE i,
    END OF col10,
    col11 TYPE TABLE OF demo\_struc WITH EMPTY KEY,
  END OF struct.
TYPES itab type TABLE OF i WITH EMPTY KEY.
TYPES ind\_struct TYPE struct WITH INDICATORS ind TYPE itab.
DATA ind\_struct TYPE ind\_struct.
cl\_demo\_output=>display( ind\_struct ).

Example

See examples for [UPDATE ... FROM ... INDICATORS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_indicator.htm).

Addition 2   

... AS BITFIELD

Effect

Defines ind as a [condensed indicator structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencondensed_ind_structure_glosry.htm "Glossary Entry") that is a [byte field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_field_glosry.htm "Glossary Entry") of type x. The length of the byte field is calculated from the number of components n in struct as with ( n + 7 ) [DIV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarith_operators.htm) 8.

Hints

-   The length of ind is derived in such a way that it contains enough bits to serve as indicators for the components of struct. The first bit should serve as indicator for the first component, the second bit should serve as indicator for the second component and so on.
-   The bits can be set by function [bit-set](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm), statement [SET BIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_bit.htm) or more commonly by ABAP SQL statements using [INDICATORS BITFIELD](abapselect_indicators.htm#!ABAP_ALTERNATIVE_2@2@). For evaluating indicators represented by bits, the statement [GET BIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_bit.htm) or [bit operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_operators.htm) can be used.
-   A [condensed indicator structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencondensed_ind_structure_glosry.htm "Glossary Entry") needs less space than an actual [indicator structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindicator_structure_glosry.htm "Glossary Entry"), while the latter can be handled more comfortably.

Example

The structured type ind\_struct has the same components with the same types as struct plus an additional component ind of type x with length 2. The first 11 bits of that byte field can serve as indicators for the components col1 to col11 of struct.

TYPES:
  BEGIN OF struct,
    col1  TYPE i,
    col2  TYPE i,
    col3  TYPE i,
    col4  TYPE i,
    col5  TYPE i,
    col6  TYPE i,
    col7  TYPE i,
    col8  TYPE i,
    col9  TYPE REF TO i,
    BEGIN OF col10,
      col1 TYPE i,
      col2 TYPE i,
    END OF col10,
    col11 TYPE TABLE OF demo\_struc WITH EMPTY KEY,
  END OF struct.
TYPES ind\_struct TYPE struct WITH INDICATORS ind AS BITFIELD.
DATA ind\_struct TYPE ind\_struct.
cl\_demo\_output=>display( ind\_struct ).

Example

The structure wa\_ind has a condensed indicator structure null\_ind that is used as a [null indicator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_indicator_glosry.htm "Glossary Entry") in a SELECT statement. It has length of 6 and thus consists of 48 bits that cover the 44 fields of database table DEMO\_EXPRESSIONS used for declaring wa\_ind. The three columns num1, fltp1, and char1 of the result set of the SELECT statement contain the null value because the WHEN conditions of the CASE expressions are false and no ELSE is specified. Since the addition INTO CORRESPONDING is used, the positions of the bits of the null indicator correspond to the positions of the components of the target area that correspond to the columns of the result set. Accordingly, the third, the tenth and the sixteenth bit of the byte field wa\_ind-null\_ind have the value 1. While its hexadecimal value 204100000000 is not too informative, the GET BIT statement can be used to extract the positions of the columns that contain the null value.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ).
TYPES demo\_ind TYPE demo\_expressions
  WITH INDICATORS null\_ind AS BITFIELD.
DATA wa\_ind TYPE demo\_ind.
SELECT SINGLE
  FROM demo\_expressions
  FIELDS
    CAST( CASE WHEN num1 = 0 THEN 0 END AS INT4 ) AS num1,
    CAST( CASE WHEN num1 = 0 THEN 0 END AS FLTP ) AS fltp1,
    CAST( CASE WHEN num1 = 0 THEN 0 END AS CHAR ) AS char1
  INTO CORRESPONDING FIELDS OF @wa\_ind
       INDICATORS NULL BITFIELD null\_ind.
DATA binary\_ind TYPE string.
DATA null\_columns TYPE TABLE OF i WITH EMPTY KEY.
WHILE sy-index <= xstrlen( wa\_ind-null\_ind ) \* 8.
  GET BIT sy-index OF wa\_ind-null\_ind INTO FINAL(bit).
  binary\_ind &&= bit.
  IF bit = 1.
    APPEND sy-index TO null\_columns.
  ENDIF.
ENDWHILE.
cl\_demo\_output=>new(
)->write( wa\_ind
)->write( wa\_ind-null\_ind
)->write( binary\_ind
)->write( null\_columns
)->display( ).
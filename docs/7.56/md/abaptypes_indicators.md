  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

TYPES, INDICATORS

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES dtype TYPE struct WITH INDICATORS ind
                       *\[*TYPE type*\]*.

Addition:

[... TYPE type](#!ABAP_ONE_ADD@1@)

Effect

Derivation of a structured data type with an [indicator structure](javascript:call_link\('abenindicator_structure_glosry.htm'\) "Glossary Entry") with the name ind. For struct, an existing local or global [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") must be specified. For ind, a name must be specified that follows the [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)).

This variant of the statement [TYPES](javascript:call_link\('abaptypes.htm'\)) defines a structured data type that has the same components as the structured type struct specified behind TYPE, as well as an additional last component named ind as an indicator structure. The last component ind is a [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry") that contains the same number of first-level components as struct, in the same order as in struct and with the same names as in struct. The standard data type of each component is x of length 1 and can be defined explicitly with the optional addition TYPE.

Hints

-   The main purpose of an indicator structure is to serve as an [ABAP SQL indicator](javascript:call_link\('abenabap_sql_indicator_glosry.htm'\) "Glossary Entry"). The addition WITH INDICATORS facilitates the definition of [null indicators](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry") or [set indicators](javascript:call_link\('abenset_indicator_glosry.htm'\) "Glossary Entry") for ABAP SQL statements. This is especially important for the [UPDATE](javascript:call_link\('abapupdate.htm'\)) statement with the addition [INDICATORS](javascript:call_link\('abapupdate_set_indicator.htm'\)), since no inline declarations can be used there.
-   The indicator structure is created equally for each data type of a first-level component of struct. This means that, for example, each substructure or each reference variable is mirrored in the same way as an indicator component is mirrored as an elementary component of struct.

Example

An internal table that has a line structure with an indicator structure is partly filled with today's flight data for a given flight connection from the DDIC database table SFLIGHT. In the internal table, the price is reduced by 80 %. The modified table is used to update the respective date in the database table. While the lines that are to be updated are selected by the content of key fields in the internal table, the column to be updated is indicated by marking the column PRICE of the indicator structure. Without using the [INDICATORS](javascript:call_link\('abapupdate_set_indicator.htm'\)) addition of the [UPDATE](javascript:call_link\('abapupdate.htm'\)) statement, all other non-key columns of the database table would be initialized since their values are initial in the internal table.

TYPES wa TYPE sflight WITH INDICATORS ind.
DATA itab TYPE TABLE OF wa WITH EMPTY KEY.
SELECT carrid, connid, fldate, price
       FROM sflight
       WHERE carrid = char\`LH\` AND
             connid = numc\`0400\` AND
             fldate = @sy-datum
       INTO CORRESPONDING FIELDS OF TABLE @itab.
IF sy-subrc  = 0.
  LOOP AT itab ASSIGNING FIELD-SYMBOL(<wa>).
    <wa>-price \*= '0.8'.
    <wa>-ind-price = '01'.
  ENDLOOP.
  UPDATE sflight FROM TABLE @itab INDICATORS SET STRUCTURE ind.
ENDIF.

Addition   

... TYPE type

Effect

Definition of the data type of each component of the [indicator structure](javascript:call_link\('abenindicator_structure_glosry.htm'\) "Glossary Entry") ind. The same applies to type as to [TYPES ... TYPE abap\_type](javascript:call_link\('abaptypes_simple.htm'\)) and [TYPES ... TYPE](javascript:call_link\('abaptypes_referring.htm'\)). Each non-generic local or global data type that is visible at the current position can be specified. The generic built-in ABAP types c, n, p, and x can also be specified and their [standard length](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) is defined implicitly.

Hint

For [ABAP SQL indicators](javascript:call_link\('abenabap_sql_indicator_glosry.htm'\) "Glossary Entry"), only the types c and x of length 1 are relevant.

Example

See examples for [UPDATE ... FROM ... INDICATORS](javascript:call_link\('abapupdate_set_indicator.htm'\)).
  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, INTO, APPENDING](javascript:call_link\('abapinto_clause.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20indicators%2C%20ABAPSELECT_INDICATORS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, indicators

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... INDICATORS *{**\[*NOT*\]* NULL STRUCTURE null\_ind*}*
             *|* *{**\[*NOT*\]* NULL BITFIELD null\_ind*}*
             *|* (indicator\_syntax) ...

Alternatives:

[1\. ... INDICATORS *\[*NOT*\]* NULL STRUCTURE null\_ind](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INDICATORS *\[*NOT*\]* NULL BITFIELD null\_ind](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... INDICATORS (indicator\_syntax)](#!ABAP_ALTERNATIVE_3@3@)

Effect

The addition INDICATORS of the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause can be used to specify indicators. It is currently possible to specify a [null indicator](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry") that stores information about which columns of the result set contain the null value and which do not. The addition can be specified only for importing to structured work areas wa or internal tables itab with a structured line type. It is possible to use it when existing target areas are specified, in combination with the additions [CORRESPONDING FIELDS](javascript:call_link\('abapinto_clause.htm'\)), [NEW](javascript:call_link\('abapselect_into_target.htm'\)), and with [inline declarations](javascript:call_link\('abapselect_into_target.htm'\)). There are two static variants that specify one of the following:

-   A structured indicator that is a substructure of the structured target area.
-   A [byte field](javascript:call_link\('abenbyte_field_glosry.htm'\) "Glossary Entry") indicator that is a [byte field type](javascript:call_link\('abenbyte_field_type_glosry.htm'\) "Glossary Entry") component of the structured target area.

A dynamic variant allows the syntax of the static variants to be specified as a dynamic token.

Hint

The addition INDICATORS is not supported by all databases. In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports the use of this addition. This requires the constant INDICATORS of this class to be passed to the method in an internal table.

Alternative 1   

... INDICATORS *\[*NOT*\]* NULL STRUCTURE null\_ind

Effect

Specifies the [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry") null\_ind of a structured target area specified in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause as a [null indicator](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry").

-   After a specified existing work area wa or existing internal table itab, this must contain a substructure with the name null\_ind as a component. The substructure must contain at least as many components as the number of columns in the result set defined using the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). These may also be components of other substructures. Each component must be of type x or c with length 1. The position and name of the substructure must be defined in such a way that it is not affected by the assignment of data from the result set of the query.
    -   If the addition CORRESPONDING FIELDS is not specified, the substructure must be the last component of wa or itab but can have the same name as a column of the result set.
    -   If the addition CORRESPONDING FIELDS is specified, the substructure can be any component of wa or itab but must not have the same name as a column of the result set.
-   The addition INDICATORS ... STRUCTURE after an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") with @DATA*|*@FINAL(wa) or @DATA*|*@FINAL(wa) adds a [indicator structure](javascript:call_link\('abenindicator_structure_glosry.htm'\) "Glossary Entry") with the name null\_ind to the end of the structure or line structure declared inline. For each column in the result set, this substructure contains an identically named component of type x and length 1 in the same order. If preceding components of the structure declared inline are substructures, the substructure null\_ind is also structured accordingly. The name null\_ind must not be used as the name of a column in the result set.

The substructure is filled as follows:

-   If the addition CORRESPONDING FIELDS is not specified, the names of the components of the null indicator are ignored. From left to right, they are set to a value that indicates whether or not the identically positioned column in the current row of the result set contains the null value. Nested structures are broken down into their elementary components.
-   If the addition CORRESPONDING FIELDS is specified, a component with the same name must exist in the null indicator for each component of wa or itab supplied with data and this is filled with the corresponding indicator value. For components of any substructures, the full name composed by the structure component selector is considered.

The indicator values are set as follows:

-   If the optional addition NOT is not specified, the component value hexadecimal 1 for type x and X for type c mean that the corresponding column contains the null value. For columns that do not contain the null value, the respective components are initialized.
-   If the optional addition NOT is specified, the component value hexadecimal 1 for type x and X for type c mean that the corresponding column does not contain the null value. For columns that contain the null value, the respective components are initialized.

Hints

-   It is recommended that the components of the null indicator have exactly the same name as the columns of the result set and that the null indicator is placed as an [indicator structure](javascript:call_link\('abenindicator_structure_glosry.htm'\) "Glossary Entry") behind all other components.
-   Work areas with [indicator structures](javascript:call_link\('abenindicator_structure_glosry.htm'\) "Glossary Entry") for the null indicators can be defined with the addition [INDICATORS](javascript:call_link\('abaptypes_indicators.htm'\)) of the [TYPES](javascript:call_link\('abaptypes.htm'\)) statement.
-   If wa or the row structure of itab contains further substructures besides the null indicator, it does not make sense to use CORRESPONDING FIELDS and the null indicator should also be constructed accordingly.
-   When the addition NOT is not used, the entire null indicator is initial if no column of the result set contains the null value and when the addition NOT is used, the entire null indicator is initial if all columns of the result set contain the null value. This can be checked in a single logical expression.

Example

The third column of the result set of the SELECT statement contains the null value because the WHEN condition of the CASE expression is false and no ELSE is specified. Accordingly, component z of substructure wa-null\_ind contains the value hexadecimal 1.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS
         num1 AS x,
         CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y,
         CASE WHEN num1 = 0 THEN 0 END AS z
       INTO @FINAL(wa) INDICATORS NULL STRUCTURE null\_ind.
cl\_demo\_output=>display( wa ).

Example

The internal table itab declared inline contains an elementary column carrname, a substructure spfli, which is structured like the DDIC database table SPFLI, and a substructure nulls. The substructure nulls also contains an elementary column carrname and a substructure spfli. However, the components are all of type x with length 1.

SELECT FROM scarr
         INNER JOIN spfli ON scarr~carrid = spfli~carrid
       FIELDS
         scarr~carrname,
         spfli~\*
       INTO TABLE @FINAL(itab) INDICATORS NULL STRUCTURE nulls.
cl\_abap\_browser=>show\_html( html\_string = cl\_demo\_output=>get( itab )
                            size        = cl\_abap\_browser=>vlarge ).

Alternative 2   

... INDICATORS *\[*NOT*\]* NULL BITFIELD null\_ind

Effect

Specifies the [byte field type](javascript:call_link\('abenbyte_field_type_glosry.htm'\) "Glossary Entry") component null\_ind of a structured target area specified in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause as a [null indicator](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry").

-   After a specified existing work area wa or existing internal table itab, this must contain a component null\_ind of type x. The length of null\_ind must be sufficient to comprise as much bits as the number n of columns in the result set defined using the using the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). The length must be at least as calculated with ( n + 7 ) [DIV](javascript:call_link\('abenarith_operators.htm'\)) 8. The position and name of the byte field must be defined in such a way that it is not affected by the assignment of data from the result set of the query.
    -   If the addition CORRESPONDING FIELDS is not specified, the byte field must be the last component of wa or itab but can have the same name as a column of the result set.
    -   If the addition CORRESPONDING FIELDS is specified, the byte field can be any component of wa or itab but must not have the same name as a column of the result set..
-   The addition INDICATORS ... BITFIELD after an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") with @DATA*|*@FINAL(wa) or @DATA*|*@FINAL(wa) adds a [condensed indicator structure](javascript:call_link\('abencondensed_ind_structure_glosry.htm'\) "Glossary Entry") with the name null\_ind to the end of the structure or line structure declared inline. null\_ind has type x and a length that can be calculated as with ( n + 7 ) [DIV](javascript:call_link\('abenarith_operators.htm'\)) 8, where n is the number of columns in the result set.

The byte field is filled as follows:

-   If the addition CORRESPONDING FIELDS is not specified, the bits of the null indicator are set from left to right to a value that indicates whether or not the identically positioned column in the current row of the result set contains the null value.
-   If the addition CORRESPONDING FIELDS is specified, the positions of the indicator bits are mapped from left to right to the structure of the target area instead of the result set: If a a column of the result set corresponds to a component at position n of the target area, the bit at position n of the byte field is set. Only bits for components of the target area that correspond to a column of the result set are set to a indicator value. Bits for components of the target area that do not correspond to a column of the result set are always set to 0.

The indicator values are set as follows:

-   If the optional addition NOT is not specified, a bit value 1 means that the corresponding column contains the null value. For columns that do not contain the null value, the corresponding bits are set to 0.
-   If the optional addition NOT is specified, a bit value 1 means that the corresponding column does not contain the null value. For columns that contain the null value, the corresponding bits are set to 0.

Trailing excess bits of the byte field that are not covered by the above rules are always set to 0.

Hints

-   It is recommended that the null indicator is placed as a [condensed indicator structure](javascript:call_link\('abencondensed_ind_structure_glosry.htm'\) "Glossary Entry") behind all other components.
-   Target areas with [condensed indicator structures](javascript:call_link\('abencondensed_ind_structure_glosry.htm'\) "Glossary Entry") for the null indicators can be defined with the addition [INDICATORS ... AS BITFIELD](abaptypes_indicators.htm#!ABAP_ADDITION_2@2@) of the [TYPES](javascript:call_link\('abaptypes.htm'\)) statement.
-   Bits that are always set to 0 (non-corresponding columns, excess bits) are independent from NULL or NOT NULL and how the state of the database is.
-   If the null indicator is not placed behind all other components, it must be included in the counting of the positions of the target area. Since the null indicator does not correspond to a column of the result set, the respective bit is set to 0.
-   The statement [GET BIT](javascript:call_link\('abapget_bit.htm'\)) or [bit operators](javascript:call_link\('abenbit_operators.htm'\)) can be used to evaluate null indicators represented by bits.

Example

The third column of the result set of the SELECT statement contains the null value because the WHEN condition of the CASE expression is false and no ELSE is specified. The first two columns do not contain the null value. By using NOT NULL BITFIELD, the first two bits of the [condensed indicator structure](javascript:call_link\('abencondensed_ind_structure_glosry.htm'\) "Glossary Entry") null\_ind are set to 1 and all other bits are 0. While its hexadecimal value C0 is not too informative, the GET BIT statement can be used to extract the positions of the columns that do not contain the null value.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS
         num1 AS x,
         CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y,
         CASE WHEN num1 = 0 THEN 0 END AS z
       INTO @FINAL(wa\_ind) INDICATORS NOT NULL BITFIELD null\_ind.
DATA binary\_ind TYPE string.
DATA not\_null\_columns TYPE TABLE OF i WITH EMPTY KEY.
WHILE sy-index <= xstrlen( wa\_ind-null\_ind ) \* 8.
  GET BIT sy-index OF wa\_ind-null\_ind INTO FINAL(bit).
  binary\_ind &&= bit.
  IF bit = 1.
    APPEND sy-index TO not\_null\_columns.
  ENDIF.
ENDWHILE.
cl\_demo\_output=>new(
)->write( wa\_ind
)->write( wa\_ind-null\_ind
)->write( binary\_ind
)->write( not\_null\_columns
)->display( ).

Executable Example

The executable example [SELECT, Byte Field Indicators](javascript:call_link\('abenselect_ind_bitfield_abexa.htm'\)) shows the difference between position-based and name-based assignments without and with CORRESPONDING FIELDS.

Alternative 3   

... INDICATORS (indicator\_syntax)

Effect

Instead of the static specifications above, a parenthesized data object indicator\_syntax can be specified after INDICATORS. This data object must contain the syntax shown for the static specification when the statement is executed. The data object indicator\_syntax can be a character-like data object or a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a character-like row type. The syntax in indicator\_syntax is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR. If the content of indicator\_syntax is initial, the addition INDICATORS is ignored.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\)).

Example

Like the example for a static specification, but the null indicator is specified dynamically in this case. For this reason, inline declarations cannot be used without the addition [NEW](javascript:call_link\('abapselect_into_target.htm'\)) and a suitable structure must be defined. Because NOT is specified, the character-like components x and y of the null indicator are filled with X.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ).
DATA:
  BEGIN OF wa,
    x TYPE i,
    y TYPE i,
    z TYPE i,
    BEGIN OF not\_null\_ind,
      x TYPE c LENGTH 1,
      y TYPE c LENGTH 1,
      z TYPE c LENGTH 1,
    END OF not\_null\_ind,
  END OF wa.
FINAL(indicator\_syntax) = \`NOT NULL STRUCTURE not\_null\_ind\`.
SELECT SINGLE
       FROM demo\_expressions
       FIELDS
         num1 AS x,
         CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y,
         CASE WHEN num1 = 0 THEN 0 END AS z
       INTO @wa INDICATORS (indicator\_syntax).
cl\_demo\_output=>display( wa ).

Example

Like the preceding example but with the addition [NEW](javascript:call_link\('abapselect_into_target.htm'\)). An inline declaration can be used here.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ).
FINAL(indicator\_syntax) = \`NOT NULL STRUCTURE not\_null\_ind\`.
SELECT SINGLE
       FROM demo\_expressions
       FIELDS
         num1 AS x,
         CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y,
         CASE WHEN num1 = 0 THEN 0 END AS z
       INTO NEW @FINAL(wa) INDICATORS (indicator\_syntax).
cl\_demo\_output=>display( wa ).

Continue
![Example](exa.gif "Example") [SELECT, Byte Field Indicators](javascript:call_link\('abenselect_ind_bitfield_abexa.htm'\))
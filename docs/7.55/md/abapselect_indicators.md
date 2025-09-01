  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, INTO, APPENDING](javascript:call_link\('abapinto_clause.htm'\)) → 

SELECT, indicators

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... INDICATORS *{**\[*NOT*\]* NULL STRUCTURE null\_ind*}*
             *|* (indicator\_syntax) ...

Alternatives:

[1\. ... INDICATORS *\[*NOT*\]* NULL STRUCTURE null\_ind](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INDICATORS (indicator\_syntax)](#!ABAP_ALTERNATIVE_2@2@)

Effect

The addition INDICATORS of the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause can be used to specify indicators. Currently, you can specify a [null indicator](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry") by storing information about which columns of the result set contain the null value and which do not. The addition can be specified only for importing to structured work areas wa or internal tables itab with a structured line type. It is possible to use it when existing target areas are specified, in combination with the addition [NEW](javascript:call_link\('abapselect_into_target.htm'\)), and in [inline declarations](javascript:call_link\('abapselect_into_target.htm'\)). There is a static variant and a dynamic variant.

Hint

The addition INDICATORS is not supported by all databases. In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports the use of this addition. This requires the constant INDICATORS of this class to be passed to the method in an internal table.

Alternative 1

... INDICATORS *\[*NOT*\]* NULL STRUCTURE null\_ind

Effect

Specifies the [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry") null\_ind of a structured target area specified in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause as a [null indicator](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry").

-   After a specified existing work area wa or existing internal table itab, this must contain a substructure with the name null\_ind as a component. The substructure must contain at least as many components as the number of columns in the result set defined using the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). These may also be components of other substructures. Each component must be of type x or c with length 1. The position and name of the substructure must be defined in such a way that it is not affected by the assignment of data from the result set for the query.

-   The addition INDICATORS after an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") with @DATA(wa) or @DATA(itab) adds a substructure with the name null\_ind to the end of the structure or row structure declared inline. For each column in the result set, this substructure contains a component of type x and length 1 with the same name as the column and in the same sequence. If preceding components of the structure declared inline are substructures, the substructure null\_ind is also structured accordingly. The name null\_ind must not be used as the name of a column in the result set.

If the addition CORRESPONDING FIELDS is not specified, the names of the components of the null indicator are not important. From left to right, they are assigned an ID that indicates whether or not the column with the same name in the current row of the result set contains the null value. Nested structures are broken down into their elementary components. If the addition CORRESPONDING FIELDS is specified, a component with the same name must exist in the null indicator for each component of wa or itab supplied with data. The relevant ID is assigned to these components. For components of any substructures, the full composite name created using the structure component selector is considered. The IDs are as follows:

-   If the optional addition NOT is not specified, the component value hexadecimal 1 for type x and "X" for type c mean that the corresponding column contains the null value. For columns that do not contain the null value, the associated components are initialized.

-   If the optional addition NOT is specified, the component value hexadecimal 1 for type x and "X" for type c mean that the corresponding column does not contain the null value. For columns that contain the null value, the associated components are initialized.

Hints

-   It is recommended to give the components of the null indicator exactly the same name as the columns of the result set.

-   Work areas with null indicators can be defined with the addition [INDICATORS](javascript:call_link\('abaptypes_indicators.htm'\)) of the [TYPES](javascript:call_link\('abaptypes.htm'\)) statement.

-   If wa or the row structure of itab contains further substructures besides the null indicator, it does not make sense to use CORRESPONDING FIELDS. It is also recommended to structure the null indicator accordingly.

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
       INTO @DATA(wa) INDICATORS NULL STRUCTURE null\_ind.
cl\_demo\_output=>new(
  )->write( |{ wa-x } { wa-null\_ind-x }|
  )->write( |{ wa-y } { wa-null\_ind-y }|
  )->write( |{ wa-z } { wa-null\_ind-z }|
  )->display( ).

Example

The internal table itab declared inline contains the elementary column carrname, the substructure spfli, which is structured like the DDIC database table SPFLI, and the substructure nulls. The substructure nulls also contains the elementary column carrname and the substructure spfli. However, the components are all of type x with length 1.

SELECT FROM scarr
         INNER JOIN spfli ON scarr~carrid = spfli~carrid
       FIELDS
         scarr~carrname,
         spfli~\*
       INTO TABLE @DATA(itab) INDICATORS NULL STRUCTURE nulls.

Alternative 2

... INDICATORS (indicator\_syntax)

Effect

Instead of the static specification, a parenthesized data object indicator\_syntax can be specified after INDICATORS. This data object must contain the syntax shown for the static specification when the statement is executed. The data object indicator\_syntax can be a character-like data object or a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a character-like line type. The syntax in indicator\_syntax is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR. If the content of indicator\_syntax is initial, the addition INDICATORS is ignored.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or masked before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\)).

Example

Like the example for specifying information statically, but the null indicator is specified dynamically in this case. For this reason, inline declarations cannot be used without the addition [NEW](javascript:call_link\('abapselect_into_target.htm'\)) and a suitable structure must be defined. Because NOT is specified, the character-like components x and y of the null indicator are filled with "X".

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
DATA(indicator\_syntax) = \`NOT NULL STRUCTURE not\_null\_ind\`.
SELECT SINGLE
       FROM demo\_expressions
       FIELDS
         num1 AS x,
         CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y,
         CASE WHEN num1 = 0 THEN 0 END AS z
       INTO @wa INDICATORS (indicator\_syntax).
cl\_demo\_output=>new(
  )->write( |{ wa-x } { wa-not\_null\_ind-x }|
  )->write( |{ wa-y } { wa-not\_null\_ind-y }|
  )->write( |{ wa-z } { wa-not\_null\_ind-z }|
  )->display( ).

Example

Like the preceding example but with the addition [NEW](javascript:call_link\('abapselect_into_target.htm'\)). An inline declaration can be used here.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ).
DATA(indicator\_syntax) = \`NOT NULL STRUCTURE not\_null\_ind\`.
SELECT SINGLE
       FROM demo\_expressions
       FIELDS
         num1 AS x,
         CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y,
         CASE WHEN num1 = 0 THEN 0 END AS z
       INTO NEW @DATA(wa) INDICATORS (indicator\_syntax).
ASSIGN wa->\* TO FIELD-SYMBOL(<fs>).
ASSIGN COMPONENT 'X' OF STRUCTURE <fs> TO FIELD-SYMBOL(<x>).
ASSIGN COMPONENT 'Y' OF STRUCTURE <fs> TO FIELD-SYMBOL(<y>).
ASSIGN COMPONENT 'Z' OF STRUCTURE <fs> TO FIELD-SYMBOL(<z>).
ASSIGN COMPONENT 'NOT\_NULL\_IND-X' OF STRUCTURE <fs> TO
FIELD-SYMBOL(<indx>).
ASSIGN COMPONENT 'NOT\_NULL\_IND-Y' OF STRUCTURE <fs> TO
FIELD-SYMBOL(<indy>).
ASSIGN COMPONENT 'NOT\_NULL\_IND-Z' OF STRUCTURE <fs> TO
FIELD-SYMBOL(<indz>).
cl\_demo\_output=>new(
  )->write( |{ <x> } { <indx> }|
  )->write( |{ <y> } { <indy> }|
  )->write( |{ <z> } { <indz> }|
  )->display( ).
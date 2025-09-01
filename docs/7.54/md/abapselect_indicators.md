---
title: "SELECT - indicators"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_shortref.htm) Syntax ... INDICATORS NOT NULL STRUCTURE null_ind  (indicator_syntax) ... Alternatives: 1. ... INDICATORS NOT NULL STRUCTURE null_ind(#!ABAP_ALTERNATIVE_1@1@) 2. ...
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_indicators.htm"
abapFile: "abapselect_indicators.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "class", "data", "internal-table", "abapselect", "indicators"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - INTO, APPENDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) → 

SELECT - indicators

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_shortref.htm)

Syntax

... INDICATORS *{**\[*NOT*\]* NULL STRUCTURE null\_ind*}*
             *|* (indicator\_syntax) ...

Alternatives:

[1\. ... INDICATORS *\[*NOT*\]* NULL STRUCTURE null\_ind](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INDICATORS (indicator\_syntax)](#!ABAP_ALTERNATIVE_2@2@)

Effect

The addition INDICATORS of the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause can be used to specify indicators. Currently, you can specify a [null indicator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_indicator_glosry.htm "Glossary Entry") by storing information about which columns of the results set contain the null value and which do not. The addition is specified only for importing to structured work areas wa or internal tables itab with a structured row type. It is possible to use it when existing target areas are specified, in combination with the addition [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), and in [inline declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm). There is a static variant and a dynamic variant.

Alternative 1

... INDICATORS *\[*NOT*\]* NULL STRUCTURE null\_ind

Effect

Specifies the [substructure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubstructure_glosry.htm "Glossary Entry") null\_ind of a structured target area specified in the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause as a [null indicator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_indicator_glosry.htm "Glossary Entry").

-   After a specified existing work area wa or existing internal table itab, this must contain a substructure with the name null\_ind as a component. The substructure must contain at least as many components as the number of columns in the results set defined using the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm). These may also be components of other substructures. Each component must be of type x or c with length 1. The position and name of the substructure must be defined in such a way that it is not affected by the assignment of data from the results set for the query.
    
-   The addition INDICATORS after an [inline declaration](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninline_declaration_glosry.htm "Glossary Entry") with @DATA(wa) or @DATA(itab) adds a substructure with the name null\_ind to the end of the structure or row structure declared inline. For each column in the results set, this substructure contains a component of type x and length 1 with the same name as the column and in the same sequence. If preceding components of the structure declared inline are substructures, the substructure null\_ind is also structured accordingly. The name null\_ind must not be used as the name of a column in the results set.
    

If the addition CORRESPONDING FIELDS is not specified, the names of the components of the null indicator are not important. From left to right, they are assigned an ID that indicates whether or not the column with the same name in the current row of the results set contains the null value. Nested structures are broken down into their elementary components. If the addition CORRESPONDING FIELDS is specified, a component with the same name must exist in the null indicator for each component of wa or itab supplied with data. The relevant ID is assigned to these components. For components of any substructures, the full composite name created using the structure component selector is considered. The IDs are as follows:

-   If the optional addition NOT is not specified, the component value hexadecimal 1 for type x and "X" for type c mean that the corresponding column contains the null value. For columns that do not contain the null value, the associated components are initialized.
    
-   If the optional addition NOT is specified, the component value hexadecimal 1 for type x and "X" for type c mean that the corresponding column does not contain the null value. For columns that contain the null value, the associated components are initialized.
    

Notes

-   It is recommended to give the components of the null indicator exactly the same name as the columns of the results set.
    
-   If wa or the row structure of itab contains further substructures besides the null indicator, it does not make sense to use CORRESPONDING FIELDS. It is also recommended to structure the null indicator accordingly.
    
-   When the addition NOT is not used, the entire null indicator is initial if no column of the results set contains the null value and when the addition NOT is used, the entire null indicator is initial if all columns of the results set contain the null value. This can be checked in a single logical expression.
    

Example

The third column of the results set of the SELECT statement contains the null value because the WHEN condition of the CASE expression is false and no ELSE is specified. Accordingly, component z of substructure wa-null\_ind contains the value hexadecimal 1.

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

The internal table itab declared inline contains the elementary column carrname, the substructure spfli, which is structured like the database table SPFLI, and the substructure nulls. The substructure nulls also contains the elementary column carrname and the substructure spfli. However, the components are all of type x with length 1.

SELECT FROM scarr
         INNER JOIN spfli ON scarr~carrid = spfli~carrid
       FIELDS
         scarr~carrname,
         spfli~\*
       INTO TABLE @DATA(itab) INDICATORS NULL STRUCTURE nulls.

Alternative 2

... INDICATORS (indicator\_syntax)

Effect

Instead of specifying information statically, a data object indicator\_syntax can be specified in parentheses after INDICATORS. When the statement is executed, the data object must contain the syntax displayed for the statically specified information. The data object indicator\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type. The syntax in indicator\_syntax is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR. If the content of indicator\_syntax is initial, the addition INDICATORS is ignored.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_dyn_tokens_scrty.htm).

Example

Like the example for specifying information statically, but the null indicator is specified dynamically in this case. For this reason, inline declarations cannot be used without the addition [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) and a suitable structure must be defined. Because NOT is specified, the character-like components x and y of the null indicator are filled with "X".

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ).
DATA:
  BEGIN OF wa,
    x       TYPE i,
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

Like the preceding example but with the addition [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm). An inline declaration can be used here.

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
ASSIGN COMPONENT 'NOT\_NULL\_IND-X' OF STRUCTURE <fs> TO FIELD-SYMBOL(<indx>).
ASSIGN COMPONENT 'NOT\_NULL\_IND-Y' OF STRUCTURE <fs> TO FIELD-SYMBOL(<indy>).
ASSIGN COMPONENT 'NOT\_NULL\_IND-Z' OF STRUCTURE <fs> TO FIELD-SYMBOL(<indz>).
cl\_demo\_output=>new(
  )->write( |{ <x> } { <indx> }|
  )->write( |{ <y> } { <indy> }|
  )->write( |{ <z> } { <indz> }|
  )->display( ).
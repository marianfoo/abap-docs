  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm) →  [UPDATE dbtab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm) →  [UPDATE dbtab, source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_source.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20UPDATE%20dbtab%2C%20set_expression%2C%20ABAPUPDATE_SET_EXPRESSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

UPDATE dbtab, set\_expression

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_shortref.htm)

Syntax

... *{*[col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) = f*}*
  *|* *{*[col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) = [col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) + f*}*
  *|* *{*[col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) = [col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) - f*}*
  *|* (expr\_syntax) ...

Variants:

[1\. ... col = f](#!ABAP_VARIANT_1@1@)
[2\. ... col = col + f](#!ABAP_VARIANT_2@2@)
[3\. ... col = col - f](#!ABAP_VARIANT_3@3@)
[4\. ... (expr\_syntax)](#!ABAP_VARIANT_4@4@)

Effect

Change expressions for the addition SET of the statement UPDATE. These change expressions in the comma-separated list can be combined in any way required after [SET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_source.htm).

Hint

A column col can occur in a single change expression only.

Variant 1   

... col = f

Effect

Assignment of a value. Columns of the DDIC database table or DDIC view dbtab specified in [target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_target.htm) can be specified for [col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm). For f, a [literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_literals.htm), a [host variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm), a [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm), a built-in [SQL function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_builtin_functions.htm), a [cast expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cast.htm), or a column name [dbtab~comp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) of a different column in the DDIC database table can be used. A column can only occur in a single change expression after SET.

The statement UPDATE assigns the content of f to the columns col in all the rows defined by the WHERE condition. If the column has one of the data types DECFLOAT34 or DECFLOAT16, the data object has a numeric data type. If the column has the data type UTCLONG, the data object must have the data type utclong. If the data types are not [compatible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompatible_glosry.htm "Glossary Entry"), they are converted as follows:

-   When assigning a data object that is not a reference variable for a [LOB handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_glosry.htm "Glossary Entry"), the content is converted, if required, to the [ABAP data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) that corresponds to the data type of the column in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_elementary.htm). Any errors in the conversion raise the corresponding uncatchable exception. The content of f must match the data type of the column in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is checked by the [strict modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP08 and can raise an exception.
-   When assigning a data object that is a reference variable for a [LOB handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_glosry.htm "Glossary Entry"), the column col must be a [LOB](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry") with a suitable type. If the reference has a writer stream type, a writer stream is created. If it is a type for a locator, this locator must exist and is used as a source. For details, see [LOB handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenium_lob.htm).
-   When assigning a different column, the content is converted in the database system, if necessary. The option of a conversion and the conversion rules are specific to the database system. Any errors in the conversion raise the catchable exception CX\_SY\_OPEN\_SQL\_DB.

In the assignment, the assigned value must fit in the value range of the column. Otherwise, the catchable exception CX\_SY\_OPEN\_SQL\_DB is raised. This applies in particular for:

-   Assignments to numeric columns.
-   Assignments to columns of the type SSTRING, STRING, or RAWSTRING. The assigned content must not be longer than the maximum length of the columns in the database structure. This length can be determined using the built-in function [dbmaxlen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlength_functions.htm).

If a column is specified for f, changes to this column that are made in the same UPDATE statement are ignored during the assignment.

Hints

-   No [enumerated objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can be specified for f.
-   Currently, only built-in [SQL functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_builtin_functions.htm) and [cast expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cast.htm) can be specified for f. No other [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) are possible. In particular, [arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith.htm) are not supported. Variant 2 and variant 3 below are not arithmetic expressions, but special syntax.
-   When specifying an [SQL function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_builtin_functions.htm) for f, there currently is a limitation concerning the data type: the result of the SQL function can have any data type, except STRING and RAWSTRING. The syntax check verifies this.
-   As explained above, f cannot be an [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith.htm). However, it is possible to use arithmetic expressions as argument of a [cast expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cast.htm).
-   When a [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) is specified on the right side, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check.
-   Host variables without the escape character @ are [obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05.

Example

The following UPDATE statement sets the specified columns to the specified values in every row of the DDIC database table.

DELETE FROM demo\_update.
INSERT demo\_update FROM TABLE @( VALUE #( ( id = 'X' )
                                          ( id = 'Y' )
                                          ( id = 'Z' ) ) ).
FINAL(num) = 300.
UPDATE demo\_update SET col1 = 100,
                       col2 = demo\_update~col1,
                       col3 = @num,
                       col4 = @( num + 100 ).

Variant 2   

... col = col + f

Effect

Addition of a value. The same applies to [col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) and f as to the assignment of a value, where col must have a numeric data type. col must be specified either with or without the prefix dbtab~ on both sides. The data types DF16\_RAW and DF34\_RAW and the obsolete types DF16\_SCL and DF34\_SCL are not allowed.

The statement UPDATE adds the value of f to the content of the column col in all the rows defined by the WHERE condition. Otherwise, the same rules apply as to the assignment of a value.

Example

The following UPDATE statement adds the specified values to the values in the specified columns in every row of the DDIC database table.

DELETE FROM demo\_update.
INSERT demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 =  1 col2 =  2 col3 =  3 col4 =  4 )
           ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 )
           ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ) ).
FINAL(num) = 300.
UPDATE demo\_update SET col1 = col1 + 100,
                       col2 = col2 + demo\_update~col1,
                       col3 = col3 + @num,
                       col4 = col4 + @( num + 100 ).

Variant 3   

... col = col - f

Effect

Subtraction of a value. The same applies to [col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) and f as to the assignment of a value. Here, col must have a numeric data type. col must be specified either with or without the prefix dbtab~ on both sides. The data types DF16\_RAW and DF34\_RAW and the obsolete types DF16\_SCL and DF34\_SCL are not allowed.

The statement UPDATE subtracts the value of f from the content of the column col, in all rows defined by the WHERE condition. Otherwise, the same rules apply as to the assignment of a value.

Example

The following UPDATE statement subtracts the specified values from the values in the specified columns in every row of the database table.

DELETE FROM demo\_update.
INSERT demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 =  1 col2 =  2 col3 =  3 col4 =  4 )
           ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 )
           ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ) ).
FINAL(num) = 300.
UPDATE demo\_update SET col1 = col1 - 100,
                       col2 = col2 - demo\_update~col1,
                       col3 = col3 - @num,
                       col4 = col4 - @( num + 100 ).

Variant 4   

... (expr\_syntax)

Effect

Dynamic specification of change expressions. A change expression can be specified as a parenthesized data object expr\_syntax that, when the statement is executed, either contains the syntax of one or more static change expressions (with the exception of host expressions) or is initial. The data object expr\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") and with a character-like data object. The syntax in expr\_syntax is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows.

If expr\_syntax is initial when the statement is executed, the change expression is ignored. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_inj_dyn_tokens_scrty.htm).

Hint

If expr\_syntax is an internal table with a [header line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_body_glosry.htm "Glossary Entry") is evaluated and not the header line.

Example

The following UPDATE statement changes the columns specified in a dynamic token to the specified values in every row of the database table.

DELETE FROM demo\_update.
INSERT demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 =  1 col2 =  2 col3 =  3 )
           ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 )
           ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 ) ) ).
FINAL(num) = 100.
FINAL(expr\_syntax) = \`col1 = @num, \` &&
                    \`col2 = col2 + demo\_update~col1, \` &&
                    \`col3 = col3 - @num\`.
TRY.
    UPDATE demo\_update SET (expr\_syntax).
  CATCH cx\_sy\_dynamic\_osql\_error INTO FINAL(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Continue
![Example](exa.gif "Example") [UPDATE, Use of SET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_set_abexa.htm)
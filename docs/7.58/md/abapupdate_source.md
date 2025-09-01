---
title: "UPDATE dbtab, source"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_shortref.htm) Syntax ...  SET set_expression1(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_expression.htm), set_expression2(https://help.sap.com/doc/abapdocu_758_index_htm
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_source.htm"
abapFile: "abapupdate_source.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapupdate", "source"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm) →  [UPDATE dbtab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20UPDATE%20dbtab%2C%20source%2C%20ABAPUPDATE_SOURCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

UPDATE dbtab, source

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_shortref.htm)

Syntax

... *{* *{*SET [set\_expression1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_expression.htm), [set\_expression2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_expression.htm), ... *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm)*\]* *\[* [db\_hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_db_hints.htm)*\]**}*
    *|* *{*FROM *{*@wa*|*@( expr )*}**|**{*TABLE @itab*|*@( expr )*}**}*
            *\[*[INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_indicator.htm)*\]* *}* ...

Alternatives:

[1\. ... SET set\_expression1, set\_expression2, ... *\[*WHERE sql\_cond*\]* *\[*db\_hints*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... FROM @wa*|*@( expr ) *\[*INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... FROM TABLE @itab*|*@( expr ) *\[*INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind*\]*](#!ABAP_ALTERNATIVE_3@3@)

Effect

The specifications in source define which rows and columns are changed. Either individual columns are changed using the addition SET or entire rows are overwritten using the addition FROM.

After FROM a non-table-like data object, or after TABLE an internal table, can be specified as a [host variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) or [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm). The content of these objects determines which rows are changed and which values are used to overwrite the rows.

After FROM, [set indicators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_indicator.htm) can be used to define individual fields within a row to be changed (instead of overwriting the entire content of a row).

Hint

Host variables without the escape character @ are [obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05.

Alternative 1   

... SET set\_expression1, set\_expression2, ... *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm)*\]* *\[* [db\_hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_db_hints.htm)*\]*

Additions:

[1\. ... WHERE sql\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... db\_hints](#!ABAP_ADDITION_2@2@)

Effect

After the addition SET, the changes are specified in a list of change expressions: [set\_expression1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_expression.htm), [set\_expression2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_expression.htm), ...

The content of primary key fields can be modified only if the affected DDIC database table is not linked with a search help. If these changes would create a row which would produce duplicate entries in the primary key or a unique secondary index of the DDIC database table, no rows are changed and sy-subrc is set to 4.

If the value of a column with type LRAW or LCHR is modified, the associated INT2 or INT4 field must also be given a value.

Hints

-   When a comma-separated list is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.
-   Instead of using commas, blanks can be used to separate change expressions in an [obsolete form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_lists_obsolete.htm). Commas must be specified, however, in the [strict modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05.

Executable Example

[UPDATE, Use of SET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_set_abexa.htm)

Addition 1   

... WHERE sql\_cond

Effect

The addition WHERE determines in which rows of the DDIC database table the changes are made. Those rows are changed for which the logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) is true. The [relational expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) of the logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasql_cond.htm) are subject to the restriction that no [subqueries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry") can be evaluated on the modified DDIC database table. If no WHERE condition is specified, all the rows in the target of the statement are modified by default. In a client-dependent target, these are the rows of the current client. [Implicit client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) can be defined using the addition [USING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm). The [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent target cannot be specified in the WHERE condition.

Hints

-   If the data source is accessed using generic [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry"), the buffered area must be specified completely in the WHERE condition. If not, buffering is bypassed.
-   If the data sources are accessed using single record buffering, the conditions joined using AND in the WHERE condition must be specified for all key fields of the primary key. If not, buffering is bypassed.
-   If [implicit client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) is disabled using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapud_client_obsolete.htm), which is obsolete here, it is still possible to use a client column as an operand in the WHERE condition.

Example

Sets multiple columns in a row determined using a WHERE condition.

DELETE FROM demo\_update.
INSERT demo\_update FROM @( VALUE #( id = 'X' ) ).
UPDATE demo\_update SET col1 = 100,
                       col2 = 200,
                       col3 = 300,
                       col4 = 400 WHERE id = 'X'.

Addition 2   

... db\_hints

Effect

In this variant, [database hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_hint_glosry.htm "Glossary Entry") can be specified using [db\_hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_db_hints.htm).

Alternative 2   

... FROM @wa*|*@( expr ) *\[*INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind*\]*

Effect

If a non-table-like work area is specified as a host variable [@wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) or host expression [@( expr )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm), a row is searched in the DDIC database table whose primary key content is the same as that of the corresponding initial part of the work area. The work area must meet the [prerequisites](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_wa.htm) for use in ABAP SQL statements.

-   If a work area that does not contain any reference variables for [LOB handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_glosry.htm "Glossary Entry") is specified, the content of the work area is used unconverted and according to the structure of the DDIC database table or the view. The content of the work area is assigned to the rows found. The assignment takes place without conversion, from left to right according to the structure of the DDIC database table or the view.
-   When a [LOB handle structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") is specified, it must be structured exactly like the structure of the DDIC database table in accordance with the [prerequisites](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_wa.htm). Work area components that are not [LOB handle components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") are assigned directly to the corresponding column of the row found. In the case of a LOB handle component of a reader stream type, the reader is created. If it is a type for a locator, the locator must exist and is used as a source. For details, see [LOB handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenium_lob.htm).
-   When set indicators are specified with the addition [INDICATORS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_indicator.htm) and the work area does not contain any reference variables for [LOB handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_glosry.htm "Glossary Entry"), it must be compatible with the structure of the DDIC database table. In the case of a [LOB handle structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry"), the LOB handle components can be mapped to the data types STRING or RAWSTRING and are handled as described above.

If there is no row with the same content for the primary key in the database or if the change would produce a duplicate entry in a unique secondary index, the row is not changed and sy-subrc is set to 4.

[Implicit ABAP SQL client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) applies, in which a [client ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_identifier_glosry.htm "Glossary Entry") specified in wa is ignored. The current client is used by default. The addition [USING CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm) can be used to switch to an explicitly specified client. The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm) can be used to switch to the client specified in wa.

[Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenview_glosry.htm "Glossary Entry") whose fields are all key fields should not be written to using UPDATE FROM. For [DDIC database views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_view_glosry.htm "Glossary Entry"), this produces a syntax check warning and for [DDIC projection views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_proj_view_glosry.htm "Glossary Entry") a syntax error or runtime error.

Hints

-   The work area wa should always be declared with reference to the DDIC database table or the DDIC view in the ABAP Dictionary. For the derivation of [LOB handle structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry"), there are special [additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_lob_handle.htm) of the statements TYPES and *\[*CLASS-*\]*DATA.
-   Exceptions due to invalid values can also be raised in compatible work areas. For example, components of the types d and t can contain invalid dates and times that are not accepted by columns of the types DATN and TIMN.
-   If a [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") is specified as a [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) for the work area wa, for which the data type is inferred using the # character, a structure consisting of all the database table columns is created as the type.
-   If the DDIC database table or DDIC view is specified statically, a [short form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_obsolete.htm) can be specified outside of classes. This means that the work area specified using FROM wa can be omitted. The prerequisite is that a [table work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab for the corresponding DDIC database table or the DDIC view is declared using the statement TABLES. The system then adds the addition FROM dbtab implicitly to the statement UPDATE.

Example

Changing of the discount rate of the customer with customer number '00017777' (in the current client) to 3 percent.

DATA wa TYPE scustom.
SELECT SINGLE \*
       FROM scustom
       WHERE id = '00017777'
       INTO @wa.
wa-discount = '003'.
UPDATE scustom FROM @wa.

Example

The same example as before but with an inline declaration and a host expression.

SELECT SINGLE \*
       FROM scustom
       WHERE id = '00017777'
       INTO @FINAL(wa).
UPDATE scustom FROM @( VALUE #( BASE wa discount = '003' ) ).

Alternative 3   

... FROM TABLE @itab*|*@( expr ) *\[*INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind*\]*

Effect

If an internal table is specified as a host variable [@itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) or host expression [@( expr )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm), the system processes all rows of the internal table in accordance with the rules for the work area wa, with the exception that when specifying an internal table, [locators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocator_glosry.htm "Glossary Entry") are used as a source but [writer streams](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwriter_stream_glosry.htm "Glossary Entry") cannot be created.

The row type of the internal table must meet the [prerequisites](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_wa.htm) for use in ABAP SQL statements.

If there is no row with the same content of the [primary key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_key_glosry.htm "Glossary Entry") for a row of the internal table in the database or if the change would produce a duplicate entry in a unique secondary index, the corresponding row is not changed and sy-subrc is set to 4. Processing then continues with the next row.

If the internal table is empty, no rows are changed. However, sy-subrc is still set to 0. The system field sy-dbcnt is set to the number of rows that are actually inserted.

Hints

-   If an internal table is used, package-by-package processing performs a read in parallel to an UPDATE on the same rows that partially shows the new status and partially shows the old status.
-   The statement UPDATE FROM TABLE changes all rows for which this is possible. If sy-subrc contains the value 4 after the statement has been executed, this does not mean that no rows were changed. It simply means that not all of the rows in the internal table could be respected.
-   If a [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") as a [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) is specified as an internal table itab, for which the data type is inferred using the # character, a structured standard table whose row type consists of all the database table columns with an empty table key is created as the type.

Example

Reduction of the flight price for all of today's flights of an airline carrier in the DDIC database table SFLIGHT by the percentage percent. The new price is calculated in an internal table sflight\_tab that is declared inline and the DDIC database table is changed by using the internal table as a source.

DATA: carrid  TYPE sflight-carrid,
      percent TYPE p LENGTH 1 DECIMALS 0.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = percent )->request( ).
SELECT \*
       FROM sflight
       WHERE carrid = @carrid AND
             fldate = @( cl\_demo\_date\_time=>get\_user\_date( ) )
       INTO TABLE @FINAL(sflight\_tab).
IF sy-subrc = 0.
  LOOP AT sflight\_tab ASSIGNING FIELD-SYMBOL(<sflight>).
    <sflight>-price \*= 1 - percent / 100.
  ENDLOOP.
ENDIF.
UPDATE sflight FROM TABLE @sflight\_tab.

Example

The same example as above, but the new price is calculated in a host expression for the internal table.

DATA: carrid  TYPE sflight-carrid,
      percent TYPE p LENGTH 1 DECIMALS 0.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = percent )->request( ).
SELECT \*
       FROM sflight
       WHERE carrid = @carrid AND
             fldate = @( cl\_demo\_date\_time=>get\_user\_date( ) )
       INTO TABLE @FINAL(sflight\_tab).
IF sy-subrc = 0.
  UPDATE sflight FROM TABLE @( VALUE #(
    FOR <sflight> IN sflight\_tab
      ( VALUE #(
          BASE <sflight>
          price = <sflight>-price \* ( 1 - percent / 100 ) ) ) ) ).
ENDIF.

Continue
[UPDATE dbtab, set indicators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_indicator.htm)
[UPDATE dbtab, set\_expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_expression.htm)
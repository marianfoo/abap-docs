  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [APPEND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20APPEND%2C%20line_spec%2C%20ABAPAPPEND_LINESPEC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

APPEND, line\_spec

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend_shortref.htm)

Syntax

... wa
  *|* *{*INITIAL LINE*}*
  *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)*\]**}* ...

Alternatives:

[1\. ... wa](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INITIAL LINE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_3@3@)

Effect

Either a work area wa, an initial line INITIAL LINE, or multiple lines of an internal table jtab can be appended.

Alternative 1   

... wa

Effect

A new line is appended to which the content of the work area wa is assigned. wa is a [general expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). wa may be incompatible with the line type of the internal table and, if necessary, is converted to the line type in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm). If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified for wa, the line type of the internal table is used to determine the [calculation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_type_glosry.htm "Glossary Entry").

Hints

-   If a conflict occurs with an existing unique primary table type, this raises an uncatchable exception when appending a single line. In the case of a conflict with a unique secondary table key, a catchable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.
-   Specifying a [calculation expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_expression_glosry.htm "Glossary Entry") for wa is usually only useful for elementary line types.
-   Outside of classes, there is also an [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_short_forms.htm) where wa TO can be omitted if the internal table has an identically named [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry") itab. The statement then uses the header line as the work area implicitly.

Example

Appending of square numbers to a [sorted table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry") with elementary line type.

DATA: int  TYPE i,
      itab LIKE SORTED TABLE OF int
           WITH UNIQUE KEY table\_line.
DO 10 TIMES.
  int = sy-index \*\* 2.
  APPEND int TO itab.
ENDDO.

Alternative 2   

... INITIAL LINE

Effect

A new line is appended in which every component contains the [type-dependent initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm).

Example

Appending of an initial line that simultaneously is linked to a field symbol using the addition [ASSIGNING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend_result.htm). This means that initial lines can be processed directly.

DATA itab TYPE TABLE OF spfli.
FIELD-SYMBOLS <line> LIKE LINE OF itab.
APPEND INITIAL LINE TO itab ASSIGNING <line>.
<line>-carrid = '...'.
...

Alternative 3   

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY keyname*\]*

Effect

The lines of an internal table jtab are appended as a block. jtab is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

The lines to be inserted are taken sequentially from the table jtab. The line type of jtab can be incompatible with the line type of the internal table itab and is converted to the line type of the target table, if necessary, in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm). If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead.

The order in which the lines are taken is the same as for the statement [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) and can also be affected by specifying a table key [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) after USING KEY. The additions FROM idx1 and TO idx2 have the same syntax and effect as for [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_cond.htm) with respect to jtab. STEP n has the same syntax and effect as for [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_cond.htm) with the exception that the value of n must be positive.

If a conflict with existing primary or secondary table keys occurs, this always raises an uncatchable exception when multiple lines are appended from an internal table.

Hint

When a standard table is constructed, the constructor operators [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) and [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) can also append multiple lines from a table to the target table using [LINES OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_lspc.htm).

Example

Appending of the lines of an internal table itab2 to the standard table itab1.

SELECT \*
       FROM spfli
       WHERE carrid = 'LH'
       INTO TABLE @DATA(itab1).
SELECT \*
       FROM spfli
       WHERE carrid = 'UA'
       INTO TABLE @FINAL(itab2).
APPEND LINES OF itab2 TO itab1.

Example

Appending of the lines of an internal table jtab to the standard table itab with the additions FROM, TO, and STEP.

DATA: itab TYPE STANDARD TABLE OF i,
      jtab LIKE itab.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ).
jtab = VALUE #( FOR j = 11 UNTIL j > 20 ( j ) ).
APPEND LINES OF jtab FROM 1 TO 5 STEP 2 TO itab.
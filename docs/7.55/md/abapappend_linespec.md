  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [APPEND](javascript:call_link\('abapappend.htm'\)) → 

APPEND, line\_spec

[Short Reference](javascript:call_link\('abapappend_shortref.htm'\))

Syntax

... wa
  *|* *{*INITIAL LINE*}*
  *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]**}* ...

Alternatives:

[1\. ... wa](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INITIAL LINE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_3@3@)

Effect

Either a work area wa, an initial line INITIAL LINE, or multiple lines of an internal table jtab can be appended.

Alternative 1

... wa

Effect

A new line is appended to which the content of the work area wa is assigned. wa is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). wa may be incompatible with the line type of the internal table and, if necessary, is converted to the line type in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") is specified for wa, the line type of the internal table is used to determine the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry").

Hints

-   If a conflict occurs with an existing unique primary table type, this raises an uncatchable exception when appending a single line. In the case of a conflict with a unique secondary table key, a catchable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.
    

-   Specifying a [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") for wa is usually only useful for elementary line types.
    

-   Outside of classes, there is also an [obsolete short form](javascript:call_link\('abenitab_short_forms.htm'\)) where wa TO can be omitted if the internal table has an identically named [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") itab. The statement then uses the header line as the work area implicitly.
    

Example

Appending of square numbers to a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") with elementary line type.

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

A new line is appended in which every component contains the [type-dependent initial value](javascript:call_link\('abenbuilt_in_types_complete.htm'\)).

Example

Appending of an initial line that simultaneously linked to a field symbol using the addition [ASSIGNING](javascript:call_link\('abapappend_result.htm'\)). This means that initial lines can be processed directly.

DATA itab TYPE TABLE OF spfli.
FIELD-SYMBOLS <line> LIKE LINE OF itab.
APPEND INITIAL LINE TO itab ASSIGNING <line>.
<line>-carrid = '...'.
...

Alternative 3

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*

Effect

The lines of an internal table jtab are appended as a block. jtab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

The lines to be inserted are taken sequentially from the table jtab. The line type of jtab can be incompatible with the line type of the internal table itab and is converted to the line type of the target table, if necessary, in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). If a conversion error occurs here, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead.

The order in which the lines are taken is the same as for the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) and can also be affected by specifying a table key [keyname](javascript:call_link\('abenkeyname.htm'\)) after USING KEY. The additions FROM idx1 and TO idx2 have the same syntax and effect as for [LOOP](javascript:call_link\('abaploop_at_itab_cond.htm'\)) with respect to jtab.

If a conflict with existing primary or secondary table keys occurs, this always raises an uncatchable exception when multiple lines are appended from an internal table.

Hint

When a standard table is constructed, the constructor operators [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) and [VALUE](javascript:call_link\('abenconstructor_expression_new.htm'\)) can also append multiple lines from a table to the target table using [LINES OF](javascript:call_link\('abennew_constructor_params_lspc.htm'\)).

Example

Appending of the lines of an internal table itab2 to the standard table itab1.

SELECT \*
       FROM spfli
       WHERE carrid = 'LH'
       INTO TABLE @DATA(itab1).
SELECT \*
       FROM spfli
       WHERE carrid = 'UA'
       INTO TABLE @DATA(itab2).
APPEND LINES OF itab2 TO itab1.
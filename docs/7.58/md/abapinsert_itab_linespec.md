  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%2C%20line_spec%2C%20ABAPINSERT_ITAB_LINESPEC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT, line\_spec

[Short Reference](javascript:call_link\('abapinsert_itab_shortref.htm'\))

Syntax

... wa
  *|* *{*INITIAL LINE*}*
  *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]**}* ...

Alternatives:

[1\. ... wa](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INITIAL LINE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_3@3@)

Effect

Either a work area wa, an initial line INITIAL LINE, or multiple lines of an internal table jtab can be appended.

Alternative 1   

... wa

Effect

A new line is created to which the content of the work area wa is assigned. wa is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The following applies here:

-   When inserting using the table key, wa [must be compatible with](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") the line type of the internal table. Exceptions to this rule are any [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") whose result type can be incompatible with the line type and whose result is converted to the line type if possible.
-   When inserting using the table index, wa can be incompatible with the line type of the internal table and is, if necessary, converted to the relevant line type, in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).

If a conversion error occurs in the conversion, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") is specified for wa, the line type of the internal table is used to determine [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry").

When inserting individual lines into an internal table with non-unique [table keys](javascript:call_link\('abenitab_key.htm'\)), the order of the duplicate lines in relation to these keys is determined by the insertion order of the individual lines. In the case of secondary table keys, this occurs during the [lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry").

If there is a conflict with the existing unique primary table key, no line is inserted. If a key access occurs, sy-subrc is set to 4. In an index access, however, an uncatchable exception is raised. In the case of a conflict with a unique secondary table key, a catchable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.

Hints

-   When inserting using the table key, incompatible work areas can be converted to the line type using the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)).
-   Specifying a [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") for wa is usually only useful for elementary line types.
-   Outside of classes, an [obsolete short form](javascript:call_link\('abenitab_short_forms.htm'\)) is possible where wa INTO can be omitted if the internal table has an identically named [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") itab. The statement then uses the header line as the work area implicitly.

Example

Insertion of a structure constructed using the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) into an internal table.

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid.
INSERT VALUE #( carrid   = 'XXX'
                carrname = 'yyyyyyyyy'
                currcode = 'ZZ'
                url      = '...' ) INTO TABLE itab.

Alternative 2   

... INITIAL LINE

Effect

A new line is created in which every component contains its type-dependent [initial value](javascript:call_link\('abenbuilt_in_types_complete.htm'\)).

Example

Insertion of an initial line that is simultaneously linked to a field symbol using the addition [ASSIGNING](javascript:call_link\('abapinsert_itab_result.htm'\)). This means that the initial line can be processed directly.

DATA itab TYPE TABLE OF spfli.
FIELD-SYMBOLS <line> LIKE LINE OF itab.
INSERT INITIAL LINE INTO itab INDEX 1 ASSIGNING <line>.
<line>-carrid = '...'.
...

Alternative 3   

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY keyname*\]*

Effect

The lines of an internal table jtab are appended as a block. jtab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The line types of itab and jtab must be compatible when inserting using the table key and convertible when inserting using the index.

The lines to be inserted are taken sequentially from the table jtab. The order in which the lines are taken is the same as for the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) and can also be affected by specifying a table key [keyname](javascript:call_link\('abenkeyname.htm'\)) after USING KEY. The additions FROM idx1 and TO idx2 have the same syntax and effect as for [LOOP](javascript:call_link\('abaploop_at_itab_cond.htm'\)) with respect to jtab. STEP n has the same syntax and effect as for [LOOP](javascript:call_link\('abaploop_at_itab_cond.htm'\)) with the exception that the value of n must be positive.

When inserting lines as a block into an internal table with non-unique [primary table keys](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"), the order of the duplicate lines in relation to this primary key is preserved. This does not apply to [secondary keys](javascript:call_link\('abensecondary_key_glosry.htm'\) "Glossary Entry").

-   If there is already a duplicate entry in a sorted target table, the duplicates of the source block are inserted in their original order in front of the first duplicate in the target table.
-   When inserting in standard tables, however, INSERT always works like the statement [APPEND](javascript:call_link\('abapappend.htm'\)) and the lines are appended in their original order after the last line as in the addition [LINES OF](javascript:call_link\('abapappend_linespec.htm'\)).

If there is a conflict with an existing unique table key, a catchable exception is raised when inserting multiple lines from an internal table. If a conversion error occurs when lines are inserted, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead.

Hint

When an internal table is constructed, the constructor operators [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) and [VALUE](javascript:call_link\('abenconstructor_expression_new.htm'\)) can also insert multiple lines from a table into the target table using [LINES OF](javascript:call_link\('abennew_constructor_params_lspc.htm'\)).

Example

Insertion of the lines of an internal table itab into the same table. The lines are inserted in front of the existing first line and in ascending order due to the specification of the sorted secondary key skey being specified.

DATA itab TYPE TABLE OF i
          WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( 11 - i ) ).
INSERT LINES OF itab USING KEY skey INTO itab INDEX 1.
cl\_demo\_output=>display( itab ).

Example

Insertion of the lines of an internal table itab into the same table, defined by FROM, TO, and STEP. The lines are inserted in front of the existing first line and in ascending order due to the specification of the sorted secondary key skey being specified.

DATA itab TYPE TABLE OF i
          WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
itab = VALUE #( FOR i = 1 UNTIL i > 5 ( 6 - i ) ).
INSERT LINES OF itab FROM 1 TO 5 STEP 2
  USING KEY skey INTO itab INDEX 1.
cl\_demo\_output=>display( itab ).
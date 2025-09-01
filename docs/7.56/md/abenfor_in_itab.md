  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) → 

FOR ... IN itab

Syntax

... FOR wa*|*<fs> IN itab *\[*INDEX INTO idx*\]* *\[* [cond](javascript:call_link\('abenfor_cond.htm'\))*\]* *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*  ...

Addition:

[... INDEX INTO idx](#!ABAP_ONE_ADD@1@)

Effect

This variant of an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") using [FOR](javascript:call_link\('abenfor_itab.htm'\)) evaluates an internal table itab sequentially, like a [line variant](javascript:call_link\('abaploop_at_itab.htm'\)) of a [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)). itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). As in [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), the order of the lines read depends on the table category or a key specified in [cond](javascript:call_link\('abenfor_cond.htm'\)).

[cond1](javascript:call_link\('abenfor_cond.htm'\)) can be used to set conditions for the evaluation. For each read line, the result is either assigned to a local work area wa1 or to a field symbol <fs>. The work area or the field symbol is declared implicitly with the line type of the internal table and bound locally to the FOR expression as a subexpression of the entire constructor expression. The same applies to the namespace and visibility as to the helper fields declared in [LET expressions](javascript:call_link\('abaplet.htm'\)). After the FOR expression, the work area or the field symbol can either be used in further subexpressions or to construct the result of a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") or [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry").

Hints

-   Instead of using directly specified internal tables itab, this variant of FOR expressions can also be created using [mesh paths](javascript:call_link\('abenmesh_for.htm'\)), where FOR expressions from both categories can be used together in the same constructor expression.
-   Changes to the content of the internal table specified after IN within the FOR expression can only be made using method calls. Deleting or replacing the table completely always produces a runtime error.
-   As in [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), there is no addition for reversing the order in which the lines are read. A conditional iteration must be used instead (see the [executable example](javascript:call_link\('abeninverse_itab_for_abexa.htm'\))).

Example

Construction of an internal table flights in a table iteration with FOR with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) ([table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry")). The lines of the internal table are merged from the content of two existing internal tables scarr\_tab and spfli\_tab.

SELECT carrid, carrname
       FROM scarr
       INTO TABLE @DATA(scarr\_tab).
SELECT carrid, connid, cityfrom, cityto
       FROM spfli
       ORDER BY carrid, connid, cityfrom, cityto
       INTO TABLE @DATA(spfli\_tab).
TYPES:
  BEGIN OF flight,
    carrier     TYPE scarr-carrname,
    number      TYPE spfli-connid,
    departure   TYPE spfli-cityfrom,
    destination TYPE spfli-cityto,
  END OF flight,
  flights TYPE TABLE OF flight WITH EMPTY KEY.
DATA(flights) =
  VALUE flights( FOR <fs> IN spfli\_tab
    ( carrier     = VALUE #(
                      scarr\_tab\[ carrid = <fs>-carrid \]-carrname
                      DEFAULT '???' )
      number      = <fs>-connid
      departure   = <fs>-cityfrom
      destination = <fs>-cityto ) ).
cl\_demo\_output=>display( flights ).

Executable Examples

-   [Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\))
-   [Examples of Table Reductions](javascript:call_link\('abentable_reductions_abexas.htm'\))

Addition   

... INDEX INTO idx

Effect

For each read line of the associated FOR expression, this addition sets the helper variable idx to the value to which the system field sy-tabix would be set in a corresponding [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)). The helper variable idx is declared implicitly with the type i and bound locally to the FOR expression as a subexpression of the entire constructor expression. The same applies to the namespace and visibility as to the helper fields declared in [LET expressions](javascript:call_link\('abaplet.htm'\)).

Example

Construction of an internal table carriers from an existing internal table scarr\_tab. The first column is provided with the line index of the existing table.

SELECT carrid, carrname
       FROM scarr
       INTO TABLE @DATA(scarr\_tab).
TYPES:
  columns LIKE LINE OF scarr\_tab,
  BEGIN OF carrier,
    no TYPE i.
    INCLUDE TYPE columns.
TYPES:
  END OF carrier,
  carriers TYPE TABLE OF carrier WITH EMPTY KEY.
DATA(carriers) =
  VALUE carriers( FOR wa IN scarr\_tab INDEX INTO i
    ( no = i carrid = wa-carrid carrname = wa-carrname ) ).
cl\_demo\_output=>display( carriers ).
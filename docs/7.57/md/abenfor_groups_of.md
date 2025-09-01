  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FOR GROUPS ... OF, ABENFOR_GROUPS_OF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

FOR GROUPS ... OF

Syntax

... FOR GROUPS *\[*group*|*<group>*\]* OF wa*|*<fs> IN itab
        *\[*INDEX INTO idx*\]* *\[*[cond](javascript:call_link\('abenfor_cond.htm'\))*\]*
        GROUP BY [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\))
        *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
        *\[*WITHOUT MEMBERS*\]*
        *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* ...

Addition:

[... INDEX INTO idx](#!ABAP_ONE_ADD@1@)

Effect

This variant of an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") with [FOR](javascript:call_link\('abenfor_itab.htm'\)) evaluates an internal table itab in the same way as a [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)) with the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) in two phases:

-   Grouping of all lines that meet the condition in [cond](javascript:call_link\('abenfor_cond.htm'\)) by the group key specified in [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)). The same applies to group\_key as in [LOOP AT ...GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)). In this phase, each line read is either written to the local work area wa or assigned to the local field symbol <fs> and can then be evaluated when the group key is constructed.
-   Evaluation of the groups. Specifying group or <group> (optional) results in the [group key binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)) in which the current group key is written to the local data object group or assigned to the local field symbol <group>. If group or <group> is not specified, the [representative binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)) applies, in which the first line of a group is written to the local work area wa or assigned to the local field symbol <fs>. In the group key binding, wa or <fs> are initial after the FOR expression.

itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The same applies to the additions ASCENDING, DESCENDING, and WITHOUT MEMBERS as in [LOOP AT ... GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)). In particular, WITHOUT MEMBERS can be specified only if a group key binding is defined after GROUPS by specifying group or <group>.

Depending on the type of binding, the work area wa or group or the field symbol <fs> or <group> after the FOR expression can either be used in further subexpressions or to construct the result of a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") or [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry"). In particular, it can be specified in the expression [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)) to evaluate the members of the current group.

Hint

If a constructor expression contains a FOR expression with group key binding and the group key is to be used as the result of the constructor expression, a suitable data type or a data object with this type must exist for this expression explicitly. It is not possible to derive this type here using an inline declaration as in [LOOP AT](javascript:call_link\('abaploop_at_itab_group_by.htm'\)).

Example

Display of all values of the column carrid that occur in spfli. The result of the [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") is a single-column internal table that contains all group key values. The FOR loop works with a group key binding. Here, each group key is assigned to the local data object carrier.

SELECT \* FROM spfli INTO TABLE @FINAL(spfli).
TYPES group\_keys TYPE STANDARD TABLE OF spfli-carrid WITH EMPTY KEY.
cl\_demo\_output=>display(
  VALUE group\_keys(
    FOR GROUPS carrier OF wa IN spfli
    GROUP BY wa-carrid
    ASCENDING
    WITHOUT MEMBERS
    ( carrier ) ) ).

Addition   

... INDEX INTO idx

Effect

For each evaluated group, this addition sets the helper variable idx as follows:

-   In the case of [representative bindings](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)), to the value that would be set by the addition INDEX INTO in evaluations using [FOR ... IN itab](javascript:call_link\('abenfor_in_itab.htm'\)) for the representative line.
-   In the case of [group key bindings](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)), the groups are counted from the value 1.

The same applies to the local data object idx as in the variant [FOR ... IN itab](javascript:call_link\('abenfor_in_itab.htm'\)).

idx cannot be addressed in [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)).

Example

Grouping and sorting of an internal table with random numbers by the numbers and sorts it. The differences between the group number in i and the random number demonstrate the deviation from the uniform distribution.

DATA itab TYPE TABLE OF i WITH NON-UNIQUE KEY table\_line.
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                         min  = 1
                                         max  = 10 ).
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( rnd->get\_next( ) ) ).
DATA jtab LIKE itab.
jtab = VALUE #( FOR GROUPS <fs> OF wa IN itab
                    INDEX INTO i
                    GROUP BY wa
                    ASCENDING
                ( i - <fs> ) ).
cl\_demo\_output=>display( jtab ).
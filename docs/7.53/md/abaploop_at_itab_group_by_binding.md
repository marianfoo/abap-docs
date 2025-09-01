  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) → 

LOOP AT itab - group\_result

Syntax

... *{* *}*
  *|* *{*INTO group*}**|**{*ASSIGNING <group>*}**|**{*REFERENCE INTO group\_ref*}* ...

Alternatives:

[1\. ... *{* *}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... *{*INTO group*}**|**{*ASSIGNING <group>*}**|**{*REFERENCE INTO group\_ref*}*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Defines the output behavior of the [group loop](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) in a [grouping](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) of an internal table in a LOOP. The output behavior defines the following:

-   A data object or field symbol whose content is accessed in the group loop and which can also be passed to called procedures.
    
-   A name for the group which can only be used within the current group loop (and loops nested here) in the statement [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)) or in an expression [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)) for specifying a group.
    

Alternative 1

... *{* *}*

Effect

Representative binding. If nothing is specified for the output behavior group\_result, the output behavior is determined for the table rows using the addition [result](javascript:call_link\('abaploop_at_itab_result.htm'\)). In each loop pass, the first row of the current group is assigned as a representative of its group to the data object or field symbol defined there. The representative is bound to the current group and the group can be addressed using the name of the representative in the statement [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)) or the expression [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)).

If the representative binding is used,

-   the addition [WITHOUT MEMBERS](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) is not possible, since there would be no assignment of the representative to its group in this case,
    
-   no additional components for [GROUP SIZE](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) and [GROUP INDEX](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) can be created for a structured group key, since it is impossible to access these components in this case.
    

Outside of the group loop, the representative is not bound to the group and cannot be used to specify it in [member loops](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry"). This applies in particular to procedures called from the group loop.

Note

If a representative is bound to the current group, the associated group key in cannot be addressed in the group loop.

Example

The group key in the following example is a structure with two components key1 and key2 to which the columns key1 and key2 respectively are assigned to each row of the internal table itab in the grouping. This produces three groups with the group key values (a, a), (a, b), and (b, a). Accordingly, the group loop is passed three times and the first, second, and sixth row are assigned to the field symbol <wa> as representatives. See also the [executable example](javascript:call_link\('abenloop_at_group_abexa.htm'\)) of output behavior.

TYPES:
  BEGIN OF struct,
    key1 TYPE string,
    key2 TYPE string,
    col      TYPE i,
  END OF struct,
  itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY.
DATA(itab) = VALUE itab(
  ( key1 = \`a\` key2 = \`a\` col = 1 )
  ( key1 = \`a\` key2 = \`b\` col = 2 )
  ( key1 = \`a\` key2 = \`a\` col = 3 )
  ( key1 = \`a\` key2 = \`a\` col = 4 )
  ( key1 = \`a\` key2 = \`b\` col = 5 )
  ( key1 = \`b\` key2 = \`a\` col = 6 )
  ( key1 = \`b\` key2 = \`a\` col = 7 )  ).
LOOP AT itab ASSIGNING FIELD-SYMBOL(<wa>)
             GROUP BY ( key1 = <wa>-key1 key2 = <wa>-key2 ).
  cl\_demo\_output=>write( <wa> ).
ENDLOOP.
cl\_demo\_output=>display( ).

Alternative 2

... *{*INTO group*}**|**{*ASSIGNING <group>*}**|**{*REFERENCE INTO group\_ref*}*

Effect

Group key binding. If an explicit output behavior group\_result is specified, the group key of the current key is assigned to the data object or field symbol specified after INTO, ASSIGNING, or REFERENCE INTO in every loop pass. Here, the same syntax and semantics apply as in the output behavior [result](javascript:call_link\('abaploop_at_itab_result.htm'\)). The data type of the specified data object or field symbol must match the data type of the group key. If the group key is constructed as a new structure in the [group key expression](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)), the row type must be a structure whose components exist with the same name and in the same order as in the group key.

The specified data object or field symbol is bound to the current group and the group can be addressed using its name in the statement [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)) or the expression [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)). Outside of the group loop, the data object or field symbol is not bound to the group and cannot be used to specify it in [member loops](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry"). This applies in particular to procedures called from the group loop. When the group loop is closed, the grouping is canceled and a specified data object is initialized or a field symbol no longer has a group key assigned to it.

The data object or field symbol of the output behavior defined in [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) for the table rows can still be addressed in the group loop but it is either initial after the LOOP statement or does not point to a row.

Notes

-   To specify a type-friendly data object or field symbol as a target for the group key, it is best to use an [inline declaration](javascript:call_link\('abeninline_declarations.htm'\)). This can always be done here.
    
-   The output behavior [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) for the table rows is still needed for the construction of the group key [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) if group\_result is specified explicitly.
    
-   Unlike in [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) for table rows, no addition CASTING can be specified after ASSIGNING.
    

Example

Like in the previous example, however the groups are not assigned to an implicit representative here and are assigned to the explicitly defined target area for the group key instead. In each of the three loop passes, the reference variable group\_key declared inline points to the structured group key (a, a), (a, b), and (b, a) in question. See also the [executable example](javascript:call_link\('abenloop_at_group_abexa.htm'\)) of output behavior.

TYPES:
  BEGIN OF struct,
    key1 TYPE string,
    key2 TYPE string,
    col      TYPE i,
  END OF struct,
  itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY.
DATA(itab) = VALUE itab(
  ( key1 = \`a\` key2 = \`a\` col = 1 )
  ( key1 = \`a\` key2 = \`b\` col = 2 )
  ( key1 = \`a\` key2 = \`a\` col = 3 )
  ( key1 = \`a\` key2 = \`a\` col = 4 )
  ( key1 = \`a\` key2 = \`b\` col = 5 )
  ( key1 = \`b\` key2 = \`a\` col = 6 )
  ( key1 = \`b\` key2 = \`a\` col = 7 )  ).
LOOP AT itab ASSIGNING FIELD-SYMBOL(<wa>)
             GROUP BY ( key1 = <wa>-key1 key2 = <wa>-key2 )
             WITHOUT MEMBERS
             REFERENCE INTO DATA(group\_key).
  cl\_demo\_output=>write( group\_key->\* ).
ENDLOOP.
cl\_demo\_output=>display( ).
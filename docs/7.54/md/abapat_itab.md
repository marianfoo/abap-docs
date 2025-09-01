  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - Basic Form](javascript:call_link\('abaploop_at_itab.htm'\)) → 

AT - Group Level Processing

[Quick Reference](javascript:call_link\('abapat_shortref.htm'\))

Syntax

[LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)) [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) *\[*[cond](javascript:call_link\('abaploop_at_itab_cond.htm'\))*\]*.
  *\[*AT FIRST.
     ...
   ENDAT.*\]*
    *\[*AT NEW [comp1](javascript:call_link\('abenitab_components.htm'\)).
       ...
     ENDAT.
       *\[*AT NEW [comp2](javascript:call_link\('abenitab_components.htm'\)).
         ...
       ENDAT.
         *\[*...*\]**\]**\]*
           *\[* ... *\]*
       *\[**\[**\[*...*\]*
       AT END OF [comp2](javascript:call_link\('abenitab_components.htm'\)).
         ...
       ENDAT.*\]*
     AT END OF [comp1](javascript:call_link\('abenitab_components.htm'\)).
       ...
     ENDAT.*\]*
  *\[*AT LAST.
     ...
  ENDAT.*\]*
ENDLOOP.

Extras:

[1\. ...  FIRST](#!ABAP_ADDITION_1@1@)
[2\. ... *{*NEW*}**|**{*END OF*}* compi](#!ABAP_ADDITION_2@2@)
[3\. ...  LAST](#!ABAP_ADDITION_3@3@)

Effect

The statement block of a [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) without the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) can contain control structures for [group level processing](javascript:call_link\('abencontrol_level_processin_glosry.htm'\) "Glossary Entry"). The corresponding control statement is AT. The statements AT and ENDAT define statement blocks that are executed at [group breaks](javascript:call_link\('abencontrol_break_glosry.htm'\) "Glossary Entry"), that is in the transition of a [group level](javascript:call_link\('abencontrol_level_glosry.htm'\) "Glossary Entry") to another group level. The additions of the statements AT define the criteria for a group break and hence the group levels. Group breaks between group levels are a result of the row structure and the processing order in which the LOOP reads the rows of the internal table. Within the statement blocks, the statement [SUM](javascript:call_link\('abapsum.htm'\)) can be specified to total the numeric components of a group level.

Apart from the special variants AT FIRST and AT LAST, group levels are defined using the variants AT NEW AT END OF and the sequence of rows (in accordance with the processing order of the loop) in the internal table. These are the rows that have the same content in a group key defined in their initial parts. Here, all rows of the internal table are respected without evaluating any restricting conditions [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)).

It is possible, from a syntax point of view, to arrange AT control structures in any order and to nest them, however effective group level processing is usually only achieved by the arrangement above. Here, the control structures are specified in accordance with the arrangement of the components in the group key and are not nested.

The statement blocks within the AT\-ENDAT control structures are listed if an appropriate group break is made in the current table line. Statements in the LOOP\-ENDLOOP control structure that are not executed within an AT\-ENDAT control structure are executed in each pass of the loop. If a table row with a group break is not read due to a restricting condition [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)), the statement block in question is not executed.

The following rules must be followed for effective group level processing:

-   A table key specified in LOOP in [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)) must be chosen so that it produces the required processing order of the imported rows.
    
-   No restricting condition [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)) should be specified. If a condition like this is specified, it should select consecutive row groups (including the first row in the group) where the group break takes place.
    
-   The internal table cannot be modified within the LOOP loop.
    
-   A work area wa specified in the LOOP statement after the addition INTO must be [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the row type of the table.
    
-   A field symbol <fs> specified in the statement LOOP after the addition ASSIGNING must be typed with the row type of the table.
    
-   The content of a work area [wa](javascript:call_link\('abaploop_at_itab.htm'\)) specified in the statement [LOOP](javascript:call_link\('abaploop_at_itab_result.htm'\)) after the addition INTO cannot be modified.
    

If the addition [INTO wa](javascript:call_link\('abaploop_at_itab_result.htm'\)) is used in the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), the content of wa is overwritten (depending on the respective group level) when the AT\-ENDAT control structure is entered, and is reset to the content of the current row when the control structure is exited. When the additions [ASSIGNING](javascript:call_link\('abaploop_at_itab_result.htm'\)) and [REFERENCE INTO](javascript:call_link\('abaploop_at_itab_result.htm'\)) are used, the referenced table rows are not modified when entering and exiting the AT\-ENDAT control structure.

Notes

-   The most common case is when the internal table is sorted exactly by the order of the components of its row type, by the first component first, then the second component, and so on. In this case, group level processing can also be expressed using a grouping with the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)).
    
-   If possible, the use of the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) is recommended, since the grouping is not determined by the structure of the rows and the processing order in this case.
    
-   Group level processing with the statement AT is not possible in LOOPs across row groups with the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)), including member loops using [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)).
    
-   The group level processing described here can produce unexpected results when a restricting condition [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)) is used, which means that extended syntax check messages can occur.
    

Executable Examples

[Group Level Processing](javascript:call_link\('abenat_itab_abexas.htm'\))

Addition 1

... FIRST

Effect

The group level is defined by the first row of the internal table. The group break takes place when this row is read. In the group level AT FIRST, the current group key does not contain any components.

If the addition [INTO wa](javascript:call_link\('abaploop_at_itab_result.htm'\)) is used in the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), all character-like components of the work area wa are filled with "\*" when the control structure AT FIRST is entered and all other components are set to their initial value. In the case of an elementary row type, this applies to the whole work area. When the AT\-ENDAT control structure is exited, the content of the current table row is reassigned to the work area wa.

Note

If the first row of the internal table is not read due to a restricting condition [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)), the statement block of the control structure AT FIRST is not executed.

Example

Displays a header and the first row of an internal table at the group level AT FIRST.

DATA itab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE itab.
DATA(out) = cl\_demo\_output=>new( ).
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  AT FIRST.
    out->next\_section( 'First' ).
    out->write( <fs> ).
  ENDAT.
ENDLOOP.
out->display( ).

Addition 2

... *{*NEW*}**|**{*END OF*}* compi

Effect

Group levels are defined by the beginning or end of a group of rows with the same content in the component compi (where i = 1, 2, and so on) and in the components on the left of compi. The content of these components determines the group key. The group breaks take place when the content of the component compi or another component on the left of compi changes.

The compi components can be specified as described in [Specification of Components](javascript:call_link\('abenitab_components.htm'\)), with the limitation that access to data objects using references is not possible here. The following is therefore not possible:

-   Specifying data objects using data references
    
-   Specifying attributes of objects using object references
    

Otherwise, the specified components can have any data type. The relevant [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) apply to the evaluation. In the case of an elementary row type, only table\_line can be specified as the group key.

If the addition [INTO wa](javascript:call_link\('abaploop_at_itab_result.htm'\)) is used in the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), the content of wa is modified as follows when the AT\-ENDAT control structure is entered:

-   The components of the current group key remain unchanged.
    
-   All components with a character-like [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data type on the right of the current control key are set to the character "\*" in every place.
    
-   All the other components to the right of the current group key are set to their [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry").
    

In the case of an elementary row type, the whole work area corresponds to the current group key and does not change. When the AT\-ENDAT control structure is exited, the content of the current table row is reassigned to the work area wa.

Notes

-   Group levels defined in this way consist of the contiguous rows of the internal table that have the same content in an initial part.
    
-   If the first or last row of a row group is not read due to a restricting condition [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)), the statement block of the control structure AT NEW or AT END OF is not executed.
    
-   An [obsolete variant](javascript:call_link\('abapat_itab_obsolete.htm'\)) allows field symbols to also be specified, outside of classes compi.
    

Example

Displays the carrid column as a header for the chained content of the associated flight numbers.

DATA itab TYPE SORTED TABLE OF spfli
               WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE itab.
DATA connids TYPE string.
DATA(out) = cl\_demo\_output=>new( ).
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  AT NEW carrid.
    out->next\_section( <fs>-carrid ).
  ENDAT.
  connids = connids && \` \` && <fs>-connid.
  AT END OF carrid.
    out->write( connids ).
    CLEAR connids.
  ENDAT.
ENDLOOP.
out->display( ).

Example

The first row of the first row group is not read due to the addition FROM 2, which means the associated statement block after AT NEW table\_line is not executed. The program therefore produces a message from the extended program check.

DATA itab TYPE TABLE OF string WITH EMPTY KEY.
itab = VALUE #( ( \`AA\` ) ( \`AA\` ) ( \`AA\` )
                ( \`BB\` ) ( \`BB\` ) ( \`BB\` ) ).
DATA(out) = cl\_demo\_output=>new( ).
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>) FROM 2.
  AT NEW table\_line.
    out->write( <fs> ).
  ENDAT.
ENDLOOP.
out->display( ).

Addition 3

... LAST

Effect

The group level is defined by the last row of the internal table. The group break takes place when this row is read. In the group level AT LAST, the current group key does not contain any components.

If the addition [INTO wa](javascript:call_link\('abaploop_at_itab_result.htm'\)) is used in the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), all character-like components of the work area wa are filled with "\*" when the control structure AT LAST is entered and all other components are set to their initial value. In the case of an elementary row type, this applies to the whole work area. When the AT\-ENDAT control structure is exited, the content of the current table row is reassigned to the work area wa.

Note

If the last row of the internal table is not read due to a restricting condition [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)), the statement block of the control structure AT LAST is not executed.

Example

Displays cumulated content during the processing of the last row.

DATA itab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE itab.
DATA carrids TYPE string.
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  carrids = carrids && \` \` && <fs>-carrid.
  AT LAST.
    cl\_demo\_output=>display( carrids ).
  ENDAT.
ENDLOOP.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Invalid substring access when the group break criterion is specified dynamically.
    Runtime error: AT\_BAD\_PARTIAL\_FIELD\_ACCESS
    
-   Cause: The group break criterion is specified dynamically using the field symbol and the field symbol does not point to the LOOP output range.
    Runtime error: AT\_ITAB\_FIELD\_INVALID
    
-   Cause: The group break criterion is specified dynamically using (name) and the name field does not contain a valid substring name.
    Runtime error: ITAB\_ILLEGAL\_COMPONENT
    
-   Cause: Overflow of totals with SUM.
    Runtime error: SUM\_OVERFLOW
    

Continue
[SUM](javascript:call_link\('abapsum.htm'\))
[ENDAT](javascript:call_link\('abapendat.htm'\))
[Examples of Control Level Processing](javascript:call_link\('abenat_itab_abexas.htm'\))
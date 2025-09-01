  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  L

LOOP AT itab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_variants.htm)

Syntax

LOOP AT itab *{* *{* INTO wa *}*
             *|* *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
             *|* *{* REFERENCE INTO dref *}*
             *|* *{* TRANSPORTING NO FIELDS *}* *}*
             *\[* USING KEY key\_name*|*(name) *\]*
             *\[* FROM idx1*\]* *\[*TO idx2*\]**\[*WHERE [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm)*|*(cond\_syntax) *\]*
             *\[* GROUP BY key *|* ( key1 = dobj1 key2 = dobj2 ...
                                *\[*gs = GROUP SIZE*\]* *\[*gi = GROUP INDEX*\]* )
                 *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
                 *\[*WITHOUT MEMBERS*\]*
                *\[* *{*INTO group*}*
                *|* *{*ASSIGNING <group>*}*
                *|* *{*REFERENCE INTO group\_ref*}* *\]* *\]*.
  ...
ENDLOOP.

Effect

Reads an internal table itab in a loop. A restricted [variant](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_loop.htm) works with [mesh paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Additions

-   [INTO wa](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_result.htm)
    Assigns the read line to a work area wa.
    

-   [ASSIGNING <fs> *\[*CASTING*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_result.htm)
    Assigns the line read from internal table to a field symbol <fs>, where casting can be performed.
    

-   [REFERENCE INTO dref](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_result.htm)
    Assigns a reference to the line read from internal table to a reference variable dref.
    

-   [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_result.htm)
    Does not assign the read line.
    

-   [USING KEY key\_name*|*(name)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_cond.htm)
    Statically or dynamically specifies a (secondary) table key that determines the processing order.
    

-   [*\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*WHERE log\_exp*|*(cond\_syntax)*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_cond.htm)
    Restricts the lines to be read, by declaring a lower number and upper number (idx1 and idx2 in the relevant table index), or by declaring a static condition log\_exp or a dynamic condition in cond\_syntax.
    

-   [GROUP BY ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm)
    Groups the lines in the internal table by a [group key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_key.htm) and executes a loop across the groups. [ASCENDING*|*DESCENDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) sorts the groups; [WITHOUT MEMBERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) suppresses the grouping variant for the table lines; [INTO GROUP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_binding.htm), [ASSIGNING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_binding.htm), and [REFERENCE INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_binding.htm) define the output behavior of the group loop.
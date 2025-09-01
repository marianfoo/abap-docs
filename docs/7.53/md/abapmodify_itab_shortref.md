  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

MODIFY itab - Quick reference

[Reference](javascript:call_link\('abapmodify_itab.htm'\))

Syntax

MODIFY *{* *{* *{* *{*TABLE itab*}**|**{*itab INDEX idx*}*
             *\[*USING KEY key\_name*|*(name)*\]* *}*
         *|* *{* itab *\[*USING KEY loop\_key*\]* *}*
           FROM wa
           *\[*TRANSPORTING comp1 comp2 ...*\]*
           *\[**{*ASSIGNING <fs> *\[*CASTING*\]**}**|**{*REFERENCE INTO dref*}**\]* *}*
       *|* *{*itab FROM wa *\[*USING KEY key\_name*|*(name)*\]*
                       TRANSPORTING comp1 comp2 ...
                       WHERE [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\))*|*(cond\_syntax)*}* *}*.

Effect

Changes rows in internal tables. A restricted [variant](javascript:call_link\('abenmesh_modify.htm'\)) works with[mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Additions

-   [TABLE itab](javascript:call_link\('abapmodify_itab_single.htm'\))
    Specifies a row to be changed by matching the key values of the wa work area.
    
-   [itab INDEX idx](javascript:call_link\('abapmodify_itab_single.htm'\))
    Specifies a row to be changed by specifying a row number idx of a table index.
    
-   [itab *\[*USING KEY loop\_key*\]*](javascript:call_link\('abapmodify_itab_single.htm'\))
    Specifies the rows in a loop to be changed using the current rows.
    
-   [FROM wa](javascript:call_link\('abapmodify_itab_multiple.htm'\))
    Specifies the new content in a wa work area.
    
-   [TRANSPORTING comp1 comp2 ...](javascript:call_link\('abapmodify_itab_single.htm'\))
    Specifies the components comp1, comp2, ... to be changed.
    
-   [ASSIGNING <fs> *\[*CASTING*\]*](javascript:call_link\('abapmodify_itab_result.htm'\))
    Assigns a changed single row to a field symbol <fs> for casting.
    
-   [REFERENCE INTO dref](javascript:call_link\('abapmodify_itab_result.htm'\))
    Assigns the reference to a changed single row to a reference variabledref.
    
-   [WHERE log\_exp*|*(cond\_syntax)](javascript:call_link\('abapmodify_itab_multiple.htm'\))
    Specifies the rows to be changed by specifying a static condition log\_exp or a dynamic condition in cond\_syntax.
    
-   [USING KEY key\_name*|*(name)](javascript:call_link\('abapmodify_itab.htm'\))
    Specifies (statically or dynamically) a secondary table key to search for the rows to be changed.
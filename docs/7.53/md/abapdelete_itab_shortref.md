  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

DELETE itab - Quick reference

[Reference](javascript:call_link\('abapdelete_itab.htm'\))

Syntax

DELETE *{* *{* *{*TABLE itab
            *{**{*FROM wa *\[*USING KEY key\_name*|*(name)*\]**}*
            *|**{*WITH TABLE KEY *\[*key\_name*|*(name) COMPONENTS*\]*
                             *{*comp\_name1*|*(name1)*}* = dobj1
                             *{*comp\_name2*|*(name2)*}* = dobj2
                             ... *}**}**}*
         *|* *{*itab INDEX idx *\[*USING KEY key\_name*|*(name)*\]**}*
         *|* *{*itab *\[*USING KEY loop\_key*\]**}* *}*
       *|* *{*itab *\[*USING KEY key\_name*|*(name)*\]*
               *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*WHERE [log\_exp*\]*](javascript:call_link\('abenlog_exp_shortref.htm'\))*|*(cond\_syntax)*}*
       *|* *{*ADJACENT DUPLICATES FROM itab
           *\[* USING KEY key\_name*|*(name) *\]*
           *\[*COMPARING comp1 comp2 ...*|**{*ALL FIELDS*}**\]**}* *}*.

Effect

Deletes rows from an internal table itab. A restricted [variant](javascript:call_link\('abenmesh_delete.htm'\)) works with[mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Additions

-   [TABLE itab FROM wa](javascript:call_link\('abapdelete_itab_key.htm'\))
    Specifies a row to be deleted. The row matches the key values of a work area wa.
    
-   [TABLE itab WITH TABLE KEY *{*comp\_name1*|*(name1)*}* = dobj1 *{*comp\_name2*|*(name2)*}* = dobj2 ...](javascript:call_link\('abapdelete_itab_key.htm'\))
    Specifies a row to be deleted by specifying components of the primary table key statically of dynamically.
    
-   [itab INDEX idx](javascript:call_link\('abapdelete_itab_line.htm'\))
    Specifies a row to be deleted by specifying the row number of a table index idx.
    
-   [itab *\[*USING KEY loop\_key*\]*](javascript:call_link\('abapdelete_itab_line.htm'\))
    Defines the rows to be deleted in a loop across the current row.
    
-   [itab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*WHERE log\_exp*|*(cond\_syntax)*\]*](javascript:call_link\('abapdelete_itab_lines.htm'\))
    Specifies multiple rows to be deleted by specifying a lower and upper row number in a table index idx1 and idx2. These can be restricted by specifying a static condition log\_exp or a dynamic condition in cond\_syntax.
    
-   [ADJACENT DUPLICATES FROM itab *\[*COMPARING comp1 comp2 ...*|**{*ALL FIELDS*}**\]*](javascript:call_link\('abapdelete_duplicates.htm'\))
    Specifies adjacent identical rows. Using COMPARING, the relevant comparison components can be specified.
    
-   [KEY key\_name*|*(name)](javascript:call_link\('abapdelete_itab.htm'\))
    Specifies, statically or dynamically, a (secondary) table key that is used to search for the rows to be deleted.
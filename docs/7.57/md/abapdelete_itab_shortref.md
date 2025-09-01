  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DELETE itab, ABAPDELETE_ITAB_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

DELETE itab - Short Reference

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
               *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]**|**\[*WHERE [log\_exp*\]*](javascript:call_link\('abenlog_exp_shortref.htm'\))*|*(cond\_syntax)*}*
       *|* *{*ADJACENT DUPLICATES FROM itab
           *\[* USING KEY key\_name*|*(name) *\]*
           *\[*COMPARING comp1 comp2 ...*|**{*ALL FIELDS*}**\]**}* *}*.

Effect

Deletes lines from an internal table itab. A restricted [variant](javascript:call_link\('abenmesh_delete.htm'\)) works with [mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Additions   

-   [TABLE itab FROM wa](javascript:call_link\('abapdelete_itab_key.htm'\))
    Specifies a line to be deleted. The line matches the key values of a work area wa.
-   [TABLE itab WITH TABLE KEY *{*comp\_name1*|*(name1)*}* = dobj1 *{*comp\_name2*|*(name2)*}* = dobj2 ...](javascript:call_link\('abapdelete_itab_key.htm'\))
    Specifies a line to be deleted by specifying components of the primary table key statically of dynamically.
-   [itab INDEX idx](javascript:call_link\('abapdelete_itab_line.htm'\))
    Specifies a line to be deleted by specifying the line number of a table index idx.
-   [itab *\[*USING KEY loop\_key*\]*](javascript:call_link\('abapdelete_itab_line.htm'\))
    Defines the lines to be deleted in a loop across the current line.
-   [itab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]**|**\[*WHERE log\_exp*|*(cond\_syntax)*\]*](javascript:call_link\('abapdelete_itab_lines.htm'\))
    Specifies multiple lines to be deleted by specifying a lower and upper line number in a table index idx1 and idx2 and a step size n. These can be restricted by specifying a static condition log\_exp or a dynamic condition in cond\_syntax.
-   [ADJACENT DUPLICATES FROM itab *\[*COMPARING comp1 comp2 ...*|**{*ALL FIELDS*}**\]*](javascript:call_link\('abapdelete_duplicates.htm'\))
    Specifies adjacent identical lines. Using COMPARING, the relevant comparison components can be specified.
-   [KEY key\_name*|*(name)](javascript:call_link\('abapdelete_itab.htm'\))
    Specifies, statically or dynamically, a (secondary) table key that is used to search for the lines to be deleted.
  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20itab%2C%20ABAPDELETE_ITAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE itab - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab.htm)

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
               *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]**|**\[*WHERE [log\_exp*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlog_exp_shortref.htm)*|*(cond\_syntax)*}*
       *|* *{*ADJACENT DUPLICATES FROM itab
           *\[* USING KEY key\_name*|*(name) *\]*
           *\[*COMPARING comp1 comp2 ...*|**{*ALL FIELDS*}**\]**}* *}*.

Effect

Deletes lines from an internal table itab. A restricted [variant](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_delete.htm) works with [mesh paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Additions   

-   [TABLE itab FROM wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab_key.htm)
    Specifies a line to be deleted. The line matches the key values of a work area wa.
-   [TABLE itab WITH TABLE KEY *{*comp\_name1*|*(name1)*}* = dobj1 *{*comp\_name2*|*(name2)*}* = dobj2 ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab_key.htm)
    Specifies a line to be deleted by specifying components of the primary table key statically of dynamically.
-   [itab INDEX idx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab_line.htm)
    Specifies a line to be deleted by specifying the line number of a table index idx.
-   [itab *\[*USING KEY loop\_key*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab_line.htm)
    Defines the lines to be deleted in a loop across the current line.
-   [itab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]**|**\[*WHERE log\_exp*|*(cond\_syntax)*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab_lines.htm)
    Specifies multiple lines to be deleted by specifying a lower and upper line number in a table index idx1 and idx2 and a step size n. These can be restricted by specifying a static condition log\_exp or a dynamic condition in cond\_syntax.
-   [ADJACENT DUPLICATES FROM itab *\[*COMPARING comp1 comp2 ...*|**{*ALL FIELDS*}**\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_duplicates.htm)
    Specifies adjacent identical lines. Using COMPARING, the relevant comparison components can be specified.
-   [KEY key\_name*|*(name)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab.htm)
    Specifies, statically or dynamically, a (secondary) table key that is used to search for the lines to be deleted.
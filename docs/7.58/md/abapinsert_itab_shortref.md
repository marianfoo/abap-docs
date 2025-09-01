  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%20itab%2C%20ABAPINSERT_ITAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT itab - Short Reference

[Reference](javascript:call_link\('abapinsert_itab.htm'\))

Syntax

INSERT *{* wa
       *|* *{*INITIAL LINE*}*
       *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY key\_name*|*(name)*\]**}* *}*
  INTO *{* *{*TABLE itab*}*
       *|* *{*itab INDEX idx*}*
       *|* *{*itab*}* *}*
       *\[* *{*ASSIGNING <fs> *\[*CASTING*\]**}* *|* *{*REFERENCE INTO dref *}* *\]*.

Effect

Inserts rows into an internal table itab. A restricted [variant](javascript:call_link\('abenmesh_insert.htm'\)) works with [mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Additions   

-   [wa](javascript:call_link\('abapinsert_itab_linespec.htm'\))
    Inserts a work area wa.
-   [INITIAL LINE](javascript:call_link\('abapinsert_itab_linespec.htm'\))
    Inserts an initial line.
-   [LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY key\_name*|*(name)*\]*](javascript:call_link\('abapinsert_itab_linespec.htm'\))
    Inserts the rows of internal table jtab that were specified by indexes idx1 and idx2 and the step size n. The table key can be specified statically or dynamically.
-   [INTO TABLE itab](javascript:call_link\('abapinsert_itab_position.htm'\))
    Specifies the insertion position using the primary table key.
-   [INTO itab INDEX idx](javascript:call_link\('abapinsert_itab_position.htm'\))
    Specifies the insertion position using a table index idx.
-   [INTO itab](javascript:call_link\('abapinsert_itab_position.htm'\))
    Specifies the insertion position in a loop using the current line.
-   [ASSIGNING <fs> *\[*CASTING*\]*](javascript:call_link\('abapinsert_itab_result.htm'\))
    Assigns an inserted single line to a field symbol <fs>, where casting can be performed.
-   [REFERENCE INTO dref](javascript:call_link\('abapinsert_itab_result.htm'\))
    Assigns the reference (to an inserted single line) to a reference variable dref.
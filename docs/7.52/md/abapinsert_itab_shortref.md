  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

INSERT itab - Quick reference

[Reference](javascript:call_link\('abapinsert_itab.htm'\))

Syntax

INSERT *{* wa
       *|* *{*INITIAL LINE*}*
       *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY key\_name*|*(name)*\]**}* *}*
  INTO *{* *{*TABLE itab*}*
       *|* *{*itab INDEX idx*}*
       *|* *{*itab*}* *}*
       *\[* *{*ASSIGNING <fs> *\[*CASTING*\]**}* *|* *{*REFERENCE INTO dref *}* *\]*.

Effect

Inserts rows into an internal table itab. A restricted [variant](javascript:call_link\('abenmesh_insert.htm'\)) works with[mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Additions

-   [wa](javascript:call_link\('abapinsert_itab_linespec.htm'\))
    Inserts a work area wa.
    
-   [INITIAL LINE](javascript:call_link\('abapinsert_itab_linespec.htm'\))
    Inserts an initial row.
    
-   [LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY key\_name*|*(name)*\]*](javascript:call_link\('abapinsert_itab_linespec.htm'\))
    Inserts the rows of internal table jtab that were specified by indexes idx1 and idx2. The table key can be specified statically or dynamically.
    
-   [INTO TABLE itab](javascript:call_link\('abapinsert_itab_position.htm'\))
    Specifies the insertion position using the primary table key.
    
-   [INTO itab INDEX idx](javascript:call_link\('abapinsert_itab_position.htm'\))
    Specifies the insertion position using a table index idx.
    
-   [INTO itab](javascript:call_link\('abapinsert_itab_position.htm'\))
    Specifies the insertion position in a loop using the current row.
    
-   [ASSIGNING <fs> *\[*CASTING*\]*](javascript:call_link\('abapinsert_itab_result.htm'\))
    Assigns an inserted single row to a field symbol <fs>, where casting can be performed.
    
-   [REFERENCE INTO dref](javascript:call_link\('abapinsert_itab_result.htm'\))
    Assigns the reference (to an inserted single row) to a reference variable dref.
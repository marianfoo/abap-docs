  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  F

FETCH - Quick reference

[Reference](javascript:call_link\('abapfetch.htm'\))

Syntax

FETCH NEXT CURSOR dbcur
    *{* *{* INTO *{* *{**\[*CORRESPONDING FIELDS OF*\]* wa*}* *|* (dobj1, dobj2, ...) *}* *}*
    *|* *{* INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE itab
                       *\[*PACKAGE SIZE n*\]* *}* *}*
      *\[* EXTENDED RESULT @oref *\]*.

Effect

[ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement. Extracts rows from the results set of a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") opened using OPEN CURSOR.

Additions

-   [INTO wa](javascript:call_link\('abapinto_clause.htm'\))
    Reads a row and assigns it to a work area wa.
    
-   [INTO (dobj1, dobj2, ...)](javascript:call_link\('abapinto_clause.htm'\))
    Reads a row and assigns it to multiple data objects dobj1, dobj2, ...
    
-   [INTO*|*APPENDING TABLE itab](javascript:call_link\('abapinto_clause.htm'\))
    Reads multiple rows and assigns them to an internal table itab or attaches them to the table.
    
-   [CORRESPONDING FIELDS OF](javascript:call_link\('abapinto_clause.htm'\))
    Restricts the transport to identically named components of the work area wa or to the internal table itab.
    
-   [PACKAGE SIZE n](javascript:call_link\('abapinto_clause.htm'\))
    Passes the rows in packages of n rows to the internal table itab.
    
-   [EXTENDED RESULT @oref](javascript:call_link\('abapselect_extended_result.htm'\))
    Provides an extended result in a result object.
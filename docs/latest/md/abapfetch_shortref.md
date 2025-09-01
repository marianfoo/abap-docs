  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  F

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FETCH%2C%20ABAPFETCH_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FETCH - Short Reference

[Reference](javascript:call_link\('abapfetch.htm'\))

Syntax

FETCH NEXT CURSOR dbcur
    *{* *{* INTO *{* *{**\[*CORRESPONDING FIELDS OF*\]* wa*}* *|* (dobj1, dobj2, ...) *}* *}*
    *|* *{* INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE itab
                       *\[*PACKAGE SIZE n*\]* *}* *}*
      *\[* EXTENDED RESULT @oref *\]*.

Effect

[ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement. Extracts rows from the result set of a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") opened using OPEN CURSOR.

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
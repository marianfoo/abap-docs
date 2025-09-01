  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ TABLE dbtab, ABAPREAD_TABLE_DBTAB_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

READ TABLE dbtab - Short Reference

[Reference](javascript:call_link\('abapread_table_dbtab.htm'\))

Syntax

READ TABLE dbtab *\[*WITH KEY key*\]*
                 *\[*SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}**\]*
                 *\[*VERSION vers*\]*.

Effect

Obsolete: Reads a single row from a database table or view dbtab.

Additions   

-   WITH KEY key
    Determines the search key using the content of the data object key. Otherwise, the content of the [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") dbtab is used.
-   SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}*
    Determines the search mode in the database table.
-   VERSION vers
    Specifies a different database table in vers.
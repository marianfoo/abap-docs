  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%20AT%20dbtab%2C%20ABAPLOOP_AT_DBTAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP AT dbtab - Short Reference

[Reference](javascript:call_link\('abaploop_at_dbtab.htm'\))

Syntax

LOOP AT dbtab *\[*VERSION vers*\]*.
  ...
ENDLOOP.

Effect

Obsolete: Reads multiple rows of a database table or view dbtab in a loop. The content of the [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") dbtab is used as the search key.

Addition  

-   VERSION vers
    Specifies a different database table in vers.
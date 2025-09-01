  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

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
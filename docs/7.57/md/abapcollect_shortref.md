  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COLLECT, ABAPCOLLECT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

COLLECT - Short Reference

[Reference](javascript:call_link\('abapcollect.htm'\))

Syntax

COLLECT wa INTO itab *{* *\[*ASSIGNING <fs> *\[*CASTING*\]**\]*
                     *|* *\[*REFERENCE INTO dref*\]* *}*.

Effect

Inserts work areas wa as lines in an internal table itab. Here, the primary table key already exists for some lines and the values of the remaining components are added to the values of the existing lines.

Additions   

-   [ASSIGNING <fs> *\[*CASTING*\]*](javascript:call_link\('abapcollect_itab_result.htm'\))
    Assigns the inserted line to the field symbol <fs>. A [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") can be performed here.
-   [REFERENCE INTO dref](javascript:call_link\('abapcollect_itab_result.htm'\))
    The data reference in dref is set to the inserted line.
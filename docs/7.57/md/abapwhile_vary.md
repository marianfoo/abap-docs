  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Control Structures](javascript:call_link\('abenobsolete_control_structures.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WHILE, VARY, ABAPWHILE_VARY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

WHILE, VARY

[Short Reference](javascript:call_link\('abapwhile_shortref.htm'\))

Obsolete Syntax

WHILE ... VARY dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
         *\[*VARY ...*\]*.
  *\[*statement\_block*\]*
ENDWHILE.

Effect

The addition VARY and its addition RANGE have exactly the same effect on a [WHILE](javascript:call_link\('abapwhile.htm'\)) loop as the other obsolete additions [VARYING](javascript:call_link\('abapdo_varying.htm'\)) and [RANGE](javascript:call_link\('abapdo_varying.htm'\)) of the statement [DO](javascript:call_link\('abapdo.htm'\)). The addition VARY can be used more than once in a WHILE statement.

Hints

-   The way the addition VARY works depends on the internal structure of the working memory, which itself can be affected by [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry").
-   Instead of the addition VARY, the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) should be used in the loop with the addition [INCREMENT](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Invalid access to tables, strings, field references, or object references within the range specified by the addition RANGE.
    Runtime error: DO\_WHILE\_VARY\_ILLEGAL\_ACCESS
-   Cause: Access to data outside the range specified by the RANGE addition.
    Runtime error: DO\_WHILE\_VARY\_NOT\_IN\_RANGE
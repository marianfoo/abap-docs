  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DEMAND, ABAPDEMAND_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

DEMAND - Short Reference

[Reference](javascript:call_link\('abapdemand.htm'\))

Syntax

DEMAND val1 = f1 val2 = f2 ...
       FROM CONTEXT context\_ref
       *\[*MESSAGES INTO itab*\]*.

Effect

Obsolete: Assigns the derived values val1, val2, ... of a [context](javascript:call_link\('abencontext_glosry.htm'\) "Glossary Entry") instance referenced by context\_ref to the data objects f1, f2, ...

Addition  

-   MESSAGES INTO itab
    Appends [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of the context to the internal table itab. Otherwise messages are sent.
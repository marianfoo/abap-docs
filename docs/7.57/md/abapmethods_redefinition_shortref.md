  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: METHODS, REDEFINITION, ABAPMETHODS_REDEFINITION_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

METHODS, REDEFINITION - Short Reference

[Reference](javascript:call_link\('abapmethods_redefinition.htm'\))

Syntax

METHODS meth *\[*FINAL*\]* REDEFINITION.

Effect

[Redefines](javascript:call_link\('abenredefinition_glosry.htm'\) "Glossary Entry") a meth instance method in the declaration part of a class. The method is reimplemented in the implementation part.

Addition  

-   FINAL
    Makes a redefined method final so that it cannot be redefined again in a subclass.
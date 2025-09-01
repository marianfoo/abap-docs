  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DEFINE, ABAPDEFINE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

DEFINE - Short Reference

[Reference](javascript:call_link\('abapdefine.htm'\))

Syntax

DEFINE macro.
  ... &1 ... &9 ...
END-OF-DEFINITION.

Effect

Defines a [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") macro constructed from ABAP statements between DEFINE and END-OF-DEFINITION and that can contain placeholders &1, ..., &9. The macro can be included after its definition by specifying its name in the source code.
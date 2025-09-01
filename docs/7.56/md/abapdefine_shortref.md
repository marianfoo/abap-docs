  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

DEFINE - Short Reference

[Reference](javascript:call_link\('abapdefine.htm'\))

Syntax

DEFINE macro.
  ... &1 ... &9 ...
END-OF-DEFINITION.

Effect

Defines a [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") macro constructed from ABAP statements between DEFINE and END-OF-DEFINITION and that can contain placeholders &1, ..., &9. The macro can be included after its definition by specifying its name in the source code.
  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  D

DEFINE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdefine.htm)

Syntax

DEFINE macro.
  ... &1 ... &9 ...
END-OF-DEFINITION.

Effect

Defines a [macro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmacro_glosry.htm "Glossary Entry") macro constructed from ABAP statements between DEFINE and END-OF-DEFINITION and that can contain placeholders &1, ..., &9. The macro can be included after its definition by specifying its name in the source code.
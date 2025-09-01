  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  D

DATA, COMMON PART - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_common.htm)

Syntax

DATA BEGIN OF COMMON PART *\[*name*\]*.
  ...
  DATA ...
  ...
DATA END OF COMMON PART *\[*name*\]*.

Effect

Obsolete: Defines a global [interface work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") that can be shared by the programs in a [program group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_group_glosry.htm "Glossary Entry").

Addition

-   name
    Defines a name for the interface work area.
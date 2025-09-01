  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  M

MOVE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_obs.htm)

Syntax

MOVE *{**\[*EXACT*\]* source  TO destination*}*
   *|* *{*        source ?TO destination*}*.

Effect

Obsolete: Assigns the content of source to destination. To assign a general reference variable to a more specialized one, ?TO must be used.

Addition

-   EXACT
    Forces a [lossless assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_assignment_glosry.htm "Glossary Entry").
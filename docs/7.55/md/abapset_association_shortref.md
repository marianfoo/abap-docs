  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SET ASSOCIATION - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_set_association.htm)

Syntax

SET ASSOCIATION mesh\_path *{* = wa *}*
                        *|* *{* LIKE wa    *}*
                        *|* *{* INITIAL *}*.

Effect

Sets associations for a [mesh path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Addition

-   \= wa
    Sets key values for follow-on nodes.

-   LIKE wa
    Sets key values from initial nodes.

-   INITIAL
    Sets initial values.
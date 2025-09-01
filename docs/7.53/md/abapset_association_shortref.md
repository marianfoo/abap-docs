  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

SET ASSOCIATION - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_set_association.htm)

Syntax

SET ASSOCIATION mesh\_path *{* = wa *}*
                        *|* *{* LIKE wa    *}*
                        *|* *{* INITIAL *}*.

Effect

Sets associations for a [mesh path](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Addition

-   \= wa
    Sets key values for follow-on nodes.
    
-   LIKE wa
    Sets key values from initial nodes.
    
-   INITIAL
    Sets initial values.
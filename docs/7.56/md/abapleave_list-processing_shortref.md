  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  L

LEAVE LIST-PROCESSING - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_list-processing.htm)

Syntax

LEAVE LIST-PROCESSING.

Effect

Exits list processing and continues processing with the [PBO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpbo_glosry.htm "Glossary Entry") event of the [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") from which the list processor was called using LEAVE TO LIST-PROCESSING or the dynpro that was specified using AND RETURN TO SCREEN.
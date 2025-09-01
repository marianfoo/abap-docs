  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  C

CALL SCREEN - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_screen.htm)

Syntax

CALL SCREEN dynnr
            *\[*STARTING AT col1 lin1
            *\[*ENDING   AT col2 lin2*\]**\]*.

Effect

Calls the [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") of the number specified in dynnr and starts a [dynpro sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") defined by the [next dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennext_dynpro_glosry.htm "Glossary Entry") of the called dynpro.

Additions

-   STARTING AT col1 lin1
    Opens a modal dialog box at the position specified in col1 and lin1.
-   ENDING AT col2 lin2
    Defines the lower right corner of the modal dialog box at the position specified in col2 and lin2.
  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  L

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LEAVE%20LIST-PROCESSING%2C%20ABAPLEAVE_LIST-PROCESSING_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LEAVE LIST-PROCESSING - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_list-processing.htm)

Syntax

LEAVE LIST-PROCESSING.

Effect

Exits list processing and continues processing with the [PBO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpbo_glosry.htm "Glossary Entry") event of the [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") from which the list processor was called using LEAVE TO LIST-PROCESSING or the dynpro that was specified using AND RETURN TO SCREEN.
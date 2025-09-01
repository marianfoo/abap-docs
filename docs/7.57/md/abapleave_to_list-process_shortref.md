---
title: "LEAVE TO LIST-PROCESSING - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_list-processing.htm) Syntax LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN dynnr. Effect Calls list processing when the current dynpro(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_gl
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_list-process_shortref.htm"
abapFile: "abapleave_to_list-process_shortref.htm"
keywords: ["do", "if", "try", "abapleave", "list", "process", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  L

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LEAVE TO LIST-PROCESSING, ABAPLEAVE_TO_LIST-PROCESS_SHORTREF, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

LEAVE TO LIST-PROCESSING - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_list-processing.htm)

Syntax

LEAVE TO LIST-PROCESSING *\[*AND RETURN TO SCREEN dynnr*\]*.

Effect

Calls list processing when the current [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") is exited.

Additions   

-   AND RETURN TO SCREEN dynnr
    Specifies a dynpro dynnr to which the runtime framework returns when list processing is exited.
---
title: "conflict_resolution_glosry"
description: |
  conflict_resolution_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconflict_resolution_glosry.htm"
abapFile: "abenconflict_resolution_glosry.htm"
keywords: ["do", "if", "try", "abenconflict", "resolution", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: conflict resolution, ABENCONFLICT_RESOLUTION_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

conflict resolution

Term in [Switch Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_framework_glosry.htm "Glossary Entry"). A conflict occurs if multiple [enhancement implementation elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry") exist for a single [enhancement option](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_point_glosry.htm "Glossary Entry") for which only one enhancement can be carried out, and when more than one of these enhancement implementation elements are switched on at the same time. Currently, a conflict can occur with the statements [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapenhancement-section.htm) and [GET BADI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_badi.htm). To resolve the conflict, the [conflict resolving enhancement implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") with the highest priority is searched among the [enhancement implementations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") and its enhancement implementation element is then used.
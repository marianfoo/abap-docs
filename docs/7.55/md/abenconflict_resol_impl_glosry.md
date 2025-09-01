---
title: "conflict_resol_impl_glosry"
description: |
  conflict_resol_impl_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconflict_resol_impl_glosry.htm"
abapFile: "abenconflict_resol_impl_glosry.htm"
keywords: ["do", "try", "abenconflict", "resol", "impl", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

conflict resolving enhancement implementation

An [enhancement implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") to which a [conflict switch](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconflict_switch_glosry.htm "Glossary Entry") is assigned instead of a regular [switch](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenswitch_glosry.htm "Glossary Entry"). A conflict resolving enhancement implementation is used for [conflict resolution](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconflict_resolution_glosry.htm "Glossary Entry"). It must mirror the common semantics of all regular enhancement implementations that can potentially be switched on at the same time and which then show conflicts. These enhancement implementations can be determined by assigning switches to the conflict switch. During conflict resolution, a conflict resolving enhancement implementation has priority over regular enhancements. In the event of multiple conflict resolving enhancement implementations exist, the one that resolves the most conflicts takes priority.
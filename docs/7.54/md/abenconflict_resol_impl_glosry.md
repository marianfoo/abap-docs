---
title: "conflict_resol_impl_glosry"
description: |
  conflict_resol_impl_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconflict_resol_impl_glosry.htm"
abapFile: "abenconflict_resol_impl_glosry.htm"
keywords: ["do", "if", "try", "abenconflict", "resol", "impl", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

conflict resolving enhancement implementation

An [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") to which a [conflict switch](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconflict_switch_glosry.htm "Glossary Entry") is assigned instead of a regular [switch](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry"). A conflict resolving enhancement implementation is used for [conflict resolution](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconflict_resolution_glosry.htm "Glossary Entry"). It has to mirror the collective semantics of all regular enhancement implementations that can potentially be switched on at the same time and which then show conflicts. These enhancement implementations can be defined using the switches assigned to the conflict switch. When resolving conflicts, a conflict resolving enhancement implementation has priority over regular enhancements. If multiple conflict resolving enhancement implementations exist, the one that resolves the most conflicts takes priority.
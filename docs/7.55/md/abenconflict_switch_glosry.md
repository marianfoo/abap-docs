---
title: "conflict_switch_glosry"
description: |
  conflict_switch_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconflict_switch_glosry.htm"
abapFile: "abenconflict_switch_glosry.htm"
keywords: ["do", "if", "case", "try", "abenconflict", "switch", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

conflict switch

A special [switch](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenswitch_glosry.htm "Glossary Entry") for [conflict resolution](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconflict_resolution_glosry.htm "Glossary Entry"). Multiple regular switches are assigned to a conflict switch. The switch status of a conflict switch is determined by the switch status of the assigned switches: on if all assigned switches are on, off if at least one assigned switch is off, and standby in all remaining cases. For every combination of [enhancement implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") to which the regular switches of the conflict switch are assigned, a [conflict resolving enhancement implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") must be created to which the conflict switch is assigned.
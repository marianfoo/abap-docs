---
title: "The predefined structure screen"
description: |
  In dynpro(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm 'Glossary Entry') processing in dialog modules, the predefined data object screen of the data type SCREEN from ABAP Dictionary is available. It can be addressed explicitly there and implicitly in obsolete sh
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_structure_obsolete.htm"
abapFile: "abenscreen_structure_obsolete.htm"
keywords: ["loop", "do", "if", "try", "data", "abenscreen", "structure", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Predefined Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_obsolete.htm) → 

The predefined structure screen

In [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") processing in dialog modules, the predefined data object screen of the data type SCREEN from ABAP Dictionary is available. It can be addressed explicitly there and implicitly in obsolete short forms.

-   [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_at_screen_obsolete.htm)

-   [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodify_screen_obsolete.htm)

can be used. A data object screen declared explicitly in the current context hides the predefined structure.

Notes

-   Instead of the predefined structure screen, use explicitly declared work areas of the type SCREEN in the long forms of the statements above.

-   Do not use LOOP AT SCREEN INTO screen or MODIFY SCREEN FROM screen to access the obsolete predefined structure, even in the long forms.
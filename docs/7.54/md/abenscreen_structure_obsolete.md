---
title: "The Built-In Structure screen"
description: |
  In dynpro(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm 'Glossary Entry') processing in dialog modules, the built-in data object screen of the data type SCREEN from ABAP Dictionary is available. It can be addressed explicitly there and implicitly in obsolete shor
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_structure_obsolete.htm"
abapFile: "abenscreen_structure_obsolete.htm"
keywords: ["loop", "do", "if", "try", "data", "abenscreen", "structure", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Predefined Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_obsolete.htm) → 

The Built-In Structure screen

In [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") processing in dialog modules, the built-in data object screen of the data type SCREEN from ABAP Dictionary is available. It can be addressed explicitly there and implicitly in obsolete short forms.

-   [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_at_screen_obsolete.htm)

-   [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodify_screen_obsolete.htm)

can be used. A data object screen declared explicitly in the current context obscures the built-in structure.

Notes

-   Instead of the built-in structure screen, use explicitly declared work areas of the type SCREEN in the long forms of the statements above.

-   LOOP AT SCREEN INTO screen or MODIFY SCREEN FROM screen should not be used to access the obsolete built-in structure, even in the long forms.
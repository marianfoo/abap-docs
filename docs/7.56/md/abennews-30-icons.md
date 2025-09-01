  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 3.0](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-30.htm) → 

Representation of Icons on Dynpros in Release 3.0

From Release 3.0, icons can be represented on [dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry"). Either Screen Painter is used to define the icons or the function module ICON\_CREATE for setting icons dynamically from an ABAP program. <ICON\> must be included in the program so that the icons can be addressed using their symbolic names. It is important that the [dynpro field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_field_glosry.htm "Glossary Entry") that contains an icon at runtime is at least as long as the identically named ABAP field. Apart from the icon name, the field should also be able to accommodate a short information text.
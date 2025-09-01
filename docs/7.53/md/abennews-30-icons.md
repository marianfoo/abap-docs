  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 3.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-30.htm) → 

Representation of Icons on Dynpros in Release 3.0

From Release 3.0, icons can be represented on [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"). Either Screen Painter is used to define the icons or the function module ICON\_CREATE for setting icons dynamically from an ABAP program. <ICON\> must be included in the program so that the icons can be addressed using their symbolic names. It is important that the [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") that contains an icon at runtime is at least as long as the identically named ABAP field. Apart from the icon name, the field should also be able to accommodate a short information text.
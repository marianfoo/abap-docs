  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 3.0](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-30.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Representation%20of%20Icons%20on%20Dynpros%20in%20ABAP%20Release%203.0%2C%20ABENNEWS-30-ICONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

Representation of Icons on Dynpros in ABAP Release 3.0

From ABAP release 3.0, icons can be represented on [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"). Either Screen Painter is used to define the icons or the function module ICON\_CREATE for setting icons dynamically from an ABAP program. <ICON\> must be included in the program so that the icons can be addressed using their symbolic names. It is important that the [dynpro field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") that contains an icon at runtime is at least as long as the identically named ABAP field. Apart from the icon name, the field should also be able to accommodate a short information text.
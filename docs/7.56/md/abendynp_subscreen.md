  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynp_subscreens.htm) → 

dynpro - Including Subscreens Directly

The statement [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpcall.htm) can be used to include other screen layouts directly in the [screen layout](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") in the form of subscreens. Here, subscreen areas must first be defined in the screen layout of the current dynpro. Every subscreen area has a unique name and can be configured to support changes in screen size. If the latter is defined, each size change in the current GUI window raises the [PAI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpai_glosry.htm "Glossary Entry") event.

Subscreens are the screen layouts of special [subscreen dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry"). When a subscreen is included, the flow logic of the subscreen dynpro is also included. Subscreens can also include other subscreens. Subscreens cannot have their own OK field. Instead, user actions on subscreens pass the function codes to the OK field of the including dynpro. In the PAI event block of a subscreen dynpro, a [MODULE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpmodule.htm) statement is never executed with the AT EXIT-COMMAND addition.

Hint

Subscreens dynpros are defined like regular dynpros in the [Screen Painter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_painter_glosry.htm "Glossary Entry") and are flagged there as regular dynpros. [Selection screens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_subscreen.htm) can also be defined as subscreens.

Executable Example

[Dynpros, Subscreens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_subscreen_abexa.htm)
  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_dynpro_statements.htm) →  [Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynp_subscreens.htm) → 

Including Subscreens Directly

The statement [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpcall.htm) can be used to insert other screens directly into the [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") in the form of subscreens. Subscreen areas must first be defined in the current screen of the dynpro. Every subscreen area has a unique name and can be configured to support changes in screen size. If the latter is defined, each size change in the current GUI window triggers the [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") event.

Subscreens are the screens of special [subscreen dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry"). When a subscreen is inserted, the flow logic of the subscreen dynpro is also inserted. Subscreens can also insert other subscreens. Subscreens cannot have their own OK field. Instead, user actions on subscreens pass the function codes to the OK field of the dynpro that includes the subscreen. In the PAI event block of a subscreen dynpro, a [MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpmodule.htm) statement is never executed with the AT EXIT-COMMAND addition.

Note

Subscreens dynpros are defined like normal dynpros in [Screen Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_painter_glosry.htm "Glossary Entry") and are flagged there as regular dynpros. [Selection screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_subscreen.htm) can also be defined as subscreens.

Executable Example

[Dynpros, Subscreens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_subscreen_abexa.htm)
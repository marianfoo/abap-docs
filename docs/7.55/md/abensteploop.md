  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_obsolet.htm) → 

dynpro - Obsolete Processing of Step Loops

Step loops are the predecessors of [table controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_control_glosry.htm "Glossary Entry") and are defined without individual descriptions in [Screen Painter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_painter_glosry.htm "Glossary Entry"). A step loop contains screen elements that, unlike table controls, can occupy multiple rows, grouped together in one group that can be repeated multiple times within the step loop on the [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry"). The attributes of the screen elements of the first group define the attributes of the whole step loop. For this reason, the fields of a group can only be created once in each of the [dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") and the ABAP program.

In Screen Painter, you can also determine whether the size of the step loop is fixed or variable. For each screen, you can define more than one fixed step loop, but only one variable step loop. If the user changes the vertical size of the GUI window, this also changes the vertical size of the variable step loop. This raises the event [PAI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpai_glosry.htm "Glossary Entry").

Processing of step loops and table controls is based on the step loop technique, whose main features are the statements LOOP ... ENDLOOP in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"). These statements produce a loop pass across the step loop rows displayed on the screen and a data transport between the ABAP program and dynpro for all like-named data objects.

Independent step loops are obsolete and are replaced by table controls, which are based on step loop but encapsulate them. Accordingly, the specified variants of the [LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynploop_obsolete.htm) statement are obsolete in the dynpro flow logic. The LOOP statement of the dynpro flow logic should only be used with the [WITH CONTROL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynploop.htm) addition, which assigns a table control to the statement.

Continue
[dynpro - LOOP, Step Loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/dynploop_obsolete.htm)
![Example](exa.gif "Example") [dynpro - Step Loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensteploop_abexa.htm)
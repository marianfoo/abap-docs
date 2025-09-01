  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) →  [Changes in Release 4.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-40.htm) → 

Selection Screens in Release 4.0

[1\. Selection screens can now be used universally: CALL SELECTION-SCREEN.](#!ABAP_MODIFICATION_1@1@)

[2\. Variants can be assigned to more than one selection screen.](#!ABAP_MODIFICATION_2@2@)

[3\. Specifying a selection screen in the statement SUBMIT.](#!ABAP_MODIFICATION_3@3@)

[4\. The initial selection screen and variant can now be specified in transaction code maintenance for report transactions.](#!ABAP_MODIFICATION_4@4@)

[5\. More user-friendly design of the multiple selection GUI window](#!ABAP_MODIFICATION_5@5@)

[6\. Parameters and selection criteria with dynamic dictionary references](#!ABAP_MODIFICATION_6@6@)

[7\. Function modules RS\_SELECTIONSCREEN\_READ and RS\_SELECTIONSCREEN\_UPDATE for self-programmed F4 on selection screens.](#!ABAP_MODIFICATION_7@7@)

Modification 1

[Selection screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") can now be used universally: [CALL SELECTION-SCREEN  scrn](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_selection_screen.htm)
The language elements [SELECTION-SCREEN BEGIN/END OF SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_definition.htm) can be used to define multiple selection screens in module pools and function groups. These selection screens are called using [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_selection_screen.htm).

Modification 2

Variants can be assigned to one or more selection screens. [CALL SELECTION-SCREEN scrn USING SELECTION-SET variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_selection_screen.htm)
Only the objects from the assigned screens are saved with the variant. Only the variants assigned to a screen are presented on that screen.

Modification 3

Specifying a selection screen in the statement [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm).
[SUBMIT report USING SELECTION-SCREEN scrn](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm) can be used to start a report using different selection screens.

Modification 4

Specifying the initial selection screen for a variant in transaction code maintenance for [report transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreport_transaction_glosry.htm "Glossary Entry").
This allows the initial screen to be set for a report started using a transaction code. A variant can also be made active when the transaction is called (including all of the usual features of variants, such as variables, hiding objects and so on). For example, different transactions can use the same report, but with different [selection screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") or variants.

Modification 5

More user-friendly design of the multiple selection GUI window
This screen is now organized in a much clearer manner using
[tabstrip controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentabstrip_control_glosry.htm "Glossary Entry") and table controls.

Modification 6

Parameters and selection criteria with dynamic dictionary references.
This allows dictionary references (and hence the type, length,
documentation, and value help) to be set at runtime.

Modification 7

Function modules RS\_SELECTIONSCREEN\_READ and RS\_SELECTIONSCREEN\_UPDATE.
In the same way as the function modules DYNP\_VALUES\_READ and DYNP\_VALUES\_UPDATE for regular [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"),
both function modules allow access to user entries on selection screens or values to be modified on selection screens with their own F4. These function modules were created with the multiple selection screen in mind, since the field names used there are unknown to the application program.
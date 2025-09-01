  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-4.htm) →  [News for ABAP Release 4.0](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-40.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20in%20ABAP%20Release%204.0%2C%20ABENNEWS-40-SELSCREEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens in ABAP Release 4.0

[1\. Explicit Calls of Selection Screens](#!ABAP_MODIFICATION_1@1@)
[2\. Calling with Variants](#!ABAP_MODIFICATION_2@2@)
[3\. Calling with SUBMIT](#!ABAP_MODIFICATION_3@3@)
[4\. Initial Selection Screen for Transactions](#!ABAP_MODIFICATION_4@4@)
[5\. New Design of Multiple Selection Screen](#!ABAP_MODIFICATION_5@5@)
[6\. Dictionary References](#!ABAP_MODIFICATION_6@6@)
[7\. New Function Modules](#!ABAP_MODIFICATION_7@7@)

Modification 1   

Explicit Calls of Selection Screens

[Selection screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry") can now be used universally: [CALL SELECTION-SCREEN  scrn](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_selection_screen.htm)

The language elements [SELECTION-SCREEN BEGIN/END OF SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_definition.htm) can be used to define multiple selection screens in module pools and function pools. These selection screens are called using [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_selection_screen.htm).

Modification 2   

Calling with Variants

Selection screen variants can be assigned to one or more selection screens. [CALL SELECTION-SCREEN scrn USING SELECTION-SET variant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_selection_screen.htm)

Only the objects from the assigned screens are saved with the variant. Only the variants assigned to a screen are presented on that screen.

Modification 3   

Calling with SUBMIT

Specifying a selection screen in the statement [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm).

[SUBMIT report USING SELECTION-SCREEN scrn](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) can be used to start a report using different selection screens.

Modification 4   

Initial Selection Screen for Transactions

Specifying the initial selection screen for a variant in transaction code maintenance for [report transactions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreport_transaction_glosry.htm "Glossary Entry").

This allows the initial screen to be set for a report started using a transaction code. A variant can also be made active when the transaction is called (including all of the usual features of variants, such as variables, hiding objects and so on). For example, different transactions can use the same report, but with different [selection screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry") or variants.

Modification 5   

New Design of Multiple Selection Screen

More user-friendly design of the multiple selection GUI window

This screen is now organized in a much clearer manner using [tabstrip controls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentabstrip_control_glosry.htm "Glossary Entry") and table controls.

Modification 6   

Dictionary References

Parameters and selection criteria with dynamic dictionary references.

This allows dictionary references (and hence the type, length, documentation, and value help) to be set at runtime.

Modification 7   

New Function Modules

Function modules RS\_SELECTIONSCREEN\_READ and RS\_SELECTIONSCREEN\_UPDATE.

In the same way as the function modules DYNP\_VALUES\_READ and DYNP\_VALUES\_UPDATE for regular [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"), both function modules allow access to user entries on selection screens or values to be modified on selection screens with their own F4. These function modules were created with the multiple selection screen in mind, since the field names used there are unknown to the application program.
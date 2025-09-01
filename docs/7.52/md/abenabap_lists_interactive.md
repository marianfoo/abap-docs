  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) → 

Event Blocks for Lists

List events appear during the creation of a list, and following certain user actions on a displayed list. They used to process lists in the ABAP program. We differentiate between events during list creation, and interactive list events for processing user actions in a displayed list.

The events during list creation,

-   [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptop-of-page.htm)

-   [END-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-page.htm)

enable page headers and footers to be defined independently of the actual page length, which is particularly helpful for the output of spool lists on different paper formats.

The events following user actions on displayed lists,

-   [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_line-selection.htm)

-   [AT USER-COMMAND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_user-command.htm)

-   [AT PFnn](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_pfnn.htm)

enable details lists to be created.

The following statement can be used to trigger a list-event in a program-driven manner:

-   [SET USER-COMMAND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_user-command.htm)

Notes

-   At the end of execution of each event block for lists, the statement [NEW-LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-line.htm) is executed implicitly as in every [event block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_blocks.htm).

-   List events can be triggered in a program-driven manner with the [SET USER-COMMAND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_user-command.htm) statement, instead of by user action on a displayed list.

Continue
[TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptop-of-page.htm)
[END-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-page.htm)
[AT list\_event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_list_event.htm)
[SET USER-COMMAND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_user-command.htm)
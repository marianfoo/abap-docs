  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) → 

Event Blocks for Lists

List events appear during the creation of a list, and following certain user actions on a displayed list. They used to process lists in the ABAP program. We differentiate between events during list creation, and interactive list events for processing user actions in a displayed list.

The events during list creation,

-   [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptop-of-page.htm)

-   [END-OF-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-of-page.htm)

make it possible to define page headers and footers independently of the actual page length, which is particularly helpful for the output of spool lists on different paper formats.

The events following user actions on displayed lists,

-   [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_line-selection.htm)

-   [AT USER-COMMAND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_user-command.htm)

-   [AT PFnn](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_pfnn.htm)

, enable you to create details lists.

The following statement can be used to trigger a list-event in a program-controlled manner:

-   [SET USER-COMMAND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_user-command.htm)

Notes

-   After the execution of each event block for lists, the statement [NEW-LINE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-line.htm) is executed implicitly as in every [event block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_blocks.htm).

-   List events can be raised as program-driven events using the statement [SET USER-COMMAND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_user-command.htm), instead of by user action on a displayed list.

Continue
[TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptop-of-page.htm)
[END-OF-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-of-page.htm)
[AT list\_event](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_list_event.htm)
[SET USER-COMMAND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_user-command.htm)
  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) → 

Classic Lists

A classical list is a medium used for the structured and formatted output of data. List output is either written to a [list buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_buffer_glosry.htm "Glossary Entry") as a [screen list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_list_glosry.htm "Glossary Entry") and displayed on a [list dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_dynpro_glosry.htm "Glossary Entry") or is sent to the [SAP spool system](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_spool_system_glosry.htm "Glossary Entry") as a [spool list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprint_list_glosry.htm "Glossary Entry").

-   [Lists - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_overview.htm)

-   [Lists - System Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_systemfields.htm)

-   [Spooling Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprint.htm)

-   [Creating Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists.htm)

-   [Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists_complex.htm)

-   [List Display](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlists_displayed.htm)

-   [Event Blocks for Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists_interactive.htm)

-   [System Class for Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_list_utilities.htm)

Note

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   For table list output, the classes of SAP List Viewer (ALV), such as CL\_SALV\_TABLE, should be used.

-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_output_abexa.htm) shows an executable example of the latter.

-   For simple console output, XML-based output streams can be used. An example of this is shown by the class CL\_DEMO\_OUTPUT\_STREAM. The program DEMO\_OUTPUT\_STREAM shows potential uses of this class. The class CL\_DEMO\_OUTPUT, which is based on CL\_DEMO\_OUTPUT\_STREAM, is used in programs from the [ABAP Example Library](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_examples.htm).

Continue
[Lists - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_overview.htm)
[Lists - System Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_systemfields.htm)
[Creating Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists.htm)
[Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists_complex.htm)
[Displaying Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlists_displayed.htm)
[Spooling Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprint.htm)
[Event Blocks for Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists_interactive.htm)
[System Class for Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_list_utilities.htm)
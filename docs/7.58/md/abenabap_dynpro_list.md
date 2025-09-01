  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Classic%20Lists%2C%20ABENABAP_DYNPRO_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Classic Lists

A classic list or list for short is a medium used for the structured and formatted output of data. List output is either written to a [list buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_buffer_glosry.htm "Glossary Entry") as a [screen list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_list_glosry.htm "Glossary Entry") and displayed on a [list dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_dynpro_glosry.htm "Glossary Entry") or is sent to the [SAP spool system](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_spool_system_glosry.htm "Glossary Entry") as a [spool list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenspool_list_glosry.htm "Glossary Entry").

-   [Lists - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_overview.htm)
-   [Lists - System Fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_systemfields.htm)
-   [Spooling Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprint.htm)
-   [Creating Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists.htm)
-   [Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists_complex.htm)
-   [List Display](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlists_displayed.htm)
-   [Event Blocks for Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists_interactive.htm)
-   [System Class for Classic Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_list_utilities.htm)

Hint

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   For tabular list output, the classes of SAP List Viewer (ALV) are used, for example CL\_SALV\_TABLE.
-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_output_abexa.htm) shows an executable example of the latter.
-   For simple console output, XML-based output streams can be used. An example of this is shown by the class [CL\_DEMO\_OUTPUT\_STREAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_demo_output.htm). The program DEMO\_OUTPUT\_STREAM shows potential uses of this class. The class CL\_DEMO\_OUTPUT, which is based on CL\_DEMO\_OUTPUT\_STREAM, is used in programs from the [ABAP Example Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_examples.htm).

Continue
[Lists - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_overview.htm)
[Lists - System Fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_systemfields.htm)
[Lists - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists.htm)
[Lists - Editing List Buffers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists_complex.htm)
[Lists - Display](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlists_displayed.htm)
[Lists - Spool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprint.htm)
[Lists - Event Blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists_interactive.htm)
[Lists - System Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_list_utilities.htm)
  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-6.htm) →  [News for ABAP Release 6.40](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-640.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%20in%20ABAP%20Release%206.40%2C%20ABENNEWS-640-LISTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lists in ABAP Release 6.40

Modification

Lists and Unicode

In Unicode systems, each character in the list buffer has a position but can occupy more than one column in the list, which is of particular relevance for Asian characters. However, since the list only contains the same number of columns as there are positions in the list buffer, this means the list can only display fewer characters than are stored in the list buffer. The list output is therefore shortened accordingly and the page conforms to the [alignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenalignment_gap_glosry.htm "Glossary Entry"). The horizontal position of the [list cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_cursor_glosry.htm "Glossary Entry") is only the same in the non-Unicode systems as the output column of displayed or spooled lists. In Unicode systems, this is only guaranteed for the top and bottom output limits.

The following changes were made in ABAP to comply with the behavior of lists in Unicode systems:

-   If list output in a Unicode system is reduced, this is indicated by an indicator \> or <. The complete content can then be displayed by choosing System → List → Unicode Display.
-   So that unnecessary reductions are not made in the Unicode systems, the new specifications \* and \*\* were introduced for the [output length](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_output_length.htm) in the [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) statement.
-   In Unicode systems, [predefined output formats](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_formats.htm) or [predefined output lengths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_output_length.htm) that are different to non-Unicode systems are valid.

Hint

These changes were also downported to ABAP release 6.20.
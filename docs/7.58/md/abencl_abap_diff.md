---
title: "Executable Example"
description: |
  itab -Using CL_ABAP_DIFF(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_diff_abexa.htm) !Example(exa.gif 'Example') itab - Using CL_ABAP_DIFF(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_diff_abexa.htm)
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_diff.htm"
abapFile: "abencl_abap_diff.htm"
keywords: ["insert", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abencl", "abap", "diff"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - System Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_system_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20System%20Class%20CL_ABAP_DIFF%2C%20ABENCL_ABAP_DIFF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - System Class CL\_ABAP\_DIFF

The class CL\_ABAP\_DIFF compares the content of compatible [index tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenindex_table_glosry.htm "Glossary Entry") and returns information about any differences found.

-   The static factory method CREATE creates an instance of the class and returns a reference for working with the instance methods. Its importing parameters adjust he granularity of the difference determination:
    -   CASING\_MODE determines if the comparison of character strings is case sensitive or not.
    -   CASING\_MODE determines if leading blanks of character strings are taken into account or not.
    -   TRAILING\_SPACES\_MODE determines if trailing blanks of character strings are taken into account or not.
    -   OUTPUT\_MODE determines if the output should be shown as insert/delete or insert/delete/update operations.
-   The instance method DIFF compares the content of two compatible [index tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenindex_table_glosry.htm "Glossary Entry"). If the content is different, it returns an internal table that shows how the content of the first internal table can be transformed to the content of the second internal table by insert/delete or optionally by insert/delete/update operations.
-   The instance method DIFF\_WITH\_LINE\_REF works as DIFF but returns an extended result with references to the original table lines.

Executable Example

[itab -Using CL\_ABAP\_DIFF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_diff_abexa.htm)

Continue
![Example](exa.gif "Example") [itab - Using CL\_ABAP\_DIFF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_diff_abexa.htm)
  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SORT%2C%20ABAPSORT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SORT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_extract.htm)

Syntax

SORT *\[*ASCENDING*|*DESCENDING*\]*
     *\[*AS TEXT*\]*
     *\[*STABLE*\]*
     *\[*BY *{*field1 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
         *{*field2 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
         ...*\]*.

Effect

Obsolete: Sorts the [extract dataset](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextract_dataset_glosry.htm "Glossary Entry") after the [field group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_group_glosry.htm "Glossary Entry") header.

Additions   

-   [ASCENDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_extract.htm)
    Sorts in ascending order.
-   [DESCENDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_extract.htm)
    Sorts in descending order.
-   [AS TEXT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_extract.htm)
    Sorts text-like components in accordance with the [locale](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocale_glosry.htm "Glossary Entry") of the current [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry").
-   [STABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_extract.htm)
    Ensures stable sorting by retaining the relative order of non-affected lines.
-   [BY field1 ... field2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_key.htm)
    Sorts by specified fields field1, field2, ... instead of by field group header.
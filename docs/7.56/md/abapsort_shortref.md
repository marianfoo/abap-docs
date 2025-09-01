  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  S

SORT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_extract.htm)

Syntax

SORT *\[*ASCENDING*|*DESCENDING*\]*
     *\[*AS TEXT*\]*
     *\[*STABLE*\]*
     *\[*BY *{*field1 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
         *{*field2 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
         ...*\]*.

Effect

Obsolete: Sorts the [extract dataset](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextract_dataset_glosry.htm "Glossary Entry") after the [field group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield_group_glosry.htm "Glossary Entry") header.

Additions

-   [ASCENDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_extract.htm)
    Sorts in ascending order.
-   [DESCENDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_extract.htm)
    Sorts in descending order.
-   [AS TEXT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_extract.htm)
    Sorts text-like components in accordance with the [locale](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocale_glosry.htm "Glossary Entry") of the current [text environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_environment_glosry.htm "Glossary Entry").
-   [STABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_extract.htm)
    Ensures stable sorting by retaining the relative order of non-affected lines.
-   [BY field1 ... field2 ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_key.htm)
    Sorts by specified fields field1, field2, ... instead of by field group header.